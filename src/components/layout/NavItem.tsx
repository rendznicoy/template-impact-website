import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick?: () => void;
  showUnderline?: boolean;
}

export function NavItem({
  href,
  label,
  icon: Icon,
  isActive,
  onClick,
  showUnderline = true,
}: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex items-center gap-2 text-sm font-medium transition-all duration-200
        relative group
        ${isActive ? "text-vsu-golden" : "text-white hover:text-vsu-golden"}
      `}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>

      {showUnderline && (
        <span
          className={`
            absolute -bottom-1 left-0 right-0 h-0.5 bg-vsu-golden
            transition-opacity duration-200
            ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
        />
      )}
    </Link>
  );
}
