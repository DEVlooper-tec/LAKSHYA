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
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4"
    >
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={article.urlToImage || 'https://via.placeholder.com/150'}
            alt={article.title}
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-blue-600">{article.title}</h2>
          <p className="mt-2 text-gray-500 text-sm">{article.description}</p>
          <a
            href={article.url}
            className="mt-3 inline-block text-sm text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
