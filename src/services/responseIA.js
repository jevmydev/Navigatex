const OPENAI_URL = "https://api.openai.com/v1/completions";
const OPENAI_OPTIONS = (search) => ({
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_APIKEY}`
    },
    body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Tienes que responder como si fueras ChatGPT, recibes un prompt de un usuario y respondes: \nEste es el prompt: ${search}`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    })
});

export function responseIA({ search }) {
    return fetch(OPENAI_URL, OPENAI_OPTIONS(search))
        .then((res) => res.json())
        .then((response) => response);
}
