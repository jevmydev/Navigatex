const RULES = {
    ERROR: "error",
    WARN: "warn",
    OFF: "off"
};

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: [RULES.WARN, 4],
        "linebreak-style": RULES.OFF,
        quotes: [RULES.WARN, "double"],
        semi: [RULES.WARN, "always"],
        "react/react-in-jsx-scope": RULES.OFF,
        "react/prop-types": RULES.OFF
    }
};
