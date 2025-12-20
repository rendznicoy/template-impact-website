import { Home, FileText, Newspaper, LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/content", label: "Content", icon: FileText },
  { href: "/articles", label: "Articles", icon: Newspaper },
];

export function checkIsActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}
