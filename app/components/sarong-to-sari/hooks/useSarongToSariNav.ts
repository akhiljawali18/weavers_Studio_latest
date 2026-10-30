"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

export const useSarongToSariNav = (href: string): boolean => {
  const pathname = usePathname();

  return useMemo(() => {
    if (!pathname) {
      return false;
    }

    if (href === "/sarong-to-sari") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  }, [href, pathname]);
};
