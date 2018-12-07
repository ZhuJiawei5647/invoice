// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import {
	Col,
	Row,
	Container,
	Header,
	Footer,
	Aside,
	Main,
	Form,
	FormItem,
	Input,
	Button,
	Table,
	TableColumn,
	Popover,
	Loading,
	Message,
	Menu,
	Submenu,
	MenuItem,
	MenuItemGroup,
	Pagination,
	RadioGroup,
	Radio,
	Dialog,
	MessageBox,
	DatePicker
} from 'element-ui';

Vue.config.productionTip = false
Vue.use(Col)
Vue.use(Row)
Vue.use(Container)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Menu),
Vue.use(Submenu),
Vue.use(MenuItem),
Vue.use(MenuItemGroup)
Vue.use(Pagination)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Dialog)
Vue.use(DatePicker)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
