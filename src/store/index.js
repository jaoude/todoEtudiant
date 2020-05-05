import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: '',
        isAuthenticated: true,

    },
    mutations: {
        applyUser(state, userInfo) {
            state.user = userInfo;
        },
    },
});