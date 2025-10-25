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
        const res = await fetch('/api/news'); // ✅ Use relative path
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error('Failed to fetch news:', err);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 py-10 overflow-hidden">
      {/* Heading */}
      <h1
        data-aos="fade-down"
        className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent"
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
                .typeString('📰 Latest Tech News & Updates')
                .callFunction(() => setShowFinalHeading(true))
                .start();
            }}
          />
        ) : (
          '📰 Latest Tech News & Updates'
        )}
      </h1>

      {/* News Cards */}
      {articles.length === 0 ? (
        <p className="text-center text-gray-400">Loading news...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={item.urlToImage || '/fallback.jpg'}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 relative z-10">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
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
