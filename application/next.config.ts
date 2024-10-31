import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    jwt_secret: "jwt secret should more complex like highly secured password that can't be gueesed!",
    server_domain: "http://127.0.0.1:5000", //domain used for backend;
    communication_domain: "http://127.0.0.1:8080", //domain used for socket io;
  }
};

export default nextConfig;
