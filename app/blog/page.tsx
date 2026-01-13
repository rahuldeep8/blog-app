import Link from "next/link";
import { blogs } from "@/src/data/blogs";
export const dynamic = "force-static";

//export const revalidate = 60; if blogs later come from cms or strapi make it isr

export default async function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-6 py-12">
      <section className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Blogs
          </h1>
          <p className="mt-2 text-slate-700">
            Articles, tutorials, and best practices for modern web development
          </p>
        </header>

        {/* Blog Cards */}
        <nav aria-label="Blog posts">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <li key={blog.slug}>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-48 w-full object-cover"
                  />

                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="text-lg font-semibold group-hover:text-indigo-700">
                      {blog.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-slate-700">
                      {blog.description}
                    </p>
                    <span className="mt-4 text-sm font-medium text-indigo-600">
                      Read article →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}
