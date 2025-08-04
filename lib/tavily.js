import { TavilyClient } from 'tavily';

const client = new TavilyClient(process.env.TAVILY_API_KEY);

export async function searchTopic(topic) {
    const res = await client.search(topic, { max_results: 5 });
    return res.results.map((r) => r.content).join('\n\n');
}
