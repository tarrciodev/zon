import { useClient } from "@/grahql/client";
import { GET_FEEDBACKS } from "@/grahql/queries/feedbacks";

interface IFeedBacks {
    userName: string
    userEmail: string
    userAvatar: string
    comment: string
}

export async function getFeedbacks(): Promise<IFeedBacks[]>{
    const data = await useClient.request(GET_FEEDBACKS) as {feedbacks: IFeedBacks[]}
    return data.feedbacks
}