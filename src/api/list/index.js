/*
 * @Author: WannTonn
 * @Date: 2021-07-04 12:28:09
 * @Description: 
 * @FilePath: /net-music/src/api/list/index.js
 */
import http from "@/api/request";
const api = {
  list: "search/get/web"
}
export function getMusicList(params) {
  return http({
    url: api.list,
    method: "GET",
    params
  })
}