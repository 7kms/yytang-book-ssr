import * as types from './mutation-types';
// import $api from 'api'

var state = {
    info: {}
};

const actions = {
    [types.SET_INFO]({ commit, dispatch }, user) {
         commit(types.SET_INFO, user);
    }
};

const mutations = {
    [types.SET_INFO](state, user) {
        state.info = { ...user };
    }
};

export default {
    state,
    actions,
    mutations
}