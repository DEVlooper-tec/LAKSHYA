'use client';
import { useEffect, useState } from 'react';
import NewsCard from '../components/newscard';

export default function NewsPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched articles:', data.articles); // ✅ Add this
        setArticles(data.articles);
      })
      .catch(err => console.error('Failed to fetch news:', err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🔥 Hot Tech News</h1>
      {articles.length === 0 ? (
        <p>Loading articles...</p>
      ) : (
        articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))
      )}
    </div>
  );
}
