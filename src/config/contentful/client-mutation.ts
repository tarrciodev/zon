import { createClient } from "contentful-management";

export const clientMutation = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN as string,
});
