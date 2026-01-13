"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blogs" },
  { href: "/client-comp", label: "CSR" },
  { href: "/server-comp", label: "SSR" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Skip to content (WCAG 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 z-[100] rounded-md bg-background px-4 py-2 text-sm font-medium shadow"
      >
        Skip to main content
      </a>

      <header className="border-b bg-background">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300 hover:brightness-125"
          >
            Blog<span className="text-slate-900">Pulse</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu
            aria-label="Main navigation"
            className="hidden md:block"
          >
            <NavigationMenuList className="gap-6">
              {NAV_ITEMS.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={pathname === item.href}
                />
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  aria-expanded={open}
                  aria-controls="mobile-menu"
                  className="h-10 w-10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                id="mobile-menu"
                className="w-[280px] p-0"
              >
                {/* Sheet Header */}
                <div className="flex items-center justify-between border-b px-4 py-4">
                  <SheetTitle className="text-base font-semibold">
                    Menu
                  </SheetTitle>
                </div>

                {/* Navigation */}
                <nav aria-label="Mobile navigation" className="px-2 py-4">
                  <ul className="flex flex-col gap-1">
                    {NAV_ITEMS.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={
                            pathname === item.href ? "page" : undefined
                          }
                          className={cn(
                            "flex items-center rounded-md px-4 py-3 text-base font-medium min-h-[44px]",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            pathname === item.href
                              ? "bg-muted text-foreground"
                              : "text-foreground/80 hover:bg-muted/50 hover:text-foreground"
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

type NavItemProps = {
  href: string;
  label: string;
  active?: boolean;
};

function NavItem({ href, label, active }: NavItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          aria-current={active ? "page" : undefined}
          className={cn(
            "text-sm font-medium transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            active
              ? "text-foreground"
              : "text-foreground/80 hover:text-foreground"
          )}
        >
          {label}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
