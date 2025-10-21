import React from "react";
import { SDSidebarHeader } from "./sd-sidebar-header";
import { Sidebar, SidebarContent, SidebarGroup } from "@/components/ui/sidebar";
import { SDSidebarFooter } from "./sd-sidebar-footer";

export const SDSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SDSidebarHeader />
      <SidebarContent>
        <SidebarGroup></SidebarGroup>
      </SidebarContent>
      <SDSidebarFooter />
    </Sidebar>
  );
};
