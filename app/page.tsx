import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900 flex items-center justify-center px-6 py-20">
      <main className="mx-auto max-w-4xl text-center sm:text-left">
        {/* Header */}
        <header className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Welcome to Our Blog
          </h1>
          <h1 className="font-roboto">Lets go forward</h1>
          <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto sm:mx-0">
            Dive into carefully crafted articles about modern web development,
            from React tips to Next.js best practices. Stay updated with
            tutorials, guides, and insights to level up your coding skills.
          </p>

          <p className=" mt-2 text-base text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto sm:mx-0">
            Whether you're a beginner or an experienced developer, explore
            resources that help you write better code, optimize performance, and
            build beautiful, accessible web applications.
          </p>

          {/* Call-to-action button */}
          <div className="mt-6">
            <Link
              href="/blog"
              className="relative inline-flex items-center gap-2 rounded-lg
             bg-gradient-to-r from-indigo-600 to-purple-600
             px-6 py-3 text-white font-semibold
             shadow-lg shadow-indigo-500/30
             hover:from-indigo-700 hover:to-purple-700
             hover:shadow-indigo-500/50
             transition-all duration-300"
            >
              Explore Blog Posts →
            </Link>
          </div>
        </header>
      </main>
    </div>
  );
}
