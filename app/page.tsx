import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faGoogleScholar,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import me from "@/public/avatars/me.png";

const SubstackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

type Social = {
  label: string;
  href: string | null;
} & ({ icon: IconDefinition; customIcon?: never } | { customIcon: React.ReactNode; icon?: never });

const socials: Social[] = [
  { icon: faLinkedinIn,    href: "https://www.linkedin.com/in/arnolfokam/",                          label: "LinkedIn"              },
  { icon: faGoogleScholar, href: "https://scholar.google.com/citations?user=cA1hu0UAAAAJ&hl=en",    label: "Google Scholar"        },
  { icon: faGithub,        href: "https://github.com/ArnolFokam",                                   label: "GitHub"                },
  { customIcon: <SubstackIcon />, href: null,                                                        label: "Substack (coming soon)"},
  { icon: faEnvelope,      href: "mailto:me@arnolfokam.me",                                         label: "Email"                 },
];

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-zinc-900">

      {/* Text — left half */}
      <div className="absolute inset-y-0 left-0 flex w-1/2 flex-col justify-center px-20">
        <p className="text-2xl font-semibold uppercase tracking-widest text-zinc-400">
          Hello, I&apos;m
        </p>
        <h1
          className="mt-3 font-bold leading-[1.05] text-white"
          style={{ fontSize: "clamp(4.5rem, 8.5vw, 8.5rem)" }}
        >
          Arnol Fokam
        </h1>
        <p className="mt-5 text-3xl font-semibold text-zinc-300">
          AI Builder in London 🇬🇧💂
        </p>
        <p className="mt-6 text-2xl leading-10 text-zinc-400">
          Research Engineer &amp; Entrepreneur designing intelligent systems that bridge AI research and real-world impact — building ecosystems where Africans lead the next wave of deep tech innovation.
        </p>

        {/* Social icons */}
        <div className="mt-8 flex flex-row gap-4">
          {socials.map(({ icon, customIcon, href, label }) => {
            const shared = "group relative flex h-12 w-12 items-center justify-center rounded-xl";
            const glyph = customIcon ?? <FontAwesomeIcon icon={icon!} className="h-5 w-5" />;
            const tooltip = (
              <span className="pointer-events-none absolute bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-zinc-700 px-3 py-1.5 text-xs text-zinc-100 opacity-0 transition-opacity group-hover:opacity-100">
                {label}
              </span>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`${shared} bg-zinc-800 text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white`}
              >
                {glyph}
                {tooltip}
              </a>
            ) : (
              <span
                key={label}
                aria-label={label}
                className={`${shared} cursor-not-allowed bg-zinc-800 text-zinc-600`}
              >
                {glyph}
                {tooltip}
              </span>
            );
          })}
        </div>
      </div>

      {/* Image — right half, bottom-aligned */}
      <div className="absolute bottom-0 right-0 flex w-1/2 justify-center">
        <Image
          src={me}
          alt="Arnol Fokam"
          loading="eager"
          style={{
            height: "88vh",
            width: "auto",
            filter:
              "drop-shadow(0 0 80px rgba(255,255,255,0.1)) drop-shadow(0 0 200px rgba(255,255,255,0.05))",
          }}
        />
      </div>

    </main>
  );
}
