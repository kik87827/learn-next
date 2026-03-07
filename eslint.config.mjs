import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
	...nextVitals,
	prettierRecommended,
	{
		rules: {
			'no-undef': 'error',
			// 프리티어 설정
			'prettier/prettier': [
				'error',
				// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
				// https://prettier.io/docs/en/options.html
				{
					singleQuote: true,
					semi: true,
					useTabs: true,
					tabWidth: 2,
					trailingComma: 'all',
					printWidth: 80,
					bracketSpacing: true,
					arrowParens: 'avoid',
				},
			],
		},
	},

	globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
