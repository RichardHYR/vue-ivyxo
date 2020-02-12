import { isNotNullORBlank, setStore, getStore, removeStore } from "../utils/utils";
import { checkLoginApi } from "../utils/api_url_utils";

export default {

    actionLoginOut({ commit }){
        commit('setIsLogin', false);
        removeStore('user_info');
        commit('setUserInfo', null);
    },

    actionSetUserInfo({ commit }, userInfo) {
        commit('setIsLogin', true);
        setStore('user_info', userInfo);
        commit('setUserInfo', userInfo);
    },

    actionSetIsLogin({ commit }) {
        /**
         * 1.检查是否有本地user_info
         * 2.无则isLogin = false;
         * 3.有则调用检查登录接口
         * 4.接口返回没有登录则设置isLogin = false,user_info = null
         * 5.接口返回有登录则设置isLogin = true
         */
        let userInfo = getStore("user_info");
        // console.log("刷新设置获取的user_info:" + userInfo);
        if (!isNotNullORBlank(userInfo)) {
            commit('setIsLogin', false);
            return;
        }
        userInfo = JSON.parse(userInfo);
        checkLoginApi(userInfo.id, userInfo.userSession).then(res => {
            // 获取数据成功后的其他操作
            // console.log("获取checkLoginApi接口数据" + JSON.stringify(res));
            if (res.code != 200) {
                //失败
                commit('setIsLogin', false);
                removeStore('user_info');
                commit('setUserInfo', null);
                return;
            } else {
                //成功
                commit('setIsLogin', true);
                return;
            }

        });

    },

}