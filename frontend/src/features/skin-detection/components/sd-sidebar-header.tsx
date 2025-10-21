import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";

export const SDSidebarHeader = () => {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarTrigger />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
