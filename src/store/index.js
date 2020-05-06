import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            email: '',
            password: ''
        },
        isAuthenticated: true,

    },
    mutations: {
        applyUser(state, userInfo) {
            state.user = userInfo;
        },
        addWebToken: function (state, webToken) {
            state.user.authToken = webToken;
        },
        removeWebToken: function (state) {
            state.user.authToken = '';
        },
        m_logInUser: function (state) {
            alert(state.user);
        }
    },
    actions: {
        async login({ commit }, payload) {
            return new Promise((resolve, reject) => {
                axios({
                    url: 'http://localhost:5000/api/account/login', data: payload, method: 'POST'
                })
                    .then(resp => {
                        const token = resp.data.token

                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token

                        resolve(resp);
                        alert('store' + token);
                        commit('m_logInUser');
                    })
                    .catch(err => {

                        localStorage.removeItem('token')
                        reject(err)
                        alert(err)
                    })
            })
        },
    },
    logput: function (context) {
        //your logout functionality
        context.commit('removeWebToken');
    }
});