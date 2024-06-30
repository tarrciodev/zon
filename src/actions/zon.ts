import { useClient } from "@/grahql/client";
import { GET_ZON_CONTACTS } from "@/grahql/queries/zon";

export async function getZonContacts() {
    const data = await useClient.request(GET_ZON_CONTACTS) as {
        zons: { whatsappNumber: string, whatsappLink: string, facebook: string, instagram: string, linkedin: string }[];
    };
    const contacts = data.zons[0]
    return contacts;
}
