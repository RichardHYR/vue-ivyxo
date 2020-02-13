import axios from 'axios'
import {Message} from 'element-ui'
import { getStore } from "./utils";

axios.defaults.timeout =  1000 * 10 * 1;
axios.interceptors.request.use(config=> {
  let userInfo = getStore("user_info");
  config.headers.common = {
    'user_id':userInfo == null?"":JSON.parse(userInfo).id,
    'user_session':userInfo == null?"":JSON.parse(userInfo).userSession
  }
  return config;
}, err=> {
  Message.error({message: '请求超时!'});
  return Promise.resolve(err);
})
axios.interceptors.response.use(data=> {
  if (data.status && data.status == 200 && data.data.status == 'error') {
    Message.error({message: data.data.msg});
    return;
  }
  return data;
}, err=> {
  try{
    if (err.response.status == 504||err.response.status == 404) {
      Message.error({message: '服务器被吃了⊙﹏⊙∥'});
    } else if (err.response.status == 403) {
      Message.error({message: '权限不足,请联系管理员!'});
    }else {
      Message.error({message: '未知错误!'});
    }
    return Promise.resolve(err);
  }catch{
    Message.error({message: '未知错误!!'});
    return Promise.reject(err);
  }
})


let base = '';
if (process.env.NODE_ENV == 'development') {
  base = '' 
} else if (process.env.NODE_ENV == 'production') {
  base = ''
} else {
  base = ''
}

export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    // transformRequest: [function (data) {
    //   // Do whatever you want to transform the data
    //   let ret = ''
    //   for (let it in data) {
    //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //   }
    //   return ret
    // }],
    headers: {
      'Content-Type': 'application/json;charsetset=UTF-8'
    }
  }).then(Res => Res.data);
}
export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(Res => Res.data);
}
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    // transformRequest: [function (data) {
    //   let ret = ''
    //   for (let it in data) {
    //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //   }
    //   return ret
    // }],
    headers: {
      'Content-Type': 'application/json;charsetset=UTF-8'
    }
  }).then(Res => Res.data);
}
export const deleteRequest = (url) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`
  }).then(Res => Res.data);
}
export const getRequest = (url,params) => {
  return axios({
    method: 'get',
    data:params,
    // transformRequest: [function (data) {
    //   let ret = ''
    //   for (let it in data) {
    //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //   }
    //   return ret
    // }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: `${base}${url}`
  }).then(Res => Res.data);
}
