"use server";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import z from "zod";
import { FormState } from "../components/server/RegisterFrom";

export async function POST(req: NextRequest) {
  return "hilo";
}

export async function registerFormAction(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  "use server";
  const schema = z.object({
    email: z.email({ message: "Invalid Email" }),
    password: z
      .string({ message: "password required" })
      .min(6, { message: "password must be 6 character long" })
      .max(40, { message: "password should less than 40 character" }),
    otp: z.string({ message: "email otp required" }),
  });

  const parsedData = await schema.safeParseAsync({
    email: formData.get("email"),
    password: formData.get("password"),
    otp: formData.get("otp"),
  });

  if (!parsedData.success) {
    // return { error: parsedData.error.issues[0] };
  }

  redirect("/")
}
