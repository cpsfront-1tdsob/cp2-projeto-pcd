"use server";

import { cookies } from "next/headers";

export async function isUserLoggedIn(): Promise<boolean> {
  const token = (await cookies()).get("token");

  return !!token;
}

export async function loginUser(token:string) {
    (await cookies()).set("token", token,{
        path:"/",
        maxAge:60 * 60 * 24,
        httpOnly: false,
        secure:false
    });
}   