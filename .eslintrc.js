module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jquery: true
	},
	extends: ['eslint:recommended', 'plugin:vue/recommended'],
	rules: {
		'linebreak-style': [
			'error',
			'unix'
		],
		quotes: [
			'warn',
			'single'
		],
		'no-mixed-spaces-and-tabs': [
			'error',
			'smart-tabs'
		],
		'no-unused-vars': [
			'error',
			{ 'vars': 'all', 'args': 'none' }
		],
		indent: 'off',
		'vue/script-indent': 'off',
		'no-empty': ['error', { 'allowEmptyCatch': true }],
		'no-console': 'off',
		'no-trailing-spaces': 'error',
		semi: ['error', 'always'],
		eqeqeq: ['error', 'always'],
		'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
		'func-call-spacing': ['error', 'never'],
		'space-before-function-paren': ['error', 'always'],
		'space-in-parens': ['error', 'never'],
		'comma-dangle': ['error', 'never'],
		'object-curly-spacing': ['error', 'always'],
		'vue/object-curly-spacing' : ['error', 'always'],
		'array-bracket-spacing': ['error', 'never'],
		'max-len': ['error', { 'code': 140 }],
		'vue/no-template-shadow': ['error', 'alawys'],
		'vue/this-in-template': ['error', 'never'],
		'vue/require-prop-types': ['error', 'always'],
		'vue/html-self-closing': ['error', 'always'],
		'vue/max-attributes-per-line': ['error', {
			singleline: 2,
			multiline: {
				max: 1,
				allowFirstLine: false
			}
		}],
		'vue/singleline-html-element-content-newline': 'off',
		'vue/html-indent': ['error', 'tab'],
		'vue/attributes-order': ['error', 'always'],
		'vue/require-default-prop': ['error', 'always']
	},
	globals: {
		fbq: true
	}
};
