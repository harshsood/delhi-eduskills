import { notFound } from "next/navigation"
import { POSTS } from "@/lib/blog"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-sm text-primary">{new Date(post.date).toLocaleDateString()}</p>
      <h1 className="mb-3 text-3xl font-semibold">{post.title}</h1>
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        {post.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  )
}
