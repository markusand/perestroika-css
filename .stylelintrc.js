module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-rational-order',
	],
	plugins: [
		'stylelint-scss',
		'stylelint-order',
		'stylelint-config-rational-order/plugin',
	],
	rules: {
		indentation: 'tab',
		'order/properties-order': [],
		'plugin/rational-order': [true, {
      'border-in-box-model': false,
      'empty-line-between-groups': false,
    }],
		'no-descending-specificity': null,
		'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
	},
};
