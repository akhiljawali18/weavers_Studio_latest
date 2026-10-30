import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MicrositeArchiveObjectPage } from "../../../components/sarong-to-sari";
import { archiveObjects, findArchiveObject } from "../../../components/sarong-to-sari/data/community";

type ArchiveObjectRouteProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: ArchiveObjectRouteProps): Metadata {
  const object = findArchiveObject(params.slug);
  return object ? { title: `${object.titleItalic}${object.titleRegular}`.trim() } : {};
}

export function generateStaticParams() {
  return archiveObjects.map((object) => ({ slug: object.slug }));
}

export default function ArchiveObjectRoutePage({ params }: ArchiveObjectRouteProps) {
  const object = findArchiveObject(params.slug);
  if (!object) {
    notFound();
  }
  return <MicrositeArchiveObjectPage object={object} />;
}
