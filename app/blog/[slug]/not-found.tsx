import Link from "next/link";

export default function BlogNotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      {/* Icon / Illustration */}
      <div className="mb-6" aria-hidden="true">
        <svg
          className="w-24 h-24 text-indigo-600 dark:text-indigo-400 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
        Oops! Blog Not Found
      </h1>

      <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md">
        The blog post you’re looking for doesn’t exist or may have been removed.
        Check out other articles or return to the main blog page.
      </p>

      <Link
        href="/blog"
        className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition"
      >
        Back to Blogs
      </Link>
    </main>
  );
}
