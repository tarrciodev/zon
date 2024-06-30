import { gql } from "graphql-request";

export const GET_FEEDBACKS = gql`
    query getFEEDBACKS {
        feedbacks {
            userName
            userAvatar
            comment
        }
    }
`;