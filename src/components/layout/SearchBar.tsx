"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  isMobile?: boolean;
}

export function SearchBar({ isMobile = false }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Search:", searchQuery);
  };

  if (isMobile) {
    return (
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
    );
  }

  return (
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
  );
}
