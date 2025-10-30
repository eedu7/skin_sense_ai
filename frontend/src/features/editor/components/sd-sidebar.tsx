import { SDSidebarHeader } from "./sd-sidebar-header";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { SDSidebarFooter } from "./sd-sidebar-footer";

export const SDSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SDSidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Previous result</SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
      <SDSidebarFooter />
    </Sidebar>
  );
};
