/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"]
            },
            screens: {
                desk: "480px",
                mb: "310px"
            }
        }
    },
    plugins: []
};
