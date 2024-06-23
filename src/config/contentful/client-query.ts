const contentful = require("contentful");

export const useQuery = contentful.createClient({
    space: process.env.SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});
