import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteLayout } from "../../components/SiteLayout";
import { formatDate, getPost, getPosts } from "../../lib/writings";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Not found" };
  }

  return {
    title: post.title,
    description: post.dek,
    openGraph: {
      title: post.title,
      description: post.dek,
      type: "article",
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteLayout>
      <article>
        <header className="mb-12">
          <time
            dateTime={post.date}
            className="text-xs uppercase tracking-widest text-muted-foreground"
          >
            {formatDate(post.date)}
          </time>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg italic text-muted-foreground">
            {post.dek}
          </p>
        </header>

        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      <div className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground">
        <Link href="/posts" className="hover:text-foreground">
          Back to posts
        </Link>
      </div>
    </SiteLayout>
  );
}
