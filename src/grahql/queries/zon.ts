import { gql } from "graphql-request";

export const GET_ZON_CONTACTS = gql`
    query getZonContacts {
        zons {
            whatsappLink
            whatsappNumber
            linkedin
            instagram
            facebook
        }
    }
`;
