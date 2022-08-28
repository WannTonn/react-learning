
import http from '../request';
import localStorageUtil from '../../utils/localStorageUtil';
const api = {
  uploadUrl: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  znUploadTestUrl: 'https://test-bss-api.ziniao.com',
  znUploadProdUrl: 'https://bss-api.ziniao.com',
}

const getUploadConfig = (data) => {
  let env = localStorageUtil.getLocalStorage('env');
  let token = localStorageUtil.getLocalStorage('token');
  let urlPath = localStorageUtil.getLocalStorage('urlPath');
  let url, transUrlPath;
  if (!env || !urlPath) {
    transUrlPath = ''
    url = api.znUploadTestUrl;
  } else {
    transUrlPath = urlPath?.[0] === '/' ? urlPath : '/' + urlPath;
    url = (env === '1' ? api.znUploadTestUrl : api.znUploadProdUrl) + transUrlPath;
  }
  return {
    url,
    token
  }
}
export const uploadFile = (data): any => {
  let {url, token} = getUploadConfig(data);
  return http({
    url: url,
    method: "POST",
    // FormData: data,
    data,
    headers: {
      'Content-Type': `multipart/form-data;boundary=----WebKitFormBoundary${new Date().getTime()}`,
      token,
      // 'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsiMTIyIiwidG9uZ193YW5nIiwiMCJdLCJzdWIiOiJ1c2VyIiwiZXhwIjoxNjYxNjcxMjM3LCJpYXQiOjE2NjE2NDk2Mzd9.i_jaXhhSjmJDDqVMAVbQeiPbhCa1iKyRyi7wMAf9CUU',
      transformRequest: [data => data]
    }
  })
}