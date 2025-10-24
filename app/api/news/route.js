export async function GET() {
  const apiKey = process.env.NEWS_API_KEY;
  console.log('API Key:', apiKey); // ✅ Log the key

  const url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=10&apiKey=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log('NewsAPI response:', data); // ✅ Log the response

    if (!res.ok) {
      throw new Error(data.message || 'Failed to fetch news');
    }

    return Response.json({ articles: data.articles });
  } catch (error) {
    console.error('API fetch failed:', error);
    return Response.json({ articles: [], error: error.message });
  }
}
