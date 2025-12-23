import {
    Sidebar,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { CreditCardIcon, Settings2Icon } from "lucide-react";
import React from "react";
import { DropImage } from "./_components/drop-image";

export default function Page() {
    return (
        <div className="max-w-7xl mx-auto border w-full h-full flex justify-center items-center">
            <DropImage />
        </div>
    );
}
