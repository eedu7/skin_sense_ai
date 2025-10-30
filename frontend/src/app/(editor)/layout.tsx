import type React from "react";
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar";
import { SDSidebar } from "@/features/editor/components/sd-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SDSidebar />
      <SidebarInset>
        <main className="w-full h-full">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
