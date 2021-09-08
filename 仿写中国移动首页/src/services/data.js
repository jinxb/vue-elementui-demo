// 模拟数据
// HomeHead
const searchDate = [
  { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
  {
    value: "Hot honey 首尔炸鸡（仙霞路）",
    address: "上海市长宁区淞虹路661号",
  },
  {
    value: "新旺角茶餐厅",
    address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
  },
  { value: "泷千家(天山西路店)", address: "天山西路438号" },
  {
    value: "胖仙女纸杯蛋糕（上海凌空店）",
    address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101",
  },
  { value: "贡茶", address: "上海市长宁区金钟路633号" },
  {
    value: "豪大大香鸡排超级奶爸",
    address: "上海市嘉定区曹安公路曹安路1685号",
  },
  {
    value: "茶芝兰（奶茶，手抓饼）",
    address: "上海市普陀区同普路1435号",
  },
  { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
  { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
  { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
  { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
  {
    value: "Monica摩托主题咖啡店",
    address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F",
  },
  {
    value: "浮生若茶（凌空soho店）",
    address: "上海长宁区金钟路968号9号楼地下一层",
  },
  { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
  { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
  {
    value: "快乐柠檬（神州智慧店）",
    address: "上海市长宁区天山西路567号1层R117号店铺",
  },
  {
    value: "Merci Paul cafe",
    address: "上海市普陀区光复西路丹巴路28弄6号楼819",
  },
  {
    value: "猫山王（西郊百联店）",
    address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306",
  },
  { value: "枪会山", address: "上海市普陀区棕榈路" },
  { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
  { value: "钱记", address: "上海市长宁区天山西路" },
  { value: "壹杯加", address: "上海市长宁区通协路" },
  {
    value: "唦哇嘀咖",
    address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元",
  },
  { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
  {
    value: "爱茜茜里(近铁广场)",
    address:
      "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺",
  },
  {
    value: "鲜果榨汁（金沙江路和美广店）",
    address: "普陀区金沙江路2239号金沙和美广场B1-10-6",
  },
  {
    value: "开心丽果（缤谷店）",
    address: "上海市长宁区威宁路天山路341号",
  },
  { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
  { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
  { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
  {
    value: "凡仔汉堡（老真北路店）",
    address: "上海市普陀区老真北路160号",
  },
  { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
  { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
  { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
  {
    value: "饭典*新简餐（凌空SOHO店）",
    address: "上海市长宁区金钟路968号9号楼地下一层9-83室",
  },
  {
    value: "焦耳·川式快餐（金钟路店）",
    address: "上海市金钟路633号地下一层甲部",
  },
  { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
  { value: "浏阳蒸菜", address: "天山西路430号" },
  { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
  {
    value: "樱花食堂（凌空店）",
    address: "上海市长宁区金钟路968号15楼15-105室",
  },
  { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
  {
    value: "福荣祥烧腊（平溪路店）",
    address: "上海市长宁区协和路福泉路255弄57-73号",
  },
  {
    value: "速记黄焖鸡米饭",
    address: "上海市长宁区北新泾街道金钟路180号1层01号摊位",
  },
  { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
  {
    value: "(小杨生煎)西郊百联餐厅",
    address: "长宁区仙霞西路88号百联2楼",
  },
  { value: "阳阳麻辣烫", address: "天山西路389号" },
  {
    value: "南拳妈妈龙虾盖浇饭",
    address: "普陀区金沙江路1699号鑫乐惠美食广场A13",
  },
]
const tipList = [
  "5G正式商用",
  "信用购机",
  "5G智享套餐",
  "选号入网",
  "流量可选包",
  "彩铃",
]
const navInfo = ['全部产品服务', '首页', '移动商城', '网上营业厅', '我的移动', '服务中心']


// HomeSwiper
const banners = ['sw_1.jpg', 'sw_2.jpg', 'sw_3.jpg', 'sw_4.jpg', 'sw_5.jpg', 'sw_6.jpg']

const busiBtns = ["办业务", "买手机", "套餐/靓号", "家庭业务", "智能硬件", "查询服务", "特色专区"]

const boxData = {
  b1: {
    boxList: [
      { busiLabel: "主套餐", details: ["飞享套餐", "更多"] },
      { busiLabel: "流量业务", details: ["流量可选包", "更多"] },
      {
        busiLabel: "家庭业务",
        details: ["亲情网自付版", "亲情网统付版", "更多"],
      },
      {
        busiLabel: "国际/港澳台",
        details: [
          "开通漫游功能",
          "一带一路多国流量",
          "欧洲多国流量包",
          "更多",
        ],
      },
      {
        busiLabel: "基础服务",
        details: ["和多号", "携号入网", "归属地查询", "国际/港澳台短信"],
      },
      {
        busiLabel: "生活&娱乐",
        details: ["咪咕圈圈", "咪咕音乐", "彩铃", "更多"],
      },
      { busiLabel: "优惠活动", details: ["更多"] },
    ],
    gImage: ''
  },
  b2: {
    boxList: [
      { busiLabel: "热点关注", details: ["华为 畅享7", "华为 荣耀畅玩6", "Redmi Note10", "iPhone 12", "更多"] },
      { busiLabel: "经典品牌", details: ["海尔", "荣耀", "联想", "美图", "锤子", "酷派", "诺基亚", "小米", "更多"] },
      {
        busiLabel: "价位段",
        details: ["3000以上", "2000-2999", "1000-1999", "700-999", "300-699", "0-299", "更多"],
      },
      {
        busiLabel: "屏幕尺寸",
        details: [
          "5.6英寸以上",
          "5.0-5.6英寸",
          "4.1-4.9英寸",
          "3.0-4.0英寸",
          "3.0英寸以下",
          "更多"
        ],
      },
      {
        busiLabel: "热门机型",
        details: ["iPhone 12 Pro", "小米11 青春版", "华为Mate40 Pro", "三星Galaxy F52", "更多"],
      },
      {
        busiLabel: "精品推荐",
        details: ["moto g50", "OPPO A55", "更多"],
      },
    ],
    gImage: ''
  },
  b3: {
    boxList: [
      { busiLabel: "号段", details: ["188", "187", "184", "183", "182", "178", "159", "158", "157", "152", "151", "150", "147", "139", "138", "137", "136", "135", "134", "更多"] },
      { busiLabel: "尾号规则", details: ["尾号ABAC", "尾号ABCD", "尾号AAAA", "尾号ABAB", "尾号ABBA", "尾号AAAB", "尾号AABB", "更多"] },
      {
        busiLabel: "谐音选号",
        details: ["一往情深1573", "我要发518", "要发要发6868", "一路发168", "六六大顺666", "发发发888", "生生世世3344", "我爱你520", "一生一世1314", "更多"],
      },
      {
        busiLabel: "套餐",
        details: ["飞享套餐", "更多"],
      }
    ],
    gImage: ''
  },
  b4: {
    boxList: [
      { busiLabel: "宽带办理", details: ["宽带新装", "宽带续包", "更多"] },
      { busiLabel: "带宽", details: ["宽带常见故障处理"] },
      {
        busiLabel: "宽带服务",
        details: ["宽带密码修改"],
      },
      {
        busiLabel: "家庭尊享",
        details: [
          "全国亲情网"
        ]
      }
    ],
    gImage: ''
  },
  b5: {
    boxList: [
      { busiLabel: "热门推荐", details: ["中国移动儿童手表", "乐心手环", "和目C13C摄像头"] },
      { busiLabel: "品牌", details: ["三星", "华为 畅享7", "华为 荣耀畅玩6", "Redmi Note10", "iPhone 12", "更多"] },
      {
        busiLabel: "手机配件",
        details: ["中国移动儿童手表", "亲情网统付版", "乐心手环", "和目C13C摄像头", "乐心手环", "和目C13C摄像头", "更多"],
      },
      {
        busiLabel: "智能设备",
        details: [
          "家用摄像头",
          "智能早教机器人",
          "行车记录仪",
          "家用摄像头",
          "智能早教机器人",
          "行车记录仪",
          "更多",
        ]
      }
    ],
    gImage: 'gg_1.jpg'
  },
  b6: {
    boxList: [
      { busiLabel: "主套餐", details: ["飞享套餐", "更多"] },
      { busiLabel: "流量业务", details: ["流量可选包", "更多"] },
      {
        busiLabel: "家庭业务",
        details: ["亲情网自付版", "亲情网统付版", "更多"],
      },
      {
        busiLabel: "国际/港澳台",
        details: [
          "开通漫游功能",
          "一带一路多国流量",
          "欧洲多国流量包",
          "更多",
        ],
      },
      {
        busiLabel: "基础服务",
        details: ["和多号", "携号入网", "归属地查询", "国际/港澳台短信"],
      },
      {
        busiLabel: "生活&娱乐",
        details: ["咪咕圈圈", "咪咕音乐", "彩铃", "更多"],
      },
      { busiLabel: "优惠活动", details: ["更多"] },
    ],
    gImage: ''
  },
  b7: {
    boxList: [
      { busiLabel: "优惠专区", details: ["华为 P40", "更多"] },
      { busiLabel: "4G专区", details: ["4G手机", "4G套餐", "4G换卡", "4G知识", "更多"] },
      {
        busiLabel: "家庭网",
        details: ["亲情网自付版", "宽带办理"],
      },
      {
        busiLabel: "国际/港澳台",
        details: [
          "开通漫游功能",
          "一带一路多国流量",
          "欧洲多国流量包",
          "更多",
        ],
      },
      {
        busiLabel: "基础服务",
        details: ["和多号", "携号入网", "归属地查询", "国际/港澳台短信"],
      },
      {
        busiLabel: "生活&娱乐",
        details: ["咪咕圈圈", "咪咕音乐", "彩铃", "更多"],
      },
      { busiLabel: "咪咕专区", details: ["咪咕游戏", "咪咕圈圈", "咪咕音乐", "咪咕阅读", "更多"] },
    ],
    gImage: 'gg_2.png'
  }
}

const funData = {
  funList: [
    "话费查询",
    "流量查询",
    "国际/港澳台",
    "积分兑换",
    "优惠专区",
    "业务办理"],
  pricesInfo: ["30元", "50元", "100元", "300元", "其他"],
  fluxInfo: ["1G","2G","3G","5G","100G"]
}
export {
  searchDate,
  tipList,
  navInfo,
  banners,
  busiBtns,
  boxData,
  funData
}