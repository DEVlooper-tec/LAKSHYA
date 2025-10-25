'use client';

import Link from 'next/link';

export default function ExplorePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111111] text-white px-6 py-12 overflow-hidden">
      {/* Floating Emojis */}
      <div className="absolute top-4 left-4 text-3xl animate-bounce-slow">🚀</div>
      <div className="absolute top-4 right-4 text-3xl animate-pulse">🧭</div>

      {/* Glowing Orb Behind Heading */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-tr from-indigo-500 via-pink-500 to-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Welcome Section */}
      <section className="text-center mb-12 relative z-10">
        <h1
          data-aos="fade-down"
          className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
        >
          Welcome to Lakshya’s Explore Corner 🌐
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-gray-400 text-sm mt-4 max-w-xl mx-auto"
        >
          Here you can walk around the world and gather important info — from tech news to internships, career tips, and more.
        </p>
      </section>

      {/* Explore Cards */}
      <section
        data-aos="fade-up"
        data-aos-delay="400"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {[
          { title: 'News', emoji: '📰', link: '/news', color: 'text-blue-400' },
          { title: 'Internships', emoji: '💼', link: '/internships', color: 'text-green-400' },
          { title: 'Courses', emoji: '📚', link: '/courses', color: 'text-purple-400' },
        ].map((item, index) => (
          <Link key={index} href={item.link}>
            <div
              data-aos="zoom-in"
              className="group bg-[#1a1a1a] rounded-xl p-6 shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className={`text-3xl mb-2 ${item.color}`}>{item.emoji}</div>
              <h2 className={`text-xl font-semibold ${item.color} group-hover:opacity-80 transition-opacity duration-200`}>
                {item.title}
              </h2>
              <p className="text-gray-400 text-sm mt-2">Explore {item.title} and stay ahead.</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Closing Section */}
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="mt-16 text-center max-w-3xl mx-auto px-4 py-10 border-t border-gray-800"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">
          You’ve Entered Lakshya’s Explore Corner 🌐
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          This isn’t just a page — it’s your gateway to discovery. From tech news and internships to curated courses and career insights, Lakshya’s Explore Corner is designed to help students like you navigate the world of opportunities. Click around, dive deep, and uncover something new every time.
        </p>
      </section>
    </main>
  );

}
