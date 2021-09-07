const devBaseURL = "/api";
//http://www.10086.cn/web-Center/commonservice/get_app_recommendation_info.do?wjBCSKjf=5GTp0c9OnJ_jKCl1_l81hv6Sz4p6Ag36k8MBPZzcX4qeFFo3rW3VWMHKOINKF6Ek猜你喜欢
const proBaseURL = "";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 10000;
