import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MicrositeLayout } from "../components/sarong-to-sari";

// Every microsite page reads "<page> · Sarong to Sari" in the browser tab; the
// home page, which sets no title of its own, gets the plain name.
export const metadata: Metadata = {
  title: {
    default: "Sarong to Sari",
    template: "%s · Sarong to Sari",
  },
  description:
    "An exhibition tracing how batik crossed the Bay of Bengal from the courts of Java to the studios of Santiniketan, carried by Rabindranath Tagore's 1927 voyage.",
};

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <MicrositeLayout>{children}</MicrositeLayout>;
}
