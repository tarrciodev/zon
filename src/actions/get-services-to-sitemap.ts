import { useClient } from "@/grahql/client";
import { GET_SERVICES_TO_SITEMAP } from "@/grahql/queries/services";

interface IServicesToSiteMap {
    slug: string;
    createdAt: Date;
}
[];
export async function getServicesToSiteMap(): Promise<IServicesToSiteMap[]>{
    const data = (await useClient.request(GET_SERVICES_TO_SITEMAP)) as {
        services: IServicesToSiteMap[];
    };
    return data.services
}