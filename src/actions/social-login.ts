"use server"

import { signIn } from "@/auth"

export async function socialLogin(){
    await signIn("google",{redirectTo: "/?feedbackDialog=true"})
}