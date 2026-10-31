import type { Metadata } from "next";
import { notFound } from "next/navigation";
// Event pages need the main site's API, which this repo does not have yet. See
// docs/missing-main-site-code.md before switching this page back on.
// import { GET_ITEM, GET_SEO_DATA } from "@/app/api/home/route";
// import { MicrositeProgrammeEventPage } from "../../../components/sarong-to-sari";

type ProgrammeEventRouteProps = {
    params: { slug: string };
};

export const metadata: Metadata = {
    title: "Weavers Studio | Programme Event Page",
    description: "Weavers Studio Website",
    themeColor: "#FFFFFF"
};

// export async function generateMetadata({ params }: ProgrammeEventRouteProps): Promise<Metadata> {
//     const seoData = await GET_SEO_DATA(`/${params?.slug}`);
//     const seo_data = seoData.filter(({ page_name }) => page_name.toLowerCase() == `/${params?.slug}`.toLowerCase())?.[0];
//     if (seo_data != undefined) {
//         return {
//             title: seo_data?.title,
//             description: seo_data?.meta_description,
//             themeColor: seo_data?.meta_color,
//             keywords: seo_data?.keywords
//         };
//     } else {
//         return {
//             title: "Weavers Studio | Programme Event Page",
//             description: "Weavers Studio Website",
//             themeColor: "#FFFFFF"
//         };
//     }
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProgrammeEventRoutePage = async ({ params }: ProgrammeEventRouteProps) => {
    notFound();

    // const TicketDetails: any = await GET_ITEM(
    //     "products",
    //     JSON.stringify({
    //         status: {
    //             _eq: "Active"
    //         },
    //         slug: {
    //             _eq: params.slug?.toLowerCase()
    //         }
    //     })
    // );
    // if (!TicketDetails) {
    //     notFound();
    // }
    // return <MicrositeProgrammeEventPage ticketDetails={TicketDetails} />;
};
export default ProgrammeEventRoutePage;
