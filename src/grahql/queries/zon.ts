import { gql } from "graphql-request";

export const GET_ZON_WHATSAPP = gql`
    query GetWhatsapp {
        zons {
            whatsapp
        }
    }
`;