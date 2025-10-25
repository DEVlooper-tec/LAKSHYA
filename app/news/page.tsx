'use client';
export const dynamic = 'force-dynamic';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [showFinalHeading, setShowFinalHeading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error('Failed to fetch news:', err);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111111] text-white px-6 py-10 overflow-hidden">
      {/* Floating Emojis */}
      <div className="absolute top-4 left-4 text-3xl animate-bounce-slow">💻</div>
      <div className="absolute top-4 right-4 text-3xl animate-pulse">🤖</div>

      {/* Glowing Orb Behind Heading */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-tr from-indigo-500 via-pink-500 to-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Heading */}
      <div className="relative text-center mb-10 z-10">
        <span className="text-5xl">🗞️</span>
        <h1
          data-aos="fade-down"
          className="text-3xl font-extrabold mt-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent"
        >
          {!showFinalHeading ? (
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Latest Tech News & Updates')
                  .callFunction(() => setShowFinalHeading(true))
                  .start();
              }}
            />
          ) : (
            'Latest Tech News & Updates'
          )}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-gray-400 text-sm mt-2 max-w-xl mx-auto"
        >
          Stay ahead with curated stories on AI, startups, gadgets, and innovation — updated daily.
        </p>
      </div>

      {/* News Cards */}
      {articles.length === 0 ? (
        <p className="text-center text-gray-400">Loading news...</p>
      ) : (
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-10 before:transition-opacity before:duration-300"
            >
              <img
                src={item.urlToImage || '/fallback.jpg'}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 relative z-10">
                <h2 className="text-xl font-semibold mb-2 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200">
                  {item.title}
                </h2>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
