export async function GET() {
  const response = await fetch(
    'https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=10&apiKey=dd21f00ef09242ddb62f76297583c3d9'
  );
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
