const colors = require("tailwindcss/colors");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        spinner: theme => ({
            default: {
                color: "#dae1e7", // color you want to make the spinner
                size: "1em", // size of the spinner (used for both width and height)
                border: "2px", // border-width of the spinner (shouldn't be bigger than half the spinner's size)
                speed: "500ms" // the speed at which the spinner should rotate
            }
        }),
        extend: {
            colors: {
                orange: colors.orange
            },
            width: {
                "96": "24rem"
            },
            scale: {
                "105": "1.05"
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require("tailwindcss-spinner")()]
};
