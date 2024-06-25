import { getFeedbacks } from "@/actions/get-feedbacks";

import { UsersComments } from "./user-comment";

export async function CommentsContainer() {
    const feedbacks = await getFeedbacks();
    return (
        <div>
            <UsersComments feedbacks={feedbacks} />
        </div>
    );
}
