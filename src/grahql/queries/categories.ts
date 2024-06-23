import { gql } from "graphql-request";

export const GET_CATEGORIES = gql`
    query Categories {
        servicesCategories {
            name
            description
        }
    }
`;

export const GET_CATEGORIES_AND_SERVICES = gql`
    query Categories {
        servicesCategories {
            name
            services {
                slug
                title
            }
        }
    }
`;