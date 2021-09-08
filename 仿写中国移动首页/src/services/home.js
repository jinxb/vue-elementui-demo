import request from "./request";
import { searchDate, tipList, navInfo, banners, busiBtns, boxData, funData} from './data'


class HomeApi {
  getHomeNavList() {
    return request({
      url: 'zj_head/zj/5001257_209_617.json'
    })
  }
  // search
  getSearchInfo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ searchDate, tipList })
      }, 2000)
    })
  }
  // tabcontrol
  getNavconInfo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ navInfo })
      }, 500)
    })
  }
  // swiper
  getNavBannerInfo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ banners })
      }, 500)
    })
  }
  getNavBusiBtnInfo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ busiBtns })
      }, 200)
    })
  }
  getBoxDataInfo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ boxData })
      }, 500)
    })
  }
  getFunDataInfo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ funData })
      }, 500)
    })
  }
}


export default new HomeApi()