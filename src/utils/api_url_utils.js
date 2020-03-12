import { postRequest,uploadFileRequest,putRequest,deleteRequest,getRequest } from "../utils/api";
import { isNotNullORBlank, getStore } from "../utils/utils";

export const loginApi = (accout,psw) => getRequest(`/apis/v1/login/${accout}/${psw}`);

export const registerApi = (params) => postRequest(`/apis/v1/register`,params);

export const userUpdateApi = (params) => {
    params.type = 1;
    let userInfo = getStore("user_info");
    if(!isNotNullORBlank(userInfo)){
        return Promise.reject();
    }
    let userInfoJson = JSON.parse(userInfo);
    return putRequest(`/apis/v1/user/${userInfoJson.userSession}`, params);
}

export const userUpdatePasswordApi = (params) => {
    params.type = 2;
    let userInfo = getStore("user_info");
    if(!isNotNullORBlank(userInfo)){
        return Promise.reject();
    }
    let userInfoJson = JSON.parse(userInfo);
    return putRequest(`/apis/v1/user/${userInfoJson.userSession}`, params);
}
    
export const checkLoginApi = (userId, userSession) => postRequest(`/apis/config/checkLogin?userId=${userId}&userSession=${userSession}`);

export const userInfoApi = () => {
    let userInfo = getStore("user_info");
    if(!isNotNullORBlank(userInfo)){
        return;
    }
    let userInfoJson = JSON.parse(userInfo);
    return getRequest(`/apis/v1/user/${userInfoJson.id}`);
};

export const userSettingInfoApi = () => {
    let userInfo = getStore("user_info");
    if(!isNotNullORBlank(userInfo)){
        return;
    }
    let userInfoJson = JSON.parse(userInfo);
    return getRequest(`/apis/v1/user/setting/${userInfoJson.id}`);
};

export const loginOutApi = () => deleteRequest(`/apis/v1/loginOut`);

export const infoApi = () => getRequest(`/apis/config/info`);

export const notePageApi = (page, pageSize, search = '') => getRequest(`/apis/v1/note/page?page=${page}&pageSize=${pageSize}&search=${search}`);

export const noteAddApi = (params) => postRequest(`/apis/v1/note`,params);

export const noteDeleteApi = (id) => deleteRequest(`/apis/v1/note/${id}`);

export const noteUpdateApi = (id, params) => putRequest(`/apis/v1/note/${id}`, params);

export const noteGetApi = (id) => getRequest(`/apis/v1/note/${id}`);
