import Link from "next/link";
import { SiteLayout } from "./components/SiteLayout";

const inlineLink =
  "text-foreground underline underline-offset-4 hover:text-primary";

export default function Home() {
  return (
    <SiteLayout>
      <header className="mb-16">
        <p className="font-sans text-sm uppercase tracking-[0.18em] text-muted-foreground">
          Research Engineer
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
          Arnol Fokam
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-muted-foreground">
          <a
            href="mailto:me@arnolfokam.com"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            me@arnolfokam.com
          </a>
          <span aria-hidden="true">/</span>
          <a
            href="https://calendar.app.google/eobyAWrm8sA1sLJR6"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Book a chat
          </a>
        </div>
      </header>

      <section className="space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          I&apos;m Arnol Fokam, a Research Engineer at{" "}
          <a href="https://www.instadeep.com/" className={inlineLink}>
            InstaDeep
          </a>
          . I mostly work on{" "}
          <a
            href="https://openreview.net/profile?id=%7EArnol_Manuel_Fokam1"
            className={inlineLink}
          >
            reinforcement learning
          </a>
          , large language models, and the engineering side of turning research
          ideas into working systems.
        </p>
        <p>
          Before that, I studied Computer Science at the University of the
          Witwatersrand, where my work focused on self-supervised learning and
          representation learning. I&apos;ve also worked on NLP for African
          languages, source code understanding, and a few experiments that
          started as curiosity and turned into{" "}
          <a
            href="https://scholar.google.com/citations?user=cA1hu0UAAAAJ&hl=en"
            className={inlineLink}
          >
            papers
          </a>
          ,{" "}
          <a href="https://huggingface.co/arnolfokam" className={inlineLink}>
            models
          </a>
          , or{" "}
          <a href="https://github.com/ArnolFokam" className={inlineLink}>
            code
          </a>
          .
        </p>
        <p>
          I like the space between research and building: reading the paper,
          testing the idea, breaking the first version, and shaping it into
          something useful.
        </p>
        <p className="text-muted-foreground">
          You can read my{" "}
          <Link href="/posts" className={inlineLink}>
            posts
          </Link>
          , or view my{" "}
          <Link href="/resume" className={inlineLink}>
            resume
          </Link>
          .
        </p>
      </section>
    </SiteLayout>
  );
}
