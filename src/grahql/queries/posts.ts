import { gql } from "graphql-request";

export const GET_POSTS = gql`
    query getPosts($take: Int) {
        posts(first: $take) {
            title
            slug
            publishedAt
            content {
                html
            }
            cover {
                url
            }
            excerpt
        }
    }
`;