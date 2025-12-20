"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun, LucideIcon } from "lucide-react";
import { NavItem } from "./NavItem";
import { SearchBar } from "./SearchBar";

interface NavItemType {
  href: string;
  label: string;
  icon: LucideIcon;
}

interface MobileMenuProps {
  navItems: NavItemType[];
  isActive: (href: string) => boolean;
  onClose: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  mounted: boolean;
}

export function MobileMenu({
  navItems,
  isActive,
  onClose,
  theme,
  toggleTheme,
  mounted,
}: MobileMenuProps) {
  return (
    <div className="md:hidden py-4 border-t border-white/10">
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            isActive={isActive(item.href)}
            onClick={onClose}
            showUnderline={false}
          />
        ))}

        <SearchBar isMobile />

        {mounted && (
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="justify-start text-white border-white/20 hover:bg-white/10 hover:text-vsu-golden"
          >
            {theme === "light" ? (
              <>
                <Moon className="h-4 w-4 mr-2" /> Dark Mode
              </>
            ) : (
              <>
                <Sun className="h-4 w-4 mr-2" /> Light Mode
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
