import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>n! Blog</title>
        <meta name="description" content="Welcome to n! Blog" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-black">
        <div className="flex flex-col min-h-screen">
          <header className="p-4 bg-white border-b border-gray-200">
            <nav className="container mx-auto flex justify-center items-center space-x-10">
              <div className="text-lg font-bold">n! Blog</div>
              <ul className="flex space-x-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow container mx-auto p-4 flex justify-center items-center">
            {children}
          </main>
          <footer className="p-4 text-center bg-white border-t border-gray-200">
            <p>&copy; 2024 n! Blog. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
