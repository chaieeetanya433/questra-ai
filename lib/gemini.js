export async function summarizeContent(content, topic) {
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GOOGLE_API_KEY}`;

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `You're an expert researcher. Summarize the following content about "${topic}" into a structured report with headings:\n\n${content}`,
                        },
                    ],
                },
            ],
        }),
    });

    const data = await response.json();

    const summary = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "No summary available.";
    return summary;
}
