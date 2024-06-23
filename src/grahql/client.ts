import { GraphQLClient } from "graphql-request";

const hygraph_api = process.env.HYGRAPH_API as string
const hygraph_access_token= process.env.HYGRAPH_ACCESS_TOKEN
export const useClient = new GraphQLClient(hygraph_api, {
    headers: {
        authorization: `Bearer ${hygraph_access_token}`,
    },
});
