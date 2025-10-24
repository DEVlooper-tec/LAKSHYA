'use client';
import { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard'; // ✅ Make sure the filename matches exactly (case-sensitive)

export default function NewsPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(`${window.location.origin}/api/news`); // ✅ Absolute URL for Vercel
        const data = await res.json();
        console.log('Fetched articles:', data.articles); // ✅ Debug log
        setArticles(data.articles);
      } catch (err) {
        console.error('Failed to fetch news:', err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🔥 Hot Tech News</h1>
      {articles.length === 0 ? (
        <p>Loading articles...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
