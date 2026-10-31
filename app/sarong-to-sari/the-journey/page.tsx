import type { Metadata } from "next";
import { MicrositeJourneyPage } from "../../components/sarong-to-sari";

export const metadata: Metadata = {
  title: "The Journey",
  description:
    "Rabindranath Tagore's 1927 journey to Java and Bali, and the way home, as an animated map.",
};

export default function JourneyRoutePage() {
  return <MicrositeJourneyPage />;
}
