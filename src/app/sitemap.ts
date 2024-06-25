import { getServicesToSiteMap } from "@/actions/get-services-to-sitemap";

export default async function sitemap(){

    const services = await getServicesToSiteMap()
    const formatedServices = services.map(service => {
        return {
            url: `https://zon-digital.com/services/${service?.slug}`,
            lastModified: service?.createdAt
        };
    })

    return [{
        url: "https://zon-digital.com",
        lastModified: new Date()
    },
    ...formatedServices
]
    
}