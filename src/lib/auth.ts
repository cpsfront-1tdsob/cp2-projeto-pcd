"use server"

import { cookies } from "next/headers"

export async function isUserLoggedIn(): Promise<boolean> {
  // Check for server-side cookie
  const token = (await cookies()).get("token")

  // If we have a token in the cookie, the user is logged in
  if (token) {
    return true
  }

  // If we don't have a token in the cookie, the user is not logged in
  return false
}

export async function loginUser(token: string) {
  ;(await cookies()).set("token", token, {
    path: "/",
    maxAge: 60 * 60 * 24,
    httpOnly: false,
    secure: false,
  })
}
