import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SDSidebar } from "@/features/skin-detection/components/sd-sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SDSidebar />
      <main>{children}</main>
    </SidebarProvider>
  );
}
