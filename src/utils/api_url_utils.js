import { postRequest,uploadFileRequest,putRequest,deleteRequest,getRequest } from "../utils/api";
// import { getRequest,postRequest,deleteRequest } from "../utils/api";

export const loginApi = (accout,psw) => getRequest(`/apis/v1/login/${accout}/${psw}`);

export const registerApi = (params) => postRequest(`/apis/v1/register`,params);

export const checkLoginApi = (userId,userSession) => postRequest(`/apis/config/checkLogin?userId=${userId}&userSession=${userSession}`);

export const loginOutApi = () => deleteRequest(`/apis/v1/loginOut`);

export const infoApi = () => getRequest(`/apis/config/info`);

export const notePageApi = (page, pageSize, search = '') => getRequest(`/apis/v1/note/page?page=${page}&pageSize=${pageSize}&search=${search}`);

export const noteAddApi = (params) => postRequest(`/apis/v1/note`,params);

export const noteDeleteApi = (id) => deleteRequest(`/apis/v1/note/${id}`);

export const noteUpdateApi = (id, params) => putRequest(`/apis/v1/note/${id}`, params);

export const noteGetApi = (id) => getRequest(`/apis/v1/note/${id}`);
