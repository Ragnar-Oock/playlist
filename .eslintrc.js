module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true
	},
	extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
	plugins: ['vue'],
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	rules: {
		'prefer-template': 'warn',
		'template-curly-spacing': ['warn', 'always'],
		'no-multi-spaces': ['warn', { ignoreEOLComments: true }],
		curly: 'warn',
		'dot-location': ['warn', 'property'],
		'no-empty-function': 'warn',
		'no-extend-native': 'warn',
		'no-extra-bind': 'warn',
		'no-script-url': 'warn',
		'no-self-compare': 'warn',
		'no-unused-expressions': 'warn',
		'no-useless-return': 'warn',
		yoda: 'warn',
		strict: 'warn',
		'no-shadow': 'warn',
		'block-spacing': 'warn',
		'brace-style': ['warn', 'stroustrup'],
		camelcase: 'warn',
		'comma-dangle': ['warn', 'never'],
		'comma-spacing': ['warn', { before: false, after: true }],
		'comma-style': ['warn', 'last'],
		'func-call-spacing': 'warn',
		'func-style': ['warn', 'declaration'],
		'id-length': ['warn', { min: 1, max: 30 }],
		'lines-between-class-members': ['warn', 'always'],
		'new-cap': 'warn',
		'new-parens': 'warn',
		'no-mixed-operators': ['warn', { groups: [['&&', '||']] }],
		'no-nested-ternary': 'warn',
		'no-unneeded-ternary': 'warn',
		'no-trailing-spaces': 'warn',
		'object-curly-spacing': ['warn', 'always'],
		semi: ['warn', 'always'],
		'semi-spacing': 'warn',
		'semi-style': ['warn', 'last'],
		'space-before-blocks': 'warn',
		'space-in-parens': ['warn', 'never'],
		'space-infix-ops': 'warn',
		'space-unary-ops': 'warn',
		'spaced-comment': ['warn', 'always'],
		'switch-colon-spacing': ['warn', { before: false, after: false }],
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['warn', 'as-needed'],
		'arrow-spacing': 'warn',
		'no-confusing-arrow': 'warn',
		'no-useless-computed-key': 'warn',
		'no-useless-rename': 'warn',
		'no-useless-concat': 'warn',
		'prefer-const': 'warn',
		quotes: ['warn', 'single', { avoidEscape: true }],
		'no-unused-vars': 'warn',
		'padding-line-between-statements': [
			'warn',
			{ blankLine: 'always', prev: 'multiline-block-like', next: '*' },
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var']
			}
		],
		indent: ['warn', 'tab', { SwitchCase: 1 }],
		// 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		// Vue
		'vue/html-indent': ['warn', 'tab'],
		'vue/no-unused-components':
			process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'vue/custom-event-name-casing': 'off'
	}
};
