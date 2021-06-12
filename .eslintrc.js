module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended'
	],
	plugins: ['simple-import-sort'],
	env: {
		browser: true,
		es2020: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'prettier/prettier': ['error', {}, { usePrettierrc: true }],
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton']
			}
		]
	},
	settings: {
		react: {
			version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
		}
	}
};
