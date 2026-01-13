export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-slate-900">404</h1>
        <p className="mt-4 text-lg text-slate-600">
          Sorry, the page you are looking for does not exist.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700"
        >
          Go back home
        </a>
      </div>
    </main>
  );
}
