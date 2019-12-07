// import { postRequest,uploadFileRequest,putRequest,deleteRequest,getRequest } from "../utils/api";
import { getRequest } from "../utils/api";

// http://localhost:8090/dev/v1/login/15018226581/123456
export const login = (accout,psw) => getRequest(`/apis/v1/login/${accout}/${psw}`);
