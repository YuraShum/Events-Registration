/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#363558",
                custom: "#fbfbfb",
                hovered: "#7c7cac",
                link: '#e28743',
                back: '#26253d'
            },
        },
    },
    plugins: [],
}