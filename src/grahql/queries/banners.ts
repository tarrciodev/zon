import { gql } from "graphql-request";

export const GET_BANNERS = gql`
    query getBanners {
        banners {
            action
            description
            title
            main
            cover {
                url
            }
        }
    }
`;