const OPENAI_URL = "https://api.openai.com/v1/chat/completions";
const OPENAI_OPTIONS = ({ search }) => ({
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_APIKEY}`
    },
    body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: search }],
        temperature: 0.7,
        max_tokens: 256
    })
});

export function responseIA({ search }) {
    return fetch(OPENAI_URL, OPENAI_OPTIONS({ search }))
        .then((res) => res.json())
        .then((response) => response);
}
