import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Clients from './Clients';
import Messages from './Messages';
import users from './users';
import oeecharts from './oeecharts';

export const store = () => new Vuex.Store({
	modules: {
		Clients,
		Messages,
		users,
		oeecharts
	},
	strict: process.env.NODE_ENV !== 'production'
});

