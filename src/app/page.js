import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to the n! Blog. Dive into a world of fascinating articles and stories!
      </h1>
      <Link href="/blog">
        <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
          Go to Blog
        </button>
      </Link>
    </div>
  );
}
