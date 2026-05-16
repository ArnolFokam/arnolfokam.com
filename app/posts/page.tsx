import Link from "next/link";
import { SiteLayout } from "../components/SiteLayout";
import { formatDate, getPosts } from "../lib/writings";

export const metadata = {
  title: "Posts",
  description: "Short essays and notes by Arnol Fokam.",
};

export default function PostsPage() {
  const posts = getPosts();

  return (
    <SiteLayout>
      <header className="mb-12">
        <h1 className="font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl">
          Posts
        </h1>
        <p className="mt-4 text-muted-foreground">
          Short notes on AI, building, and the journey.
        </p>
      </header>

      {posts.length > 0 ? (
        <ul className="divide-y divide-border">
          {posts.map((post) => (
            <li key={post.slug} className="group py-6">
              <Link href={`/posts/${post.slug}`} className="block">
                <div className="flex items-baseline justify-between gap-6">
                  <h2 className="font-serif text-2xl leading-snug transition-colors group-hover:text-primary md:text-3xl">
                    {post.title}
                  </h2>
                  <time
                    dateTime={post.date}
                    className="shrink-0 text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    {formatDate(post.date)}
                  </time>
                </div>
                <p className="mt-2 text-base text-muted-foreground">
                  {post.dek}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground">No posts yet.</p>
      )}

      <p className="mt-10 text-sm text-muted-foreground">
        More writing lives at{" "}
        <a
          href="https://chocolatecookiebytes.substack.com/"
          className="text-foreground underline underline-offset-4 hover:text-primary"
        >
          Chocolate Cookie Bytes
        </a>
        .
      </p>
    </SiteLayout>
  );
}
