import { gql } from 'graphql-request'

export const CREATE_FEEDBACK = gql`
    mutation addFeedback(
        $userName: String!
        $userEmail: String!
        $userAvatar: String
        $comment: String!
    ) {
        createFeedback(
            data: {
                userName: $userName
                userEmail: $userEmail
                userAvatar: $userAvatar
                comment: $comment
            }
        ) {
            userName
            userEmail
            userAvatar
            comment
        }
    }
`;
