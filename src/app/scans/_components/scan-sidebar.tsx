import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
} from "@/components/ui/sidebar";
import { ScanSidebarContent } from "./scan-sidebar-content";
import { ScanSidebarTrigger } from "./scan-sidebar-trigger";
import { ScanUpgradeToPro } from "./scan-upgrade-to-pro";
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
                    <ScanUpgradeToPro />
                    <SidebarLogout />
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};
