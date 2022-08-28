
import http from '../request';
const api = {
  uploadUrl: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  znUploadUrl: 'https://test-bss-api.ziniao.com/payment/upload/file/batch'
}

export const uploadFile = (data): any => {
  console.log(data, data.getAll('file'), 9);
  
  return http({
    url: api.znUploadUrl,
    method: "POST",
    // FormData: data,
    data,
    headers: {
      'Content-Type': `multipart/form-data;boundary=----WebKitFormBoundary${new Date().getTime()}`,
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsiMTIyIiwidG9uZ193YW5nIiwiMCJdLCJzdWIiOiJ1c2VyIiwiZXhwIjoxNjYxNjcxMjM3LCJpYXQiOjE2NjE2NDk2Mzd9.i_jaXhhSjmJDDqVMAVbQeiPbhCa1iKyRyi7wMAf9CUU',
      transformRequest: [data => data]
    }
  })
}