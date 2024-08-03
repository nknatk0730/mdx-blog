'use client'

import { usePathname } from "next/navigation"
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  {
    href: '/about',
    label: 'welcome',
  },
  {
    href: '/posts',
    label: 'colum',
  }
]

export const Navigation = () => {
  const pathName = usePathname();

  return (
    <nav>
      {links.map((link) => (
        <Button
          key={link.href}
          asChild
          variant="ghost"
          className={cn(
            pathName === link.href && "bg-accent text-accent-foreground"
          )}
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </nav>
  );
}