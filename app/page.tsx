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
    <main className="relative h-screen w-full overflow-hidden">

      {/* Background image */}
      <Image
        src="/working.jpg"
        alt=""
        fill
        loading="eager"
        style={{ objectFit: "cover", objectPosition: "center", filter: "blur(3px)", transform: "scale(1.05)" }}
        className="z-0"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/85" />

      {/* ── Geometric decorations — scattered around the portrait ── */}
      <div className="pointer-events-none absolute inset-0 z-[5]">

        {/* — top edge — */}
        <svg style={{ position:"absolute", top:"4%",  left:"68%", width:44, height:44, opacity:0.60, animation:"spin-slow 30s linear infinite" }} viewBox="0 0 44 44">
          <polygon points="22,3 41,41 3,41" fill="none" stroke="#60a5fa" strokeWidth="2"/>
        </svg>
        <div style={{ position:"absolute", top:"3%",  left:"80%", width:28, height:28, border:"2px solid rgba(167,139,250,0.60)", transform:"rotate(45deg)", animation:"float 4s ease-in-out infinite" }} />
        <svg style={{ position:"absolute", top:"5%",  left:"91%", width:32, height:32, opacity:0.55, animation:"spin-slow-reverse 22s linear infinite" }} viewBox="0 0 30 30">
          <polygon points="15,28 2,2 28,2" fill="none" stroke="#a78bfa" strokeWidth="2"/>
        </svg>

        {/* — left edge of image — */}
        <div style={{ position:"absolute", top:"22%", left:"52%", width:22, height:22, border:"2px solid rgba(255,255,255,0.60)", transform:"rotate(45deg)", animation:"float 5s ease-in-out 0.5s infinite" }} />
        <svg style={{ position:"absolute", top:"42%", left:"51%", width:36, height:36, opacity:0.55, animation:"float 6s ease-in-out 1s infinite" }} viewBox="0 0 30 30">
          <polygon points="15,28 2,2 28,2" fill="none" stroke="#60a5fa" strokeWidth="2"/>
        </svg>
        <div style={{ position:"absolute", top:"63%", left:"53%", width:18, height:18, border:"2px solid rgba(96,165,250,0.65)", transform:"rotate(45deg)", animation:"spin-slow 25s linear infinite" }} />

        {/* — right edge — */}
        <div style={{ position:"absolute", top:"20%", left:"94%", width:38, height:38, border:"2px solid rgba(255,255,255,0.55)", transform:"rotate(20deg)", animation:"spin-slow-reverse 28s linear infinite" }} />
        <svg style={{ position:"absolute", top:"44%", left:"93%", width:28, height:28, opacity:0.60, animation:"float 5s ease-in-out 0.8s infinite" }} viewBox="0 0 22 22">
          <polygon points="11,2 20,20 2,20" fill="none" stroke="white" strokeWidth="2"/>
        </svg>
        <div style={{ position:"absolute", top:"66%", left:"92%", width:20, height:20, border:"2px solid rgba(167,139,250,0.65)", transform:"rotate(45deg)", animation:"float 4.5s ease-in-out 1.2s infinite" }} />

        {/* — bottom edge — */}
        <svg style={{ position:"absolute", top:"82%", left:"57%", width:40, height:40, opacity:0.55, animation:"float 7s ease-in-out 1.5s infinite" }} viewBox="0 0 34 34">
          <polygon points="17,3 31,31 3,31" fill="none" stroke="#60a5fa" strokeWidth="2"/>
        </svg>
        <div style={{ position:"absolute", top:"84%", left:"75%", width:30, height:30, border:"2px solid rgba(255,255,255,0.55)", transform:"rotate(45deg)", animation:"spin-slow 32s linear infinite" }} />
        <svg style={{ position:"absolute", top:"80%", left:"88%", width:26, height:26, opacity:0.55, animation:"float 5s ease-in-out 0.3s infinite" }} viewBox="0 0 22 22">
          <polygon points="11,2 20,20 2,20" fill="none" stroke="#a78bfa" strokeWidth="2"/>
        </svg>
      </div>

      {/* Navbar */}
      <nav
        className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-20 py-8"
        style={anim("fadeInDown", 0, 0.6)}
      >
        <Image src="/logo/logo.png" alt="Arnol Fokam" width={72} height={72} className="rounded-lg" />
      </nav>

      {/* Text — left half */}
      <div className="absolute inset-y-0 left-0 z-10 flex w-1/2 flex-col justify-center px-20">
        <p
          className="text-2xl font-semibold uppercase tracking-widest text-zinc-400"
          style={anim("fadeInUp", 150)}
        >
          Hello, I&apos;m
        </p>
        <h1
          className="mt-3 font-bold leading-[1.05] text-white"
          style={{ ...anim("fadeInUp", 300), fontSize: "clamp(4.5rem, 8.5vw, 8.5rem)" }}
        >
          Arnol Fokam
        </h1>
        <p
          className="mt-5 text-3xl font-semibold text-zinc-300"
          style={anim("fadeInUp", 450)}
        >
          AI Builder in London 🇬🇧💂
        </p>
        <p
          className="mt-6 text-2xl leading-10 text-zinc-400"
          style={anim("fadeInUp", 600)}
        >
          Research Engineer &amp; Entrepreneur designing intelligent systems that bridge AI research and real-world impact — building ecosystems where Africans lead the next wave of deep tech innovation.
        </p>

        {/* Social icons */}
        <div className="mt-8 flex flex-row gap-4" style={anim("fadeInUp", 750)}>
          {socials.map(({ icon, customIcon, href, label }) => {
            const shared = "group relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-150";
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
                className={`${shared} bg-zinc-800 text-zinc-300 hover:scale-110 hover:bg-zinc-700 hover:text-white`}
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

      {/* Right half — decorations + image */}
      <div
        className="absolute inset-y-0 right-0 z-10 w-1/2"
        style={anim("fadeIn", 400, 1.2)}
      >
        {/* ── Decorations (all before image = behind person) ── */}

        {/* Upward light beam */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[70%] w-56 -translate-x-1/2 bg-gradient-to-t from-white/10 via-white/5 to-transparent" />

        {/* Ground glow blob */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-14 w-[360px] -translate-x-1/2 rounded-full bg-white/25 blur-2xl" />

        {/* Inner ellipse ring */}
        <div className="pointer-events-none absolute bottom-3 left-1/2 h-10 w-[300px] -translate-x-1/2 rounded-full border-2 border-white/55" />

        {/* Middle rotating dashed ellipse */}
        <div className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2">
          <div
            className="h-14 w-[440px] rounded-full border-2 border-dashed border-white/40"
            style={{ animation: "spin-slow 22s linear infinite" }}
          />
        </div>

        {/* Outer slow counter-rotating ellipse */}
        <div className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2">
          <div
            className="h-16 w-[580px] rounded-full border border-white/20"
            style={{ animation: "spin-slow-reverse 35s linear infinite" }}
          />
        </div>

        {/* Floating accent dots */}
        <div className="pointer-events-none absolute bottom-[30%] left-[8%]  h-3   w-3   rounded-full bg-white/55" style={{ animation: "float 4s ease-in-out infinite" }} />
        <div className="pointer-events-none absolute bottom-[22%] right-[7%]  h-2.5 w-2.5 rounded-full bg-white/45" style={{ animation: "float 5s ease-in-out 0.8s infinite" }} />
        <div className="pointer-events-none absolute bottom-[42%] left-[22%] h-2   w-2   rounded-full bg-white/35" style={{ animation: "float 6s ease-in-out 1.5s infinite" }} />
        <div className="pointer-events-none absolute bottom-[15%] right-[20%] h-3   w-3   rounded-full bg-white/40" style={{ animation: "float 4.5s ease-in-out 0.4s infinite" }} />
        <div className="pointer-events-none absolute bottom-[52%] right-[12%] h-1.5 w-1.5 rounded-full bg-white/30" style={{ animation: "float 5.5s ease-in-out 1s infinite" }} />

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
