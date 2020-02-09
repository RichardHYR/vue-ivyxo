export default {

    actionSetUserInfo({ commit }, userInfo){
        commit('setUserInfo', userInfo);
    },

    actionSetIsLogin({ commit }, isLogin){
        commit('setIsLogin', isLogin);
    }

}