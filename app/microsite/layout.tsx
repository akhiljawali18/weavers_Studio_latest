import type { ReactNode } from "react";
import { MicrositeLayout } from "../components/microsite";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <MicrositeLayout>{children}</MicrositeLayout>;
}
