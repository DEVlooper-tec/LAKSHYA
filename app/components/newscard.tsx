'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

interface Props {
  article: Article;
}

export default function NewsCard({ article }: Props) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="bg-[#1a1a1a] text-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            className="h-full w-full object-cover"
            src={article.urlToImage || 'https://via.placeholder.com/150'}
            alt={article.title}
          />
        </div>
        <div className="p-4 md:w-2/3">
          <h2 className="text-lg font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-200">
            {article.title}
          </h2>
          <p className="mt-2 text-sm text-gray-300">{article.description}</p>
          <a
            href={article.url}
            className="mt-3 inline-block text-sm text-indigo-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}
