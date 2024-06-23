"use server"
import { auth } from "@/auth";

export async function getAuthInfo(){
    const session = await auth();
    return session
}