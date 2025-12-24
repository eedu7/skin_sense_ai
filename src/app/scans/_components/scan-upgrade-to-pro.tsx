"use client";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { CreditCardIcon } from "lucide-react";

export const ScanUpgradeToPro = () => {
    return (
        <SidebarMenuItem>
            <SidebarMenuButton
                onClick={() => {
                    authClient.checkout({ slug: "Skin_Sense_AI_Pro" });
                }}
            >
                <CreditCardIcon />
                Upgrade to Pro
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
};
