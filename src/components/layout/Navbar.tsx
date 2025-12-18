"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Moon,
  Sun,
  Menu,
  X,
  Home,
  FileText,
  Newspaper,
} from "lucide-react";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const [imagesExist, setImagesExist] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Prevent hydration mismatch - this is an acceptable use of setState in effect
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    // Check if images exist
    const checkImages = async () => {
      try {
        const response = await fetch("/images/vsu-logo.png", {
          method: "HEAD",
        });
        setImagesExist(response.ok);
      } catch {
        setImagesExist(false);
      }
    };
    checkImages();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Search:", searchQuery);
  };

  const templateName = process.env.NEXT_PUBLIC_TEMPLATE_NAME || "Template Name";

  // Navigation items with icons
  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/content", label: "Content", icon: FileText },
    { href: "/articles", label: "Articles", icon: Newspaper },
  ];

  // Check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-vsu-dark-green bg-vsu-green dark:bg-vsu-dark-green">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3">
              {imagesExist ? (
                <>
                  {/* VSU Logo */}
                  <div className="relative h-10 w-10 flex-shrink-0">
                    <Image
                      src="/images/vsu-logo.png"
                      alt="VSU Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  {/* VSU Text Logo - Hidden on small screens */}
                  <div
                    className="relative hidden md:block h-10 w-auto"
                    style={{ width: "200px" }}
                  >
                    <Image
                      src="/images/vsu-text.png"
                      alt="Visayas State University"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Placeholder Logo */}
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-vsu-green font-bold text-sm flex-shrink-0">
                    VSU
                  </div>
                  {/* Placeholder Text */}
                  <span className="hidden md:block font-montserrat font-semibold text-lg text-white">
                    {templateName}
                  </span>
                </>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-2 text-sm font-medium transition-all duration-200
                    relative group
                    ${
                      active
                        ? "text-vsu-golden"
                        : "text-white hover:text-vsu-golden"
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  {/* Underline - shown when active or on hover */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 right-0 h-0.5 bg-vsu-golden
                      transition-opacity duration-200
                      ${
                        active
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* Search and Dark Mode */}
          <div className="hidden md:flex items-center gap-2">
            <form onSubmit={handleSearch} className="relative group">
              <Search
                className={`
                absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors
                ${
                  isSearchFocused
                    ? "text-gray-900"
                    : "text-white/70 group-hover:text-gray-900"
                }
              `}
              />
              <Input
                type="search"
                placeholder="Search..."
                style={{
                  backgroundColor: isSearchFocused
                    ? "white"
                    : "rgba(255, 255, 255, 0.2)",
                }}
                className="pl-9 w-48 lg:w-64 text-gray-900 placeholder:text-white/70 hover:placeholder:text-gray-400 focus:placeholder:text-gray-400 border-white/30 hover:border-vsu-golden focus:border-vsu-golden hover:bg-white transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </form>

            {/* Vertical Divider */}
            <div className="h-6 w-0.5 bg-white/30 ml-2" />

            {/* Only render theme button after component mounts */}
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
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center gap-2 text-sm font-medium transition-colors
                      ${
                        active
                          ? "text-vsu-golden"
                          : "text-white hover:text-vsu-golden"
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-9 w-full bg-white text-gray-900 placeholder:text-gray-500 border-white/50 focus:border-vsu-golden"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>

              {/* Only render theme button after component mounts */}
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
        )}
      </div>
    </nav>
  );
}
