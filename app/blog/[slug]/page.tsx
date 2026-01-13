// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";

const blogs = [
  {
    slug: "first-post",
    title: "First Post",
    description:
      "An introduction to our blog where we share insights on web development, Next.js, and modern UI design.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    slug: "nextjs-routing",
    title: "Next.js Routing",
    description:
      "Next.js routing is built on a file-based system that makes creating pages and navigation simple and intuitive. This article explains how routes are created using folders and files, how dynamic routes work, and how layouts help structure an application. It also covers how routing integrates with static and dynamic rendering for better performance.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    slug: "parallel-vs-sequential-data-fetching",
    title: "Parallel vs Sequential Data Fetching",
    description:
      "Parallel and sequential data fetching are two common patterns for loading data in modern web applications. This article explains how each approach works, their performance trade-offs, and when to choose one over the other. You’ll also see how these patterns apply in frameworks like Next.js and React to build faster, more efficient apps.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    slug: "performance-optimization",
    title: "Web Performance Optimization",
    description:
      "Web performance optimization involves techniques like minimizing and compressing assets, optimizing images, reducing JavaScript bundle size, and leveraging caching strategies. This article explains how to improve loading speed, rendering performance, and runtime efficiency. It also highlights how tools and frameworks like Next.js help apply these techniques effectively.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

// Pre-generate all blog pages
export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug })); //generateStaticParams() tells Next.js
  // These are all the dynamic route values I want you to pre-build at build time.”
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 sm:px-6 lg:px-8 py-12"
      aria-labelledby="blog-title"
    >
      <article className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
        {/* Blog image */}
        <img
          src={blog.image}
          alt={`Cover image for ${blog.title}`}
          className="w-full h-32 object-cover sm:h-80 md:h-96"
        />

        {/* Blog content */}
        <div className="p-6 sm:p-8">
          <h1
            id="blog-title"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-4"
          >
            {blog.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            {blog.description}
          </p>

          <div className="mt-6">
            <a
              href="/blog"
              className="inline-block rounded-lg bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            >
              ← Back to Blog
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
