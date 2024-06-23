"use server";
import { Resend } from "resend";
import { ContactUsEmailBody } from "@/components/email/contact-us";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY as string);

type SendEmailProps = {
    friendlyName?: string;
    message: string;
    replayTo?: string;
    to?: string;
    subject: string;
};

type SendEmailResponse = {
    status: "ok" | "failed";
    message: string;
};

export async function sendEmail({
    message,
    replayTo,
    to,
    subject,
    friendlyName,
}: SendEmailProps) {
    const sended = await resend.emails.send({
        from: `${friendlyName}<onboarding@resend.dev>`,
        to: ["tarcisio.devmaster@gmail.com"],
        reply_to: replayTo,
        subject: subject,
        react: ContactUsEmailBody({ text: message, subject}),
    });

    console.log(sended);

    if (!sended) {
        return {
            status: "failed",
            message: "Something went wrong",
        };
    }

    return {
        status: "ok",
        message: "Email Sent successfully",
    };
}


