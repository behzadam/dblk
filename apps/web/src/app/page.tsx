import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to DBLK</h1>
        <p className="text-center mb-8">A modern URL shortener built with Next.js</p>
        <div className="flex justify-center gap-4">
          <Link
            href="https://app.dblk.ir/register"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
          <Link
            href="https://app.dblk.ir/login"
            className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50"
          >
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
