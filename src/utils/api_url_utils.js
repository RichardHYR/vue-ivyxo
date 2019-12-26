// import { postRequest,uploadFileRequest,putRequest,deleteRequest,getRequest } from "../utils/api";
import { getRequest,postRequest,deleteRequest } from "../utils/api";

export const loginApi = (accout,psw) => getRequest(`/apis/v1/login/${accout}/${psw}`);

export const registerApi = (params) => postRequest(`/apis/v1/register`,params);

export const checkLoginApi = (userId,userSession) => postRequest(`/apis/config/checkLogin?userId=${userId}&userSession=${userSession}`);

export const loginOutApi = () => deleteRequest(`/apis/v1/loginOut`);

export const infoApi = () => getRequest(`/apis/config/info`);
