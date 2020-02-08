import 'bootstrap'
import axios from 'axios'
import lodash from 'lodash'
import popper from 'popper.js'
import widgetLoaders from '../../runtime/loader'

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.widget = widgetLoaders;
window._ = lodash;

try {
	window.Popper = popper.default
} catch (e) { console.log(e) }

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
