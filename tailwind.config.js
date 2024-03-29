/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Karla: ["Karla", "sans-serif"],
            },
            colors: {
                coffee: {
                    50: "#E8D6D0",
                    200: "#C89F94",
                    400: "#A25F4B",
                    600: "#744838",
                },
            },
            keyframes: {
                slideDown: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(0%)" },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
            },
            animation: {
                slideDown: "slideDown 0.4s ease-in-out",
                fadeIn: "fadeIn 0.4s ease-in-out",
            },
            backgroundImage: {
                "slider-bg": "url('./images/bg-slider.jpg')",
                "featured-mug-01": "url('./images/featured-mug-01.jpg')",
                "featured-mug-02": "url('./images/featured-mug-02.jpg')",
            },
            margin: {
                "100px": "100px",
            },
            transitionDuration: {
                400: "400ms",
            },
        },
    },
    plugins: [],
};
