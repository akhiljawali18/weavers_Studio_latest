import type { Metadata } from "next";
import { MicrositeVoicesPage } from "../../components/sarong-to-sari";

export const metadata: Metadata = {
  title: "Voices",
};

export default function VoicesRoutePage() {
  return <MicrositeVoicesPage />;
}
