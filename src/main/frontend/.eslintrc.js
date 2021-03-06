module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'react-app',
        'plugin:prettier/recommended',
        'eslint:recommended',
        'prettier/react',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': 0,
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
};
