'use strict'
import Vue from 'vue'
import App from './components/App'

const isDevelopment = process.env.NODE_ENV !== 'production'

Vue.config.devtools = isDevelopment
Vue.config.productionTip = !isDevelopment

new Vue({
	methods: {
		open (b) {
			require('electron').shell.openExternal(b)
		}
	},
	components: {
		App
	},
	template: `<App />`
}).$mount('#app')
