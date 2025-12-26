"use server";
import { api } from "@/axios/api";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import z from "zod";

export async function POST(request: NextRequest) {
  return "hilo";
}

async function wait() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

export async function loginFormAction(
  state: { error?: string },
  formData: FormData
): Promise<{ error?: string }> {
  "use server";
  const schema = z.object({
    email: z.email({ message: "Invalid email" }),
    password: z
      .string({ message: "password required" })
      .min(3, { message: "password must be more than 3 character." })
      .max(50, { message: "password must be less than 50 character." }),
  });

  // await wait();

  const parsedData = await schema.safeParseAsync({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsedData.success) {
    return { error: parsedData.error.issues[0].message };
  }

  try {
    const axiosRes = await api.post("/user/auth/login", {
      email: parsedData.data.email,
      password: parsedData.data.password,
    });

    console.log(axiosRes.data);

    const cookieStore = await cookies();
    cookieStore.set({
      name: "auth_token",
      value: axiosRes?.data?.data?.auth_token,
      httpOnly: true,
      secure: true, // REQUIRED for HTTPS
      sameSite: "lax", // or "strict"
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  } catch (error) {
    const err = error as AxiosError;
    return { error: (err.response?.data as any)?.error || "An error occurred" };
  }

  redirect("/");
}
