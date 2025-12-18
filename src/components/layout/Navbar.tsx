"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Moon, Sun, Menu, X } from "lucide-react";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch - this is an acceptable use of setState in effect
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Search:", searchQuery);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-vsu-dark-green bg-vsu-green dark:bg-vsu-dark-green">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3">
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
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-white hover:text-vsu-golden transition-colors"
            >
              Home
            </Link>
            <Link
              href="/content"
              className="text-sm font-medium text-white hover:text-vsu-golden transition-colors"
            >
              Content
            </Link>
            <Link
              href="/articles"
              className="text-sm font-medium text-white hover:text-vsu-golden transition-colors"
            >
              Articles
            </Link>
          </div>

          {/* Search and Dark Mode */}
          <div className="hidden md:flex items-center gap-2">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-48 lg:w-64 bg-white/90 dark:bg-gray-800/90 border-white/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
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
              <Link
                href="/"
                className="text-sm font-medium text-white hover:text-vsu-golden transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/content"
                className="text-sm font-medium text-white hover:text-vsu-golden transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Content
              </Link>
              <Link
                href="/articles"
                className="text-sm font-medium text-white hover:text-vsu-golden transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 w-full bg-white/90 dark:bg-gray-800/90 border-white/20"
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
