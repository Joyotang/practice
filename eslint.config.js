import eslintConfig from '@antfu/eslint-config';

export default eslintConfig({
    stylistic: {
        indent: 4,
        quotes: 'double',
        semi: true,
    },
    typescript: true,
    rules: {
        curly: ['error', 'all'],
        'style/brace-style': ['error', '1tbs'],
        'style/arrow-parens': ['error', 'always'],
        'antfu/top-level-function': ['off'],
        'ts/consistent-type-definitions': ['error', 'type'],
        'if-newline': ['error', 'consistent'],

        'no-console': 'off',
        'prefer-const': 'off',
    },
});
