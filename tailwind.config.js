const colors = require("tailwindcss/colors");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
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
    plugins: []
};
