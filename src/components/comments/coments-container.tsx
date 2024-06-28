import { getFeedbacks } from "@/actions/get-feedbacks";

import { UsersComments } from "./user-comment";

export async function CommentsContainer() {
    const feedbacks = await getFeedbacks();
    return (
        <div className="sm:px-0">
            <UsersComments feedbacks={feedbacks} />
        </div>
    );
}
