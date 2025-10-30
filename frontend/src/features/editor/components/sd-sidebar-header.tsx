import { HistoryIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, SidebarTrigger
} from "@/components/ui/sidebar";

export const SDSidebarHeader = () => {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarTrigger />
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="/">
            <SidebarMenuButton>
              <HomeIcon />
              Home
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="/results">
            <SidebarMenuButton>
              <HistoryIcon />
              Results
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
