import * as types from './mutation-types';
// import $api from 'api'

var state = {
    list: []
};

const actions = {
    [types.GET_LIST]({ commit, dispatch }) {
        return new Promise((resolve, reject) => {
            const arr = [{ a: 1 }, { a: 2 }, { a: 3 }];
            commit(types.APPEND_LIST, arr);
            resolve(arr);
        });
    },
    [types.RESET_LIST]({ commit }) {
        commit(types.APPEND_LIST);
    }
};

const mutations = {
    [types.APPEND_LIST](state, list) {
        state.list = [...list];
    }
};

export default {
    state,
    actions,
    mutations
}