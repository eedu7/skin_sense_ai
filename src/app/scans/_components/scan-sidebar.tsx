import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CreditCardIcon } from "lucide-react";
import { ScanSidebarContent } from "./scan-sidebar-content";
import { ScanSidebarTrigger } from "./scan-sidebar-trigger";
import { SidebarLogout } from "./sidebar-logout";

export const ScanSidebar = () => {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <ScanSidebarTrigger />
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <ScanSidebarContent />
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <CreditCardIcon />
                            Upgrade to Pro
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarLogout />
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};
