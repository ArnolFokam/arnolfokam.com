import { SiteLayout } from "../components/SiteLayout";

export const metadata = {
  title: "Resume",
  description:
    "Resume of Arnol Fokam, Research Engineer working on reinforcement learning, LLMs, and applied AI systems.",
};

type Entry = {
  title: string;
  meta: string;
  period: string;
  href?: string;
  bullets?: string[];
};

const experience: Entry[] = [
  {
    title: "Research Engineer",
    meta: "InstaDeep",
    period: "2024 - Present",
    href: "https://openreview.net/profile?id=%7EArnol_Manuel_Fokam1",
    bullets: [
      "Working in research on reinforcement learning, large language models, and AI systems.",
      "Recent research includes inference strategies for complex reinforcement learning and sequence models for offline multi-agent reinforcement learning.",
    ],
  },
  {
    title: "Engineering Intern",
    meta: "InstaDeep, DeepPack team",
    period: "Aug 2023 - Mar 2024",
    bullets: [
      "Applied quality diversity and evolutionary computing methods to speed up model training in a production-grade reinforcement learning system.",
      "Fixed a continuous deployment issue affecting the machine learning experiment workflow for a team of engineers.",
      "Used Python, JAX, TensorFlow, GitLab, Docker, Pandas, and Matplotlib.",
    ],
  },
  {
    title: "Software Engineering Intern",
    meta: "Boostasoft",
    period: "Feb 2020 - Feb 2021",
    bullets: [
      "Led front-end development for a production recruitment platform serving over 1,000 users.",
      "Managed development of an Android COVID-19 tracking app with real-time statistics across more than 20 countries.",
      "Used JavaScript, TypeScript, React, React Native, and GitLab.",
    ],
  },
];

const projects: Entry[] = [
  {
    title: "LLM fine-tuning on African languages",
    meta: "Personal research project",
    period: "Nov 2021 - Dec 2023",
    href: "https://github.com/ArnolFokam/NER-Annotations-Density-vs-Pre-trained-Models",
    bullets: [
      "Studied how NER annotation density affects pre-trained language models in low-resource African language settings.",
      "Built training and evaluation notebooks for BERT, RoBERTa, and multilingual BERT variants across Pidgin, Kinyarwanda, and Swahili.",
      "Published the resulting token-classification model cards on Hugging Face.",
    ],
  },
  {
    title: "MiLMo - Minecraft Language Model",
    meta: "Personal project",
    period: "Aug 2022 - Jul 2023",
    href: "https://github.com/ArnolFokam/MiLMo",
    bullets: [
      "Trained a small GPT-style model on Minecraft maps encoded as 3D NumPy arrays.",
      "Built scripts to extract map data from a running Minecraft server, generate new structures, and visualize model outputs back in Minecraft.",
    ],
  },
  {
    title: "Entelect 2023 RL Game Bot",
    meta: "Personal project",
    period: "Apr 2023 - Aug 2023",
    href: "https://github.com/ArnolFokam/Entelect2023-RL-Game-Bot",
    bullets: [
      "Built an AI bot for the Entelect Challenge 2023 with the Wits Applied AI Interest Group.",
      "Set up a reinforcement learning training pipeline around the CyFi game server, including PPO experiments and environment tooling.",
      "Used Python, C#, PyTorch, Docker, Hydra, and Weights & Biases.",
    ],
  },
];

const education: Entry[] = [
  {
    title: "M.Sc. Computer Science",
    meta: "University of the Witwatersrand",
    period: "2022 - 2024",
    bullets: [
      "Research topic: a novel data augmentation method for contrastive self-supervised learning.",
      "Supported by a Google DeepMind Scholarship.",
    ],
  },
  {
    title: "B.Sc. (Hons) Computer Science, cum laude",
    meta: "University of the Witwatersrand",
    period: "2021",
    bullets: [
      "Research topic: influence of contrastive learning on source code plagiarism detection.",
      "Received Dean's List Honours and a Postgraduate Merit Award.",
    ],
  },
  {
    title: "B.Sc. Applied Physics",
    meta: "University of Buea",
    period: "2016 - 2019",
    bullets: [
      "Final-year research topic: introduction to quantum computing, theory and applications.",
    ],
  },
];

const publications: Entry[] = [
  {
    title:
      "Breaking the Performance Ceiling in Reinforcement Learning requires Inference Strategies",
    meta: "NeurIPS 2025 oral",
    period: "2025",
    href: "https://openreview.net/forum?id=RxkCwOKVKa",
  },
  {
    title:
      "Oryx: a Scalable Sequence Model for Many-Agent Coordination in Offline MARL",
    meta: "NeurIPS 2025 poster",
    period: "2025",
    href: "https://openreview.net/forum?id=XzXGqoUNUa",
  },
  {
    title:
      "Analysing Cross-Lingual Transfer in Low-Resourced African Named Entity Recognition",
    meta: "IJCNLP-AACL",
    period: "2023",
    href: "https://scholar.google.com/citations?user=cA1hu0UAAAAJ&hl=en",
  },
  {
    title:
      "Hierarchically Composing Level Generators for the Creation of Complex Structures",
    meta: "IEEE Transactions on Games",
    period: "2023",
    href: "https://scholar.google.com/citations?user=cA1hu0UAAAAJ&hl=en",
  },
  {
    title:
      "Influence of Contrastive Learning on Source Code Plagiarism Detection through Recursive Neural Networks",
    meta: "IMITEC",
    period: "2021",
    href: "https://scholar.google.com/citations?user=cA1hu0UAAAAJ&hl=en",
  },
];

const awards: Entry[] = [
  {
    title: "Google DeepMind Scholarship",
    meta: "University of the Witwatersrand",
    period: "2022",
  },
  {
    title: "Runner-up Award",
    meta: "Minecraft Open-Endedness Challenge, GECCO",
    period: "2022",
  },
  {
    title: "Dean's List Honours Award",
    meta: "University of the Witwatersrand",
    period: "2021",
  },
  {
    title: "Postgraduate Merit Award",
    meta: "University of the Witwatersrand",
    period: "2021",
  },
  {
    title: "TensorFlow Developer Certificate",
    meta: "DeepLearning.AI / Coursera",
    period: "2021",
  },
];

const skills = [
  "Python",
  "JAX",
  "PyTorch",
  "TensorFlow",
  "Hugging Face Transformers",
  "Reinforcement learning",
  "Self-supervised learning",
  "NLP",
  "Docker",
  "GitLab",
  "Weights & Biases",
  "React",
  "React Native",
  "TypeScript",
];

function Section({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <section className="mt-12">
      <h2 className="font-sans text-sm uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </h2>
      <ul className="mt-6 divide-y divide-border">
        {entries.map((entry) => (
          <li key={`${entry.title}-${entry.period}`} className="py-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-serif text-xl leading-snug">
                {entry.href ? (
                  <a
                    href={entry.href}
                    className="underline-offset-4 hover:text-primary hover:underline"
                  >
                    {entry.title}
                  </a>
                ) : (
                  entry.title
                )}{" "}
                <span className="text-muted-foreground">/ {entry.meta}</span>
              </h3>
              <span className="shrink-0 text-sm uppercase tracking-widest text-muted-foreground">
                {entry.period}
              </span>
            </div>
            {entry.bullets && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ResumePage() {
  return (
    <SiteLayout>
      <header className="mb-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl">
            Resume
          </h1>
          <a
            href="mailto:me@arnolfokam.com"
            className="text-sm underline underline-offset-4 hover:text-primary"
          >
            Request CV
          </a>
        </div>
        <p className="mt-4 text-lg leading-relaxed text-foreground/90">
          Research Engineer at InstaDeep working on reinforcement learning,
          large language models, and applied AI systems. My background spans
          self-supervised learning, NLP for African languages, source code
          understanding, and production software engineering.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="font-sans text-sm uppercase tracking-[0.18em] text-muted-foreground">
          Skills
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <Section title="Experience" entries={experience} />
      <Section title="Selected Projects" entries={projects} />
      <Section title="Education" entries={education} />
      <Section title="Selected Publications" entries={publications} />
      <Section title="Awards & Certificates" entries={awards} />
    </SiteLayout>
  );
}
