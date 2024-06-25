"use server";

import { useClient } from "@/grahql/client";
import { CREATE_FEEDBACK } from "@/grahql/mutations/create-feedback";

interface createFeedbackProps {
    userName: string;
    userEmail: string;
    userAvatar: string;
    comment: string;
}

export async function giveFeedBack(feedback: createFeedbackProps) {
    const createFeedback = await useClient.request(CREATE_FEEDBACK, feedback);
    console.log(createFeedback);
}
