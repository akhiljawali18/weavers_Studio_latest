import type { Metadata } from "next";
import { notFound } from "next/navigation";
// The programme needs the main site's API, which this repo does not have yet. See
// docs/missing-main-site-code.md before switching this page back on.
// import { MicrositeProgrammePage } from "../../components/sarong-to-sari";
// import { GET_ALL_ITEMS } from "@/app/api/home/route";

export const metadata: Metadata = {
    title: "Weavers Studio | Programme",
    description: "Weavers Studio Website",
    themeColor: "#FFFFFF"
};

export default async function ProgrammeRoutePage() {
    notFound();

    // const filter = JSON.stringify({
    //     _and: [{ status: { _eq: "Active" } }, { Is_Ticket: { _eq: "yes" } }]
    // });
    // const ALL_TICKETS = await GET_ALL_ITEMS("products", filter);

    // if (!ALL_TICKETS?.data || ALL_TICKETS?.data.length === 0) {
    //     notFound();
    // }

    // const sortedTickets = [...ALL_TICKETS.data]?.sort((a, b) => Number(a?.id ?? 0) - Number(b?.id ?? 0));

    // return <MicrositeProgrammePage allTickets={sortedTickets} />;
}
