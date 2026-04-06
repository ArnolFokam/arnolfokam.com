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
  { icon: faLinkedinIn,         href: "https://www.linkedin.com/in/arnolfokam/",                       label: "LinkedIn"               },
  { icon: faGoogleScholar,      href: "https://scholar.google.com/citations?user=cA1hu0UAAAAJ&hl=en", label: "Google Scholar"         },
  { icon: faGithub,             href: "https://github.com/ArnolFokam",                                label: "GitHub"                 },
  { customIcon: <SubstackIcon />, href: null,                                                          label: "Substack (coming soon)" },
  { icon: faEnvelope,           href: "mailto:me@arnolfokam.com",                                     label: "Email"                  },
];

const anim = (name: string, delay: number, duration = 0.7) =>
  ({ animation: `${name} ${duration}s ease ${delay}ms both` } as React.CSSProperties);

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-zinc-950 lg:h-screen lg:overflow-hidden">

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

      {/* ── Geometric decorations — around the portrait ── */}
      <div className="pointer-events-none absolute inset-0 z-[5] hidden lg:block">

        {/* ── TOP ── */}
        {/* large triangle, float-wide */}
        <svg style={{ position:"absolute", top:"3%", left:"63%", width:110, height:110, opacity:0.75, animation:"float-wide 5s ease-in-out infinite" }} viewBox="0 0 44 44">
          <polygon points="22,3 41,41 3,41" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3.5"/>
        </svg>
        {/* medium inverted triangle, spin + float */}
        <svg style={{ position:"absolute", top:"2%", left:"80%", width:56, height:56, opacity:0.65, animation:"spin-slow-reverse 20s linear infinite, float 3.5s ease-in-out 0.5s infinite" }} viewBox="0 0 30 30">
          <polygon points="15,28 2,2 28,2" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3"/>
        </svg>
        {/* small diamond, fast float */}
        <div style={{ position:"absolute", top:"4%", left:"91%", width:34, height:34, border:"3px solid rgba(255,255,255,0.60)", transform:"rotate(45deg)", animation:"float 2.8s ease-in-out infinite" }} />

        {/* ── LEFT EDGE ── */}
        {/* big diamond, pulse-scale */}
        <div style={{ position:"absolute", top:"18%", left:"51%", width:72, height:72, border:"3.5px solid rgba(255,255,255,0.55)", transform:"rotate(45deg)", animation:"pulse-scale 3.5s ease-in-out infinite" }} />
        {/* medium triangle, float-wide */}
        <svg style={{ position:"absolute", top:"40%", left:"50%", width:64, height:64, opacity:0.70, animation:"float-wide 4.5s ease-in-out 1s infinite" }} viewBox="0 0 30 30">
          <polygon points="15,28 2,2 28,2" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="3.5"/>
        </svg>
        {/* small square, fast spin + float */}
        <div style={{ position:"absolute", top:"62%", left:"52%", width:28, height:28, border:"3px solid rgba(255,255,255,0.65)", transform:"rotate(20deg)", animation:"spin-slow 15s linear infinite, float 3s ease-in-out 0.4s infinite" }} />
        {/* tiny diamond, fast float */}
        <div style={{ position:"absolute", top:"74%", left:"53%", width:18, height:18, border:"2.5px solid rgba(255,255,255,0.55)", transform:"rotate(45deg)", animation:"float 2.5s ease-in-out 0.6s infinite" }} />

        {/* ── RIGHT EDGE ── */}
        {/* large square, float-wide */}
        <div style={{ position:"absolute", top:"14%", left:"93%", width:80, height:80, border:"3.5px solid rgba(255,255,255,0.50)", transform:"rotate(20deg)", animation:"float-wide 6s ease-in-out 0.8s infinite" }} />
        {/* medium triangle, float */}
        <svg style={{ position:"absolute", top:"38%", left:"92%", width:52, height:52, opacity:0.75, animation:"float 3.5s ease-in-out 0.8s infinite" }} viewBox="0 0 22 22">
          <polygon points="11,2 20,20 2,20" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="3"/>
        </svg>
        {/* medium diamond, pulse-scale fast */}
        <div style={{ position:"absolute", top:"60%", left:"91%", width:44, height:44, border:"3px solid rgba(255,255,255,0.60)", transform:"rotate(45deg)", animation:"pulse-scale 4s ease-in-out 1s infinite" }} />
        {/* small triangle, spin + float */}
        <svg style={{ position:"absolute", top:"76%", left:"93%", width:30, height:30, opacity:0.65, animation:"spin-slow 18s linear infinite, float 3s ease-in-out 1.2s infinite" }} viewBox="0 0 22 22">
          <polygon points="11,2 20,20 2,20" fill="none" stroke="rgba(255,255,255,0.70)" strokeWidth="3"/>
        </svg>

        {/* ── BOTTOM ── */}
        {/* large inverted triangle, float-wide */}
        <svg style={{ position:"absolute", top:"80%", left:"56%", width:80, height:80, opacity:0.70, animation:"float-wide 5s ease-in-out 1.5s infinite" }} viewBox="0 0 34 34">
          <polygon points="17,3 31,31 3,31" fill="none" stroke="rgba(255,255,255,0.80)" strokeWidth="3.5"/>
        </svg>
        {/* large diamond, pulse-scale */}
        <div style={{ position:"absolute", top:"82%", left:"74%", width:64, height:64, border:"3px solid rgba(255,255,255,0.55)", transform:"rotate(45deg)", animation:"pulse-scale 4.5s ease-in-out 0.5s infinite" }} />
        {/* small triangle, float */}
        <svg style={{ position:"absolute", top:"84%", left:"88%", width:36, height:36, opacity:0.65, animation:"float 3s ease-in-out 0.3s infinite" }} viewBox="0 0 22 22">
          <polygon points="11,2 20,20 2,20" fill="none" stroke="rgba(255,255,255,0.70)" strokeWidth="3"/>
        </svg>
      </div>

      {/* Navbar */}
      <nav
        className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 lg:px-20 lg:py-8"
        style={anim("fadeInDown", 0, 0.6)}
      >
        <Image src="/logo/logo.png" alt="Arnol Fokam" width={120} height={120} loading="eager" className="rounded-xl" />
      </nav>

      {/* Text — full on mobile, left half on desktop */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center overflow-y-auto px-8 pt-28 pb-12 lg:inset-y-0 lg:left-0 lg:w-1/2 lg:overflow-visible lg:px-20 lg:pb-0 lg:pt-0">
        <p
          className="text-base font-semibold uppercase tracking-widest text-zinc-400 lg:text-xl"
          style={anim("fadeInUp", 150)}
        >
          Hello, I&apos;m
        </p>
        <h1
          className="mt-3 font-bold leading-[1.05] text-white"
          style={{ ...anim("fadeInUp", 300), fontSize: "clamp(3rem, 10vw, 7rem)" }}
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

      {/* Right half — decorations + image (hidden on mobile) */}
      <div
        className="absolute inset-y-0 right-0 z-10 hidden w-1/2 lg:block"
        style={anim("fadeIn", 400, 1.2)}
      >
        {/* ── Decorations (all before image = behind person) ── */}

        {/* Upward light beam */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[70%] w-56 -translate-x-1/2 bg-gradient-to-t from-white/7 via-white/[0.03] to-transparent" />

        {/* Ground glow blob */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-14 w-[360px] -translate-x-1/2 rounded-full bg-white/15 blur-2xl" />

        {/* Inner ellipse ring — positioned around upper body/head */}
        <div className="pointer-events-none absolute bottom-[62%] left-1/2 h-10 w-[300px] -translate-x-1/2 rounded-full border-2 border-white/30" />

        {/* Middle rotating dashed ellipse */}
        <div className="pointer-events-none absolute bottom-[60%] left-1/2 -translate-x-1/2">
          <div
            className="h-14 w-[440px] rounded-full border-2 border-dashed border-white/20"
            style={{ animation: "spin-slow 22s linear infinite" }}
          />
        </div>

        {/* Outer slow counter-rotating ellipse */}
        <div className="pointer-events-none absolute bottom-[58%] left-1/2 -translate-x-1/2">
          <div
            className="h-16 w-[580px] rounded-full border border-white/12"
            style={{ animation: "spin-slow-reverse 35s linear infinite" }}
          />
        </div>

        {/* Floating accent dots */}
        <div className="pointer-events-none absolute bottom-[30%] left-[8%]  h-3   w-3   rounded-full bg-white/35" style={{ animation: "float 4s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute bottom-[22%] right-[7%]  h-2.5 w-2.5 rounded-full bg-white/30" style={{ animation: "float 5s ease-in-out 0.8s infinite" }} />
        <div className="pointer-events-none absolute bottom-[42%] left-[22%] h-2   w-2   rounded-full bg-white/22" style={{ animation: "float 6s ease-in-out 1.5s infinite" }} />
        <div className="pointer-events-none absolute bottom-[15%] right-[20%] h-3   w-3   rounded-full bg-white/28" style={{ animation: "float 4.5s ease-in-out 0.4s infinite" }} />
        <div className="pointer-events-none absolute bottom-[52%] right-[12%] h-1.5 w-1.5 rounded-full bg-white/20" style={{ animation: "float 5.5s ease-in-out 1s infinite" }} />

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
  );
}
