import { gql } from "graphql-request";

export const GET_SERVICE_BY_SLUG = gql`
    query GetService($slug: String) {
        service(where: { slug: $slug }) {
            slug
            title
            description
            plans {
                title
                description
                price
                recomendation
            }
        }
    }
`;