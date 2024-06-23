import { useClient } from "@/grahql/client";
import { GET_ZON_WHATSAPP } from "@/grahql/queries/zon";

export async function getZonWhatSapp() {
    const data = (await useClient.request(GET_ZON_WHATSAPP)) as {
        zons: { whatsapp: string }[];
    };
    const whatsapp = data.zons[0].whatsapp;
    console.log(whatsapp)
    return whatsapp;
}
