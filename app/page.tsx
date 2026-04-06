import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import me from "@/public/avatars/me.png";

const socials = [
  {
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/in/arnolfokam/",
    label: "LinkedIn",
  },
  {
    icon: faGoogleScholar,
    href: "https://scholar.google.com/citations?user=cA1hu0UAAAAJ&hl=en",
    label: "Google Scholar",
  },
  {
    icon: faGithub,
    href: "https://github.com/ArnolFokam",
    label: "GitHub",
  },
  {
    icon: faNewspaper,
    href: null,
    label: "Substack (coming soon)",
  },
];

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-zinc-900">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Image
          src={me}
          alt="Arnolf Okam"
          loading="eager"
          style={{
            height: "85vh",
            width: "auto",
            filter:
              "drop-shadow(0 0 80px rgba(255,255,255,0.1)) drop-shadow(0 0 200px rgba(255,255,255,0.05))",
          }}
        />
      </div>

      <div className="absolute bottom-8 left-8 flex flex-col gap-3">
        {socials.map(({ icon, href, label }) => {
          const shared =
            "group relative flex h-10 w-10 items-center justify-center rounded-xl";
          const tooltip = (
            <span className="pointer-events-none absolute left-12 whitespace-nowrap rounded-lg bg-zinc-700 px-2.5 py-1 text-xs text-zinc-100 opacity-0 transition-opacity group-hover:opacity-100">
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
              <FontAwesomeIcon icon={icon} className="h-4 w-4" />
              {tooltip}
            </a>
          ) : (
            <span
              key={label}
              aria-label={label}
              className={`${shared} cursor-not-allowed bg-zinc-800 text-zinc-600`}
            >
              <FontAwesomeIcon icon={icon} className="h-4 w-4" />
              {tooltip}
            </span>
          );
        })}
      </div>
    </main>
  );
}
