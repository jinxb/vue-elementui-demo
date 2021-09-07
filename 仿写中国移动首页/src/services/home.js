import request from "./request";

export function getHomeNavList() {
  return request({
    url: 'zj_head/zj/5001257_209_617.json'
  })
}


//返回一个promise  模拟真实数据
export function getNavList() {
  return []
}