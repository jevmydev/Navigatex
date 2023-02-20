/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"]
            }
        }
    },
    plugins: []
};
