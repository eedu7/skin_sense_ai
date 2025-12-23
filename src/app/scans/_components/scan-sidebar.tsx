import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CreditCardIcon, Settings2Icon } from "lucide-react";
import { ScanSidebarTrigger } from "./scan-sidebar-trigger";
import { ScanSidebarContent } from "./scan-sidebar-content";

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
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <Settings2Icon />
                            Settings
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};
