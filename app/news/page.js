'use client';
import { useEffect, useState } from 'react';
import NewsCard from '../../components/NewsCard'; // Adjust path if needed

export default function NewsPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setArticles(data.articles))
      .catch(err => console.error('Failed to fetch news:', err));
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">🔥 Hot Tech News</h1>
      {articles.length === 0 ? (
        <p className="text-gray-600">Loading articles...</p>
      ) : (
        articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))
      )}
    </div>
  );
}
