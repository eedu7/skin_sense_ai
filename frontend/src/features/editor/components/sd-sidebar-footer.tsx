import { Button } from "@/components/ui/button";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronUp, User2 } from "lucide-react";
import React from "react";

export const SDSidebarFooter = () => {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <Button size="icon" variant="ghost">
            <User2 />
          </Button>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};
