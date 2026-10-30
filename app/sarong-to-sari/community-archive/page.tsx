import type { Metadata } from "next";
import { MicrositeCommunityArchivePage } from "../../components/sarong-to-sari";

export const metadata: Metadata = {
  title: "Community archive",
};

export default function CommunityArchiveRoutePage() {
  return <MicrositeCommunityArchivePage />;
}
