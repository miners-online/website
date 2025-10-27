import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL!,
  fetchOptions: {
    credentials: "include",
    mode: "cors"
  }
})

export const { signIn, signUp, signOut, useSession } = authClient;