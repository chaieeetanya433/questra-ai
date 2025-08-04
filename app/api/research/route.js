import { NextResponse } from 'next/server';
import { searchTopic } from '@/lib/tavily';
import { summarizeContent } from '@/lib/gemini';

export async function POST(req) {
    try {
        const { topic } = await req.json();
        const webData = await searchTopic(topic);
        const summary = await summarizeContent(webData, topic);

        return NextResponse.json({
            success: true,
            summary,
        });
    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                error: err.message || 'Something went wrong.',
            },
            { status: 500 }
        );
    }
}
