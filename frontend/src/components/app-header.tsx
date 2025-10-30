"use client";
import { StethoscopeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

export const AppHeader = () => {
  return (
    <header className="border-b py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <StethoscopeIcon className="size-6" />
            <span>SkinSense AI</span>
          </Link>
          <AppNavigation />
        </div>
      </div>
    </header>
  );
};

type NavigationLink = {
  title: string;
  href: string;
};

const navigationLinks: NavigationLink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Upload",
    href: "/upload",
  },
  {
    title: "Results",
    href: "/results",
  },
];

export const AppNavigation = () => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        {navigationLinks.map(({ href, title }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle({
                className:
                  href === pathname ? "bg-accent text-accent-foreground" : "",
              })}
            >
              <Link href={href}>{title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
