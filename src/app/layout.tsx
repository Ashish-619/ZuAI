import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A sample Next.js application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A sample Next.js application" />
      </Head>
      <body className="min-h-screen bg-blue-50 flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex lg:flex-col lg:w-20 lg:h-full lg:bg-white lg:shadow-lg lg:fixed lg:top-0 lg:left-0 lg:py-4">
          <div className="flex flex-col flex-grow items-center">
            <a href="#" className="text-gray-600 hover:text-blue-600 mb-6">
              <i className="fas fa-home text-2xl">
                <img src="zuai-logo.png" alt="zuai" />
              </i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 mb-6">
              <i className="fas fa-book text-2xl">
                <img src="home-logo.png" alt="home" className="bg-customPurple rounded-full p-1" />
              </i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 mb-6">
              <i className="fas fa-cog text-2xl">
                <img src="book-logo.png" alt="book" />
              </i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 mb-6">
              <i className="fas fa-cog text-2xl">
                <img src="copy-logo.png" alt="copy" />
              </i>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 mb-6">
              <i className="fas fa-cog text-2xl">
                <img src="question-logo.png" alt="question" />
              </i>
            </a>
          </div>
          <a href="#" className="text-gray-600 hover:text-blue-600 mb-6 mt-auto">
            <i className="fas fa-cog text-2xl">
              <img src="party-logo.png" alt="party" />
            </i>
          </a>
        </aside>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
