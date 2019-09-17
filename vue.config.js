module.exports = {
	pages: {
		'popup/popup': {
			entry: 'src/main.js',
			title: 'VoxImplant Chrome Extension',
			template: 'src/popup/popup.html'
		}
	},
	css: {
		extract: false
	},
	productionSourceMap: true,
	pluginOptions: {
		browserExtension: {
			registry: undefined,
			components: {
				popup: true
			},
			api: 'chrome'
		}
	}
};
