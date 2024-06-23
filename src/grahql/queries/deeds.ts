import { gql } from "graphql-request";

export const GET_DEEDS = gql`
    query getDeeds {
        deeds {
            description
            title
            numbers
        }
    }
`;