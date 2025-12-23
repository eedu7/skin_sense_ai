import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { ScanSidebar } from "./_components/scan-sidebar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider defaultOpen={false}>
            <ScanSidebar />
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    );
}
