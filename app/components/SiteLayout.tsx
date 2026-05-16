import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/resume", label: "Resume" },
  { href: "/posts", label: "Posts" },
] as const;

const socialLinks = [
  { href: "https://www.linkedin.com/in/arnolfokam/", label: "LinkedIn" },
  { href: "https://github.com/ArnolFokam", label: "GitHub" },
  {
    href: "https://scholar.google.com/citations?user=cA1hu0UAAAAJ&hl=en",
    label: "Scholar",
  },
  {
    href: "https://thebuilderdiarybyarnol.substack.com/welcome",
    label: "Substack",
  },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[72ch] px-5 pt-10 sm:px-6 md:pt-14">
        <nav className="flex items-center justify-between gap-6 text-base">
          <Link
            href="/"
            className="font-serif text-lg tracking-tight transition-colors hover:text-primary"
          >
            Arnol Fokam
          </Link>
          <ul className="flex items-center gap-4 font-sans text-muted-foreground sm:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <main className="mx-auto max-w-[72ch] px-5 py-14 sm:px-6 md:py-24">
        {children}
      </main>

      <footer className="mx-auto max-w-[72ch] px-5 pb-12 sm:px-6">
        <div className="flex flex-col gap-4 border-t border-border pt-8 text-base text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Arnol Fokam</span>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:me@arnolfokam.com"
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
