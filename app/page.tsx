'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-8 text-gray-900">
      <section className="text-center mb-12 animate-fadeIn">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Welcome to Lakshya 🚀</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Your student hub for tech news, internships, courses, and career guidance — all in one place.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Link href="/news">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 cursor-pointer animate-slideUp">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">📰 News</h2>
            <p className="text-gray-700">Stay updated with the latest student and tech news.</p>
          </div>
        </Link>

        <Link href="/internships">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 cursor-pointer animate-slideUp delay-100">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">💼 Internships</h2>
            <p className="text-gray-700">Find curated internship opportunities across domains.</p>
          </div>
        </Link>

        <Link href="/courses">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 cursor-pointer animate-slideUp delay-200">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">📚 Courses</h2>
            <p className="text-gray-700">Explore free and paid courses to level up your skills.</p>
          </div>
        </Link>
      </section>
    </main>
  );
}
