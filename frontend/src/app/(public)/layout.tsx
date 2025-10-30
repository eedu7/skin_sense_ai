import type React from "react";
import { AppHeader } from "@/components/app-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <AppHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
