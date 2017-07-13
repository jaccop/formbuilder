import 'assets/css/font-awesome/css/font-awesome.min.css';
import 'assets/css/simple-line-icons/simple-line-icons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/bootstrap-switch/css/bootstrap-switch.min.css';
import 'assets/css/components-rounded.min.css';
import 'assets/css/plugins.min.css';
import 'assets/css/layout.min.css';
import 'assets/css/default.min.css';
import 'assets/css/custom.min.css';

import 'bootstrap';
import 'assets/js/bootstrap-switch.min.js';
import 'assets/js/js.cookie.min.js';
import 'assets/js/jquery.slimscroll.min.js';
import 'assets/js/jquery.blockui.min.js';
import 'assets/js/themesupport.js';
import 'assets/js/jquery.fileDownload.js';

import Vue from 'vue';
import App from './app.vue';

import axios from 'axios';

// see https://github.com/typekit/webfontloader
// see https://fonts.google.com/
import WebFont from 'webfontloader';

// see https://github.com/euvl/vue-js-toggle-button
import ToggleButton from 'vue-js-toggle-button';
Vue.use(ToggleButton);

WebFont.load({
	google: {
		families: ['Droid Sans', 'Roboto', 'Sansita', 'Sahitya']
	}
});

window.Vue = Vue;
Vue.prototype.$http = axios;

let vm = new Vue({
	el: '#app',
	render: h => h(App)
});

// handle calls from parent window
window.onmessage = function(e) {
	if (e.data.command === 'save_form') {
		//vm.$children[0].$refs.vueExport.saveForm(false);
		vm.$children[0].saveForm(false);
	}
}
