import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {},
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
                commit('auth_request'),

                    axios({
                        url: 'http://localhost:5000/api/account/login', data: payload, method: 'POST'
                    })
                        .then(resp => {
                            const token = resp.data.token
                            const user = resp.data.user
                            localStorage.setItem('token', token)
                            axios.defaults.headers.common['Authorization'] = token
                            commit('auth_success', token, user)
                            resolve(resp)
                            alert('store' + token);
                        })
                        .catch(err => {
                            commit('auth_error')
                            localStorage.removeItem('token')
                            reject(err)
                            alert(err)
                        })
            })
        },
    },
    logout: function (context) {
        //your logout functionality
        context.commit('removeWebToken');
    }
});