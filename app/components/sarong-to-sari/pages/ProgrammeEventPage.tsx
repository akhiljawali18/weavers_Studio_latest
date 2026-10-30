import { Fragment } from "react";
import BackToTop from "../components/home/BackToTop";
import Decoration from "../components/home/Decoration";
import RichText from "../components/home/RichText";
import { bodyText, displayTitle } from "../components/home/typography";
import TicketPicker from "../components/programme/TicketPicker";
import EmailLink, { linkEmails } from "../components/EmailLink";
import { typesWithExpert } from "../data/programme";
import type { Paragraph } from "../data/programme";
import type { RichText as RichTextContent } from "../types";
import Image from "../../shared/Image";

const rupees = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

/** A paragraph written as plain text becomes a single unstyled piece. */
const asRichText = (paragraph: Paragraph): RichTextContent => (typeof paragraph === "string" ? [paragraph] : paragraph);

/** Black spaced capitals: "With Sabine Bolk", "Event details", "About the expert". */
const smallCaps = "text-[14px] font-medium uppercase leading-[17px] tracking-[1.68px] text-black";

/** A panel column heading with the rule beneath it, as in the design. */
const PanelHeading = ({ children }: { children: string }) => <h2 className={`border-b border-s2s-line pb-4 lg:pl-[21px] ${smallCaps}`}>{children}</h2>;

const ProgrammeEventPage = ({ ticketDetails }: any) => {
    const ticketObj = ticketDetails?.Ticket_Json;
    const showExpert = typesWithExpert.includes(ticketObj?.type) && Boolean(ticketObj?.aboutHost?.length);

    const facts =
        ticketObj?.facts ??
        [
            { label: "Venue", value: ticketObj?.venue },
            { label: "Date", value: ticketObj?.date },
            { label: "Timings", value: ticketObj?.timings }
        ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value?.trim()));

    const prices = ticketDetails?.skudetails?.map((sku: any) => ({
        id: sku?.id,
        amount: sku?.price,
        stock_qty: sku?.stock_qty,
        note: sku?.note || "",
        productId: sku?.productid?.id ?? ticketDetails?.id,
        skuId: sku?.id,
    }));

    return (
        <div className="overflow-x-clip">
            <div className="relative mx-auto px-4 pt-10 lg:px-0 lg:pt-[66px]">
                <div className="flex flex-col gap-[52px] lg:flex-row lg:items-start lg:gap-0">
                    {/* Phones: the photograph sits left of a hairline, with the maroon flourish
              on its bottom-right corner, exactly as the mobile design draws it. */}
                    <div className="relative w-full lg:hidden">
                        <div className="w-[78.5%]">
                            <Image src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${ticketDetails?.product_images[0]?.directus_files_id?.id}`} alt="product_image" classes="aspect-[281/374] w-full" />
                        </div>
                        <Decoration file="prog-decor-mobile.svg" width={367} height={392} className="left-0 top-0 max-w-none" />
                    </div>

                    <div className="relative hidden aspect-[425/566] w-full sm:max-w-[425px] lg:ml-[13.82%] lg:block lg:w-[29.51%] lg:shrink-0">
                        <Image src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${ticketDetails?.product_images[0]?.directus_files_id?.id}`} alt="product_image" classes="absolute inset-0" />
                        <span aria-hidden className="absolute -bottom-[27px] -left-[24px] top-0 hidden w-px bg-s2s-sand lg:block" />
                        <Decoration file="prog-decor-1.jpg" width={175} height={103} className="-bottom-[9px] -left-[160px] mix-blend-multiply" />
                    </div>

                    <div className="lg:ml-[11.11%] lg:w-[41.39%] lg:pt-[71px]">
                        <h1 className={displayTitle}>
                            <span className="italic">{ticketObj?.titleItalic}</span>
                            {ticketObj?.titleRegular}
                        </h1>
                        {ticketObj?.host && <p className={`mt-[6px] ${smallCaps}`}>With {ticketObj?.host}</p>}
                        <span className="mt-[23px] inline-flex h-[34px] items-center rounded-[4px] border border-s2s-maroon px-[14px] text-[14px] lowercase leading-none text-[#7c1126]">{ticketObj?.type}</span>
                        <dl className="mt-[29px] grid grid-cols-[minmax(110px,max-content)_1fr] border-b border-s2s-line sm:grid-cols-[minmax(125px,max-content)_1fr]">
                            {facts.map(({ label, value }) => (
                                <Fragment key={label}>
                                    <dt className="flex min-h-[49px] max-w-[150px] items-center border-t border-s2s-line py-2 pl-[3px] pr-6 text-[14px] font-medium uppercase leading-[17px] tracking-[1.68px] text-s2s-ink sm:max-w-none">{label}</dt>
                                    <dd className="flex items-center border-t border-s2s-line py-2 text-[16px] leading-[22px] text-s2s-ink">{value}</dd>
                                </Fragment>
                            ))}
                        </dl>

                        {prices?.length <= 1 && prices?.[0]?.amount != null && (
                            <p className="mt-[18px] text-[14px] font-bold leading-[40px] tracking-[1.68px] text-s2s-maroon">
                                ₹ {rupees.format(Number(prices[0].amount))}
                            </p>
                        )}
                        {/* Events with more than one price are chosen with a radio before booking. */}
                        <div className={ticketObj?.prices ? "mt-[26px]" : "mt-[16px]"}>
                            <TicketPicker ticketDetails={ticketDetails} prices={prices} />
                        </div>
                    </div>
                </div>

                {/* The gold paisley at the page's right edge, level with the photograph's top. */}
                <Decoration file="prog-decor-2.jpg" width={75} height={128} className="right-0 top-[66px] mix-blend-multiply lg:block hidden" />
            </div>

            <section aria-label="About this event" className="mx-auto mt-16 lg:mt-[78px] lg:px-[60px]">
                <div className="bg-s2s-panel px-4 pb-10 pt-8 lg:px-[88px] lg:pb-[50px] lg:pt-[45px]">
                   
                    <div className={`grid gap-12 lg:gap-x-6 lg:gap-y-0 ${showExpert ? "lg:grid-cols-2" : ""}`}>
                        <div>
                            <PanelHeading>Event details</PanelHeading>
                            <div className={`mt-[38px] space-y-7 lg:pl-[27px] ${bodyText}`}>
                                <div dangerouslySetInnerHTML={{ __html: ticketObj?.details }} />
                                {/* The "receive" list, with any line just above or below it, set tight. */}
                                {ticketObj?.includes && (
                                    <div>
                                        {ticketObj?.includes.before && (
                                            <p>
                                                <RichText content={asRichText(ticketObj?.includes.before)} />
                                            </p>
                                        )}
                                        <p>{linkEmails(ticketObj?.includes.heading)}</p>
                                        <ul>
                                            {ticketObj?.includes.items.map((entry) => (
                                                <li key={entry} className="relative pl-6 before:absolute before:left-[9px] before:content-['•']">
                                                    {linkEmails(entry)}
                                                </li>
                                            ))}
                                        </ul>
                                        {ticketObj?.includes.after?.map((line, index) => (
                                            <p key={index}>
                                                <RichText content={asRichText(line)} />
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {showExpert && (
                            <div>
                                <PanelHeading>About the expert</PanelHeading>
                                <div className={`mt-[38px] space-y-7 lg:pl-[27px] ${bodyText}`}>
                                    {ticketObj?.aboutHost?.map((paragraph, index) => (
                                        <p key={index}>
                                            <RichText content={asRichText(paragraph)} />
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <p className={`mt-12 border-t border-s2s-line pt-[22px] lg:mt-[84px] lg:pl-[27px] ${bodyText}`}>
                        For further details, please email us on <EmailLink address="wsrc@weaversstudio.in" className="font-bold hover:text-s2s-maroon" /> or call us on{" "}
                        <a href="tel:+919874314888" className="font-bold hover:text-s2s-maroon">
                            +91 98743 14888.
                        </a>
                    </p>
                </div>
            </section>

            <BackToTop />
        </div>
    );
};

export default ProgrammeEventPage;
