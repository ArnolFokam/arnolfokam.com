import Image from "next/image";
import AnnouncementBanner from "./components/AnnouncementBanner";
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
  { icon: faLinkedinIn,         href: "https://www.linkedin.com/in/arnolfokam/",                       label: "LinkedIn"               },
  { icon: faGoogleScholar,      href: "https://scholar.google.com/citations?user=cA1hu0UAAAAJ&hl=en", label: "Google Scholar"         },
  { icon: faGithub,             href: "https://github.com/ArnolFokam",                                label: "GitHub"                 },
  { customIcon: <SubstackIcon />, href: "https://thebuilderdiarybyarnol.substack.com/welcome",         label: "Substack"               },
  { icon: faEnvelope,           href: "mailto:me@arnolfokam.com",                                     label: "Email"                  },
];

const anim = (name: string, delay: number, duration = 0.7) =>
  ({ animation: `${name} ${duration}s ease ${delay}ms both` } as React.CSSProperties);

export default function Home() {
  return (
    <>
    <AnnouncementBanner />
    <main className="relative min-h-screen w-full overflow-x-hidden bg-zinc-950 lg:h-screen lg:overflow-hidden">
      {/* Subtle layered mobile background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_48%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_52%)] lg:hidden" />

      {/* Background image — desktop only */}
      <Image
        src="/working.jpg"
        alt=""
        fill
        loading="eager"
        style={{ objectFit: "cover", objectPosition: "center", filter: "blur(3px)", transform: "scale(1.05)" }}
        className="z-0 hidden lg:block"
      />
      {/* Dark overlay — desktop only */}
      <div className="absolute inset-0 z-0 hidden bg-black/85 lg:block" />


      {/* Text — full on mobile, left half on desktop */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center overflow-y-auto px-6 pb-12 pt-34 sm:px-8 sm:pt-32 lg:inset-y-0 lg:left-0 lg:w-1/2 lg:overflow-visible lg:px-20 lg:pb-0 lg:pt-0">
        <p
          className="text-base font-semibold uppercase tracking-widest text-zinc-400 lg:text-xl"
          style={anim("fadeInUp", 150)}
        >
          Hello, I&apos;m
        </p>
        <h1
          className="mt-3 font-bold leading-[1.05] text-white"
          style={{ ...anim("fadeInUp", 300), fontSize: "clamp(2.4rem, 12vw, 7rem)" }}
        >
          Arnol Fokam
        </h1>
        <p
          className="mt-5 text-xl font-semibold text-zinc-300 lg:text-2xl"
          style={anim("fadeInUp", 450)}
        >
          AI Builder in London 🇬🇧💂
        </p>
        <p
          className="mt-6 text-base leading-8 text-zinc-400 lg:text-lg lg:leading-8"
          style={anim("fadeInUp", 600)}
        >
          I write code, train models, and ship things. I break systems on purpose to understand them, then rebuild them better. On a mission to bring a distinctly African identity into global tech, not just as users but as the people shaping it.
        </p>
        <div
          className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm leading-7 text-zinc-300 lg:p-5 lg:text-base"
          style={anim("fadeInUp", 680)}
        >
          I&apos;m launching a new platform for professionals and students to move from AI theory to real project practice. It combines roadmap guidance, paper-reading skills, and hands-on building.
          <a
            href="https://growinai.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
          >
            Explore growinai.co.uk
          </a>
        </div>

        {/* Social icons */}
        <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:gap-4" style={anim("fadeInUp", 750)}>
          {socials.map(({ icon, customIcon, href, label }) => {
            const shared = "group relative flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-150 lg:h-12 lg:w-12 lg:justify-center lg:gap-0 lg:p-0";
            const glyph = customIcon ?? <FontAwesomeIcon icon={icon!} className="h-5 w-5 shrink-0" />;
            const tooltip = (
              <span className="pointer-events-none absolute bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-zinc-700 px-3 py-1.5 text-xs text-zinc-100 opacity-0 transition-opacity group-hover:opacity-100 hidden lg:block">
                {label}
              </span>
            );
            const labelText = <span className="text-sm font-medium lg:hidden">{label}</span>;
            return href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`${shared} bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white lg:hover:scale-110`}
              >
                {glyph}
                {labelText}
                {tooltip}
              </a>
            ) : (
              <span
                key={label}
                aria-label={label}
                className={`${shared} cursor-not-allowed bg-zinc-800 text-zinc-600`}
              >
                {glyph}
                {labelText}
                {tooltip}
              </span>
            );
          })}
        </div>
      </div>

      {/* Right half — image (hidden on mobile) */}
      <div
        className="absolute inset-y-0 right-0 z-10 hidden w-1/2 lg:block"
        style={anim("fadeIn", 400, 1.2)}
      >
        {/* Person image */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <Image
            src={me}
            alt="Arnol Fokam"
            loading="eager"
            style={{
              height: "88vh",
              width: "auto",
              filter:
                "drop-shadow(0 0 80px rgba(255,255,255,0.08)) drop-shadow(0 0 200px rgba(255,255,255,0.04))",
            }}
          />
        </div>
      </div>

    </main>
    </>
  );
}
