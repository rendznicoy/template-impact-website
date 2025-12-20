"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { SearchBar } from "./SearchBar";
import { MobileMenu } from "./MobileMenu";
import { navItems, checkIsActive } from "@/lib/navigation";
import { useImageCheck } from "@/lib/hooks/useImageCheck";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const imagesExist = useImageCheck("/images/vsu-logo.png");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const templateName = process.env.NEXT_PUBLIC_TEMPLATE_NAME || "Template Name";
  const isActive = (href: string) => checkIsActive(pathname, href);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-vsu-dark-green bg-vsu-green dark:bg-vsu-dark-green">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo imagesExist={imagesExist} templateName={templateName} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                isActive={isActive(item.href)}
              />
            ))}
          </div>

          {/* Search and Dark Mode */}
          <div className="hidden md:flex items-center gap-2">
            <SearchBar />
            <div className="h-6 w-0.5 bg-white/30 ml-2" />
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="text-white hover:text-vsu-golden hover:bg-white/10"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-vsu-golden hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <MobileMenu
            navItems={navItems}
            isActive={isActive}
            onClose={() => setIsMenuOpen(false)}
            theme={theme}
            toggleTheme={toggleTheme}
            mounted={mounted}
          />
        )}
      </div>
    </nav>
  );
}
