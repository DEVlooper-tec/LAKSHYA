'use client';

import Link from 'next/link';

export default function CoursesPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111111] text-white px-6 py-12 overflow-hidden">
      {/* Floating Emojis */}
      <div className="absolute top-4 left-4 text-3xl animate-bounce-slow">📚</div>
      <div className="absolute top-4 right-4 text-3xl animate-pulse">🧠</div>

      {/* Glowing Orb Behind Heading */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-tr from-blue-500 via-cyan-500 to-teal-400 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Welcome Section */}
      <section className="text-center mb-12 relative z-10">
        <h1
          data-aos="fade-down"
          className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent"
        >
          Welcome to Lakshya’s Explore Courses 📚
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-gray-400 text-sm mt-4 max-w-xl mx-auto"
        >
          Discover diverse courses that span the digital world — from coding and design to data science and beyond.
        </p>
      </section>

      {/* Course Category Cards */}
      <section
        data-aos="fade-up"
        data-aos-delay="400"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {[
          { title: 'Programming', emoji: '💻', link: '/courses/programming', color: 'text-blue-400' },
          { title: 'UI/UX Design', emoji: '🎨', link: '/courses/uiux', color: 'text-pink-400' },
          { title: 'Data Science', emoji: '📊', link: '/courses/data-science', color: 'text-teal-400' },
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
              <p className="text-gray-400 text-sm mt-2">Explore {item.title} and level up your skills.</p>
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
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent mb-4">
          You’ve Entered Lakshya’s Explore Courses 📖
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          This isn’t just a catalog — it’s a doorway to your next big breakthrough. Start with the basics of programming, advance through the intricacies of UI/UX, or dive deep into the world of Data Science. Each course cluster is curated to fuel your ambitions and equip you with the skills the future demands.
        </p>
      </section>

      {/* Student Illustrations */}
      <img
        src="/course-coder-left.png"
        alt="Student learning online"
        className="absolute bottom-0 left-0 w-40 opacity-80"
      />
      <img
        src="/course-coder-right.png"
        alt="Student learning online"
        className="absolute bottom-0 right-0 w-40 opacity-80"
      />
    </main>
  );
}
