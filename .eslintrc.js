module.exports = {
    "rules": {
        "no-console": 0,
        // best practices
        "eqeqeq": [
            2,
            "allow-null"
        ],
        "no-implicit-coercion": [
            2
        ],
        // style
        "indent": [
            0
        ],
        //"linebreak-style": [
        //    2,
        //    "unix"
        //],
        "quotes": [
            2,
            "double"
        ],
        "semi": [
            2,
            "always"
        ],
        // ECMAScript 6
        "arrow-spacing": [
            2
        ],
        "arrow-parens": [
            2
        ],
        "no-const-assign": [
            2
        ],
        "no-var": [
            2
        ],
        "no-unused-vars": [
            1, {
                "vars": "all",
                "args": "all", "argsIgnorePattern": "^_."
            }
        ],
        "object-shorthand": [
            2,
            "always"
        ],
        "prefer-arrow-callback": [
            1
        ]
    },
    "extends": ["angular","eslint:recommended"],
    "env": {
        "es6": true
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true
        }
    },
    plugins: [
        "angular"
    ]
};
