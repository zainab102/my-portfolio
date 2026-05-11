import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'],
  },
  {
    rules: {
      // Portfolio copy uses quotes and apostrophes in JSX; escaping hurts readability.
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default eslintConfig;
