'use client';
import { useEffect, useState } from 'react';

export default function NewsPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🔥 Hot Tech News</h1>
      {articles.map((article, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
}
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-blue-600">Tailwind is working!</h1>
        <p className="mt-2 text-gray-700">You're ready to build beautiful UIs.</p>
      </div>
    </div>
  );
}
export default function NewsCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://via.placeholder.com/150" alt="Tech News" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-blue-600">AI Revolution in Education</h2>
          <p className="mt-2 text-gray-500 text-sm">
            New tools are helping students learn faster and connect with mentors worldwide. Here's how...
          </p>
          <a href="#" className="mt-3 inline-block text-sm text-blue-500 hover:underline">Read More</a>
        </div>
      </div>
    </div>
  );
}

