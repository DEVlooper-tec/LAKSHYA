'use client';

import { useEffect, useState } from 'react';

type Article = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

type NewsCardProps = Article;

function NewsCard({ title, description, imageUrl, link }: NewsCardProps) {
  return (
    <div className="max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{title}</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=dd21f00ef09242ddb62f76297583c3d9'
    )
      .then((res) => res.json())
      .then((data) => {
        const formatted = Array.isArray(data.articles)
          ? data.articles.map((item: any) => ({
              title: item.title,
              description: item.description,
              imageUrl: item.urlToImage || 'https://via.placeholder.com/300x200',
              link: item.url,
            }))
          : [];
        setArticles(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load news.');
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="text-center text-gray-500 dark:text-gray-300 mt-10">Loading tech news...</p>
    );

  if (error)
    return <p className="text-center text-red-500 dark:text-red-400 mt-10">{error}</p>;

  return (
    <main className="p-6 bg-slate-50 dark:bg-gray-950 min-h-screen text-gray-800 dark:text-gray-100">
      <h1 className="text-center text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 whitespace-nowrap overflow-hidden border-r-4 border-blue-500 animate-typing">
        Tech News Highlights
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-10">
        Curated stories from the world of technology
      </p>
      <footer className="mt-20 text-center text-xs text-gray-500 dark:text-gray-400">
  Built by @Devang · Powered by NewsAPI · Last updated: October 2025
</footer>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={index} {...article} />
        ))}
      </div>
    </main>
  );
}
