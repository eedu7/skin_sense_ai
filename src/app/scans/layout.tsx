import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type React from "react";
import { ScanSidebar } from "./_components/scan-sidebar";

export default async function DashboardLayout({
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
