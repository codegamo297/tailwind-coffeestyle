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
                "product-coffee-01": "url('./images/product-coffee-01.jpg')",
                "product-coffee-02": "url('./images/product-coffee-02.jpg')",
                "product-coffee-03": "url('./images/product-coffee-03.jpg')",
                "product-coffee-04": "url('./images/product-coffee-04.jpg')",
                "product-coffee-05": "url('./images/product-coffee-05.jpg')",
                "product-coffee-06": "url('./images/product-coffee-06.jpg')",
                "product-coffee-07": "url('./images/product-coffee-07.jpg')",
                "product-coffee-08": "url('./images/product-coffee-08.jpg')",
                "product-coffee-09": "url('./images/product-coffee-09.jpg')",
            },
            margin: {
                "100px": "100px",
                "50px": "50px",
            },
            transitionDuration: {
                400: "400ms",
            },
        },
    },
    plugins: [],
};
