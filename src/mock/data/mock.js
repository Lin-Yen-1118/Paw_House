import address from '@/json/address.json'

const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios)

// Mock any GET request to /users
// arguments for reply are (status, data, headers)

mock.onGet(`${process.env.VUE_APP_BASE_URL}/dogs`).reply(200, {
  dogs: [
    {
      Serial_number: '汪零壹',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 3,
      Birth_control_status: '',
      Health_status: '',
      Describe: '吃貨一枚',
      imgUrl: '001.jpg'
    },
    {
      Serial_number: '汪零貳',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 3,
      Birth_control_status: '',
      Health_status: '',
      Describe: '活潑貪吃',
      imgUrl: '002.jpg'
    },
    {
      Serial_number: '汪零參',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 4,
      Birth_control_status: '已節育',
      ' Health_status': '有指間炎',
      Describe: '喜歡發呆、睡覺',
      imgUrl: '003.jpg'
    },
    {
      Serial_number: '汪零肆',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 3,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '很貪吃，精力旺盛',
      imgUrl: '004.jpg'
    },
    {
      Serial_number: '汪零伍',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '警戒心高、膽小',
      imgUrl: '005.jpg'
    },
    {
      Serial_number: '汪零陸',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '超級黏人',
      imgUrl: '006.jpg'
    },
    {
      Serial_number: '汪零柒',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '愛翻肚肚討摸摸，很乖巧',
      imgUrl: '007.jpg'
    },
    {
      Serial_number: '汪零巴',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 4,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '很沉穩內斂的孩子',
      imgUrl: '008.jpg'
    },
    {
      Serial_number: '汪零玖',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '活潑愛叫，喜歡到處咬',
      imgUrl: '009.jpg'
    },
    {
      Serial_number: '汪伊零',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '外冷內熱，喜歡玩球',
      imgUrl: '010.jpg'
    },
    {
      Serial_number: '汪伊伊',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 3,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '憂鬱小生一枚，喜歡吃肉乾',
      imgUrl: '011.jpg'
    },
    {
      Serial_number: '汪伊二',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '活潑陽光大男孩，喜歡玩接球遊戲',
      imgUrl: '012.jpg'
    },
    {
      Serial_number: '汪伊杉',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 3,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '大暖男，喜歡刨土玩水',
      imgUrl: '013.jpg'
    },

    {
      Serial_number: '汪伊賜',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '有分離焦慮症',
      Describe: '貪吃又黏人，缺乏安全感',
      imgUrl: '014.jpg'
    },
    {
      Serial_number: '汪伊武',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '喜歡到處探索，到處交朋友',
      imgUrl: '015.jpg'
    },
    {
      Serial_number: '汪一路',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 3,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '很貪吃，精力旺盛',
      imgUrl: '016.jpg'
    },
    {
      Serial_number: '汪石七',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '沉穩，很懂察言觀色',
      imgUrl: '017.jpg'
    },
    {
      Serial_number: '汪石巴',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '超級黏人，喜歡娃娃',
      imgUrl: '018.jpg'
    },
    {
      Serial_number: '汪石玖',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '很喜歡到處破壞',
      imgUrl: '019.jpg'
    },
    {
      Serial_number: '汪二實',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '很喜歡唱歌',
      imgUrl: '020.jpg'
    },
    {
      Serial_number: '汪二一',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '活潑愛叫，喜歡到處咬',
      imgUrl: '021.jpg'
    },
    {
      Serial_number: '汪雙二',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '喜歡熱情飛撲伺候，玩球',
      imgUrl: '022.jpg'
    },
    {
      Serial_number: '汪二叁',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '外表凍齡，對聲音較敏感',
      imgUrl: '023.jpg'
    },
    {
      Serial_number: '汪二賜',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '活潑陽光，無敵破壞王',
      imgUrl: '024.jpg'
    },
    {
      Serial_number: '汪二伍',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 3,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '大暖男，喜歡刨土玩水',
      imgUrl: '025.jpg'
    },
    {
      Serial_number: '汪二路',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '有分離焦慮症',
      Describe: '貪吃又黏人，缺乏安全感',
      imgUrl: '026.jpg'
    }
  ]
})

mock.onGet(`${process.env.VUE_APP_BASE_URL}/cats`).reply(200, {
  cats: [
    {
      Serial_number: '喵零壹',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '吃貨一枚，愛玩',
      imgUrl: '001.jpg'
    },
    {
      Serial_number: '喵零貳',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '活潑、喜歡玩逗貓棒吃',
      imgUrl: '002.jpg'
    },
    {
      Serial_number: '喵零參',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '局部皮膚發炎',
      Describe: '喜歡咬任何會動的東西',
      imgUrl: '003.jpg'
    },
    {
      Serial_number: '喵零肆',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 3,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '很貪吃，黏人',
      imgUrl: '004.jpg'
    },
    {
      Serial_number: '喵零伍',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '較膽小，愛吃肉泥',
      imgUrl: '005.jpg'
    },
    {
      Serial_number: '喵零陸',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '傲嬌，貓心難測',
      imgUrl: '006.jpg'
    },
    {
      Serial_number: '貓零柒',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '愛撒嬌蹭蹭，愛講話',
      imgUrl: '007.jpg'
    },
    {
      Serial_number: '貓歐巴',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 3,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '優雅高貴',
      imgUrl: '008.jpg'
    },
    {
      Serial_number: '喵零玖',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 3,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '活潑愛叫，好奇心旺盛',
      imgUrl: '009.jpg'
    },
    {
      Serial_number: '喵伊零',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '喜歡曬太陽、抓蟲，會給你很多驚喜(驚嚇)',
      imgUrl: '010.jpg'
    },
    {
      Serial_number: '喵伊伊',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '挑食、愛講話、跟屁蟲',
      imgUrl: '011.jpg'
    },
    {
      Serial_number: '喵伊二',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '沉穩內斂，安靜又親人',
      imgUrl: '012.jpg'
    },
    {
      Serial_number: '喵壹杉',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '酷酷的吃貨一枚',
      imgUrl: '013.jpg'
    },
    {
      Serial_number: '喵一賜',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '活潑、喜歡玩逗貓棒',
      imgUrl: '014.jpg'
    },
    {
      Serial_number: '喵壹伍',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '局部皮膚發炎',
      Describe: '喜歡咬任何會動的東西',
      imgUrl: '015.jpg'
    },
    {
      Serial_number: '喵一陸',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 3,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '很貪吃，黏人',
      imgUrl: '016.jpg'
    },
    {
      Serial_number: '喵一柒',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '較膽小，愛吃肉泥',
      imgUrl: '017.jpg'
    },
    {
      Serial_number: '喵伊八',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '傲嬌，貓心難測',
      imgUrl: '018.jpg'
    },
    {
      Serial_number: '貓伊玖',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '愛撒嬌蹭蹭，愛講話',
      imgUrl: '019.jpg'
    },
    {
      Serial_number: '貓貳鈴',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 3,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '優雅高貴',
      imgUrl: '020.jpg'
    },
    {
      Serial_number: '喵貳伊',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 3,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '活潑愛叫，好奇心旺盛',
      imgUrl: '021.jpg'
    },
    {
      Serial_number: '喵二貳',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '喜歡曬太陽、抓蟲蟲',
      imgUrl: '022.jpg'
    },
    {
      Serial_number: '喵二山',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '調皮搗蛋、跟屁蟲',
      imgUrl: '023.jpg'
    },
    {
      Serial_number: '喵二賜',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '沉穩內斂，安靜又親人',
      imgUrl: '024.jpg'
    }
  ]
})

mock.onGet(`${process.env.VUE_APP_BASE_URL}/rabbits`).reply(200, {
  rabbits: [
    {
      Serial_number: '兔零壹',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '很活潑、貪吃',
      imgUrl: '001.jpg'
    },

    {
      Serial_number: '兔零貳',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '喜歡梳毛、躺草堆睡覺',
      imgUrl: '002.jpg'
    },
    {
      Serial_number: '兔零參',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '很呆萌，很喜歡到處探索',
      imgUrl: '003.jpg'
    },
    {
      Serial_number: '兔零肆',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '只要有食物牠都ok',
      imgUrl: '004.jpg'
    },
    {
      Serial_number: '兔零伍',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '警戒心高、膽小',
      imgUrl: '005.jpg'
    },
    {
      Serial_number: '兔零陸',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '超級黏人、喜歡人陪',
      imgUrl: '006.jpg'
    },
    {
      Serial_number: '兔零柒',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '很喜歡出門溜搭',
      imgUrl: '007.jpg'
    },
    {
      Serial_number: '兔零巴',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 3,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '嘴裡永遠有草草在咀嚼',
      imgUrl: '008.jpg'
    },
    {
      Serial_number: '兔零玖',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '活潑愛玩，黏人',
      imgUrl: '009.jpg'
    },
    {
      Serial_number: '兔伊零',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '害羞靦腆',
      imgUrl: '010.jpg'
    },
    {
      Serial_number: '兔伊伊',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '破壞王，很愛咬草磚',
      imgUrl: '011.jpg'
    },
    {
      Serial_number: '兔伊二',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '很有個性，喜歡打翻食盆',
      imgUrl: '012.jpg'
    },
    {
      Serial_number: '兔壹杉',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '很活潑、貪吃',
      imgUrl: '013.jpg'
    },
    {
      Serial_number: '兔伊賜',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '喜歡梳毛、躺草堆睡覺',
      imgUrl: '014.jpg'
    },
    {
      Serial_number: '兔伊伍',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '很呆萌，很喜歡到處探索',
      imgUrl: '015.jpg'
    },
    {
      Serial_number: '兔一路',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '貪吃鬼',
      imgUrl: '016.jpg'
    },
    {
      Serial_number: '兔伊柒',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '警戒心高、膽小',
      imgUrl: '017.jpg'
    },
    {
      Serial_number: '兔伊八',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '超級黏人、喜歡人陪',
      imgUrl: '018.jpg'
    },
    {
      Serial_number: '兔伊玖',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '很喜歡出門溜搭',
      imgUrl: '019.jpg'
    },
    {
      Serial_number: '兔二凌',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 3,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '嘴裡永遠有草草在咀嚼',
      imgUrl: '020.jpg'
    },
    {
      Serial_number: '兔二伊',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '活潑愛玩，黏人',
      imgUrl: '021.jpg'
    },
    {
      Serial_number: '兔二雙',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '害羞靦腆',
      imgUrl: '022.jpg'
    },
    {
      Serial_number: '兔貳叁',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '破壞王，很愛咬草磚',
      imgUrl: '023.jpg'
    },
    {
      Serial_number: '兔二賜',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      ' Health_status': '健康',
      Describe: '很有個性，喜歡打翻食盆',
      imgUrl: '024.jpg'
    }
  ]
})

mock.onGet(`${process.env.VUE_APP_BASE_URL}/guineapigs`).reply(200, {
  guineapigs: [
    {
      Serial_number: '天零壹',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '很活潑、貪吃',
      imgUrl: '001.jpg'
    },
    {
      Serial_number: '天零貳',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '喜歡被摸摸、交朋友',
      imgUrl: '002.jpg'
    },
    {
      Serial_number: '天零參',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '很喜歡到處探索、四處咬',
      imgUrl: '003.jpg'
    },
    {
      Serial_number: '天零肆',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '專業吃貨',
      imgUrl: '004.jpg'
    },
    {
      Serial_number: '天零伍',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '警戒心高、膽小怕生',
      imgUrl: '005.jpg'
    },
    {
      Serial_number: '天零陸',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '喜歡在草地上奔跑',
      imgUrl: '006.jpg'
    },
    {
      Serial_number: '天零柒',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '貪吃、親人',
      imgUrl: '007.jpg'
    },
    {
      Serial_number: '天零巴',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 3,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '最愛吃水果',
      imgUrl: '008.jpg'
    },
    {
      Serial_number: '天零玖',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '嘴巴永遠停不下來',
      imgUrl: '009.jpg'
    },
    {
      Serial_number: '天伊零',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '已節育',
      Health_status: '健康',
      Describe: '很靦腆，怕生',
      imgUrl: '010.jpg'
    },
    {
      Serial_number: '天伊伊',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '很愛四處咬咬',
      imgUrl: '011.jpg'
    },
    {
      Serial_number: '天伊二',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 2,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '喜歡被摸摸，很乖巧安靜',
      imgUrl: '012.jpg'
    }
  ]
})

mock.onGet(`${process.env.VUE_APP_BASE_URL}/hamsters`).reply(200, {
  hamsters: [
    {
      Serial_number: '小伊',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '很活潑、貪吃',
      imgUrl: '001.jpg'
    },
    {
      Serial_number: '小貳',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '喜歡被摸摸',
      imgUrl: '002.jpg'
    },
    {
      Serial_number: '零參',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '很喜歡逃家',
      imgUrl: '003.jpg'
    },
    {
      Serial_number: '阿肆',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '專業吃貨',
      imgUrl: '004.jpg'
    },
    {
      Serial_number: '伍仔',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '愛咬人',
      imgUrl: '005.jpg'
    },
    {
      Serial_number: '陸兒',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '喜歡邊跑滾輪邊叼食物',
      imgUrl: '006.jpg'
    },
    {
      Serial_number: '阿七七',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '貪吃、親人',
      imgUrl: '007.jpg'
    },
    {
      Serial_number: '小八',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '天然呆，親人',
      imgUrl: '008.jpg'
    },
    {
      Serial_number: '阿玖',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '活潑愛玩，嘴巴永遠停不下來',
      imgUrl: '009.jpg'
    },
    {
      Serial_number: '阿石',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '很靦腆，怕生，愛逃家',
      imgUrl: '010.jpg'
    },
    {
      Serial_number: '光頭',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '破壞王，很愛咬任何身邊的東西',
      imgUrl: '011.jpg'
    },
    {
      Serial_number: '天寶',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '喜歡被摸摸，很乖巧安靜',
      imgUrl: '012.jpg'
    },
    {
      Serial_number: '拾參',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '很活潑、貪吃',
      imgUrl: '013.jpg'
    },
    {
      Serial_number: '伊寺',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '喜歡被摸摸',
      imgUrl: '014.jpg'
    },
    {
      Serial_number: '伊伍',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '很喜歡逃家',
      imgUrl: '015.jpg'
    },
    {
      Serial_number: '花田',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '專業吃貨',
      imgUrl: '016.jpg'
    },
    {
      Serial_number: '七仔',
      Entry_date: '1574179200000',
      Gender: '母',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '愛咬人',
      imgUrl: '017.jpg'
    },
    {
      Serial_number: '嬌滴滴',
      Entry_date: '1574179200000',
      Gender: '公',
      Age: 1,
      Birth_control_status: '未節育',
      Health_status: '健康',
      Describe: '喜歡邊跑滾輪邊叼食物',
      imgUrl: '018.jpg'
    }
  ]
})

mock.onGet(`${process.env.VUE_APP_BASE_URL}/products`).reply(200, {
  products: [
    {
      Product_Name: '美味牛肉',
      Commodity_Information: '嚴選澳洲牛肉，美味無負擔。',
      Product_Ecification: '150g',
      imgUrl: 'meat.jpg',
      Price: '105',
      Id: 'meat'
    },
    {
      Product_Name: '低脂雞肉',
      Commodity_Information: '嚴選國產雞肉，讓毛孩吃得健康。',
      Product_Ecification: '150g',
      imgUrl: 'chicken.jpg',
      Price: '100',
      Id: 'chicken'
    },
    {
      Product_Name: '低溫烘乾牛肉條',
      Commodity_Information: '嚴選澳洲牛肉，搭配獨特技術鎖住食材營養，美味又健康。',
      Product_Ecification: '100g',
      imgUrl: 'meat02.jpg',
      Price: '100',
      Id: 'beef_strips'
    },
    {
      Product_Name: '新鮮鮭魚肉(切丁)',
      Commodity_Information: '嚴選挪威鮭魚，美味又健康。',
      Product_Ecification: '120g',
      imgUrl: 'fish01.jpg',
      Price: '120',
      Id: 'salmon_fish_dried'
    },
    {
      Product_Name: '嚴選鰹魚乾',
      Commodity_Information: '嚴選鰹魚，美味又健康。',
      Product_Ecification: '120g',
      imgUrl: 'fish02.jpg',
      Price: '150',
      Id: 'dried_bonito'
    },
    {
      Product_Name: '綜合嚴選乾草',
      Commodity_Information: '本館自種鮮草，美味營養。',
      Product_Ecification: '200g',
      imgUrl: 'grass02.jpg',
      Price: '100',
      Id: 'grass'
    },
    {
      Product_Name: '美味蔬菜組合',
      Commodity_Information: '本館自種無農藥蔬果，美味又健康。',
      Product_Ecification: '50g',
      imgUrl: 'vagatable01.jpg',
      Price: '50',
      Id: 'vegetables'
    },
    {
      Product_Name: '嚴選早摘嫩牧草',
      Commodity_Information: '本館自種純淨牧草，適口性佳。',
      Product_Ecification: '300g',
      imgUrl: 'grass03.jpg',
      Price: '150',
      Id: 'tender_grass'
    }
    // {
    //   "Product_Name": "待上架",
    //   "Commodity_Information": "待上架",
    //   "Product_Ecification": "待上架",
    //   "imgUrl": "grass03.jpg",
    //   "Price": "0",
    // },
  ]
})
mock.onGet(`${process.env.VUE_APP_BASE_URL}/address`).reply(200, address)

mock.onGet(`${process.env.VUE_APP_BASE_URL}/room`).reply(200, {
  room: [
    {
      imgUrl: 'L_room03.jpg',
      Room_Type: '溫馨小房',
      Room_Living_Population: '建議入住人數:2~3人',
      path: 'small_room'
    },
    {
      imgUrl: 'L_room01.jpg',
      Room_Type: '寬敞大房',
      Room_Living_Population: '建議入住人數:3~5人',
      path: 'large_room'
    },
    {
      imgUrl: 'L_room05.jpg',
      Room_Type: '豪華家庭房',
      Room_Living_Population: '建議入住人數:5~10人',
      path: 'luxury_room'
    }
  ]
})

mock.onGet(`${process.env.VUE_APP_BASE_URL}/small_room`).reply(200, {
  roomDetails: [
    {
      imgUrl: ['room14.jpg', 'room18.jpg', 'bathroom03.jpg'],
      Number_of_pings: '30坪',
      Air_conditioner: '冷氣',
      Heating: '暖氣',
      Private_bathroom: '獨立衛浴',
      Double_bed: '雙人床(可加床)',
      Dehumidifier: '除濕機',
      Hair_Dryer: '吹風機',
      WIFI: '免費WiFi',
      Toiletries: '盥洗用品',
      Drinking_fountain: '飲水機',
      Coin_operated_washing_machine: '投幣式洗衣機',
      Coin_operated_dryer: '投幣式烘衣機',
      Parking: '免費停車場',
      Baggage_Deposit: '免費行李寄放'
    }
  ]
})
mock.onGet(`${process.env.VUE_APP_BASE_URL}/large_room`).reply(200, {
  roomDetails: [
    {
      imgUrl: ['room14.jpg', 'room18.jpg', 'bathroom03.jpg'],
      Number_of_pings: '50坪',
      Air_conditioner: '冷氣',
      Heating: '暖氣',
      Private_bathroom: '獨立衛浴',
      Double_bed: '雙人床(可加床)',
      Dehumidifier: '除濕機',
      Hair_Dryer: '吹風機',
      WIFI: '免費WiFi',
      Toiletries: '盥洗用品',
      Drinking_fountain: '飲水機',
      Coin_operated_washing_machine: '投幣式洗衣機',
      Coin_operated_dryer: '投幣式烘衣機',
      Parking: '免費停車場',
      Baggage_Deposit: '免費行李寄放'
    }
  ]
})
mock.onGet(`${process.env.VUE_APP_BASE_URL}/luxury_room`).reply(200, {
  roomDetails: [
    {
      imgUrl: ['room14.jpg', 'room18.jpg', 'bathroom03.jpg'],
      Number_of_pings: '80坪',
      Air_conditioner: '冷氣',
      Heating: '暖氣',
      Private_bathroom: '獨立衛浴',
      Double_bed: '雙人床(可加床)',
      Dehumidifier: '除濕機',
      Hair_Dryer: '吹風機',
      WIFI: '免費WiFi',
      Toiletries: '盥洗用品',
      Drinking_fountain: '飲水機',
      'Coin-operated_washing_machine': '投幣式洗衣機',
      'Coin-operated_dryer': '投幣式烘衣機',
      Parking: '免費停車場',
      Baggage_Deposit: '免費行李寄放'
    }
  ]
})
mock.onGet(`${process.env.VUE_APP_BASE_URL}/pet_accommodation`).reply(200, {
  petroom: [
    {
      imgUrl: 'room_dog01.jpg',
      PetRoom_Type: '狗狗房',
      PetRoom_Living_Population: '一犬一房',
      path: 'room_dog'
    },
    {
      imgUrl: 'room_cat01.jpg',
      PetRoom_Type: '貓貓房',
      PetRoom_Living_Population: '一貓一房',
      path: 'room_cat'
    },
    {
      imgUrl: 'room_rabbit_and_guineapig01.jpg',
      PetRoom_Type: '兔兔 | 天竺鼠',
      PetRoom_Living_Population: '隱密好房',
      path: 'room_rabbitANDguineapig'
    },
    {
      imgUrl: 'room_hamster01.jpg',
      PetRoom_Type: '倉鼠房',
      PetRoom_Living_Population: '好觀察的好房',
      path: 'room_hamster'
    }
  ]
})

mock.onGet(`${process.env.VUE_APP_BASE_URL}/room_dog`).reply(200, {
  petAccommodationDetail: [
    {
      imgUrl: 'room_dog01.jpg',
      PetRoom_Type: '獨立犬房',
      PetRoom_Of_pings: '5坪',
      Temperature_Adjustment: '恆溫調節',
      Outdoor_Scenery: '觀賞戶外風景',
      Independent_Space: '獨立空間',
      Remote_Monitoring_Equipment: '24小時遠端監控設備',
      Take_One_More_Walk: '散步多一次',
      Touch: '摸摸',
      Playing: '玩耍',
      Feed_Dessert: '餵點心',
      Feed_Medicine: '餵藥',
      Room_Serve_Description: [
        '每日固定散步兩次',
        '一天餵食兩次',
        '一小時清潔一次環境',
        '可攜帶毛孩熟悉物品一同住宿',
        '提供視訊服務，可遠端跟毛孩說話，或觀看毛孩目前狀況'
      ],
      Accommodation_Notice: [
        '需提供施打疫苗，以及體內、體外除蟲之證明',
        '如寵物有特殊狀況需注意者，請於住宿前告知',
        '如為初次寄宿，請飼主預留30分鐘，本館於確認毛孩安置狀況穩定後，飼主始可離開'
      ],
      Price: '1000'
    }
  ]
})

mock.onGet(`${process.env.VUE_APP_BASE_URL}/room_cat`).reply(200, {
  petAccommodationDetail: [
    {
      imgUrl: 'room_cat01.jpg',
      PetRoom_Type: '獨立貓房',
      PetRoom_Of_pings: '5坪',
      Temperature_Adjustment: '恆溫調節',
      Outdoor_Scenery: '觀賞戶外風景',
      Independent_Space: '獨立空間',
      Remote_Monitoring_Equipment: '24小時遠端監控設備',
      Take_One_More_Walk: '散步多一次',
      Touch: '摸摸',
      Playing: '玩耍',
      Feed_Dessert: '餵點心',
      Feed_Medicine: '餵藥',
      Room_Serve_Description: [
        '每日固定散步兩次',
        '一天餵食兩次',
        '一小時清潔一次環境',
        '可攜帶毛孩熟悉物品一同住宿',
        '提供視訊服務，可遠端跟毛孩說話，或觀看毛孩目前狀況'
      ],
      Accommodation_Notice: [
        '需提供施打疫苗，以及體內、體外除蟲之證明',
        '如寵物有特殊狀況需注意者，請於住宿前告知',
        '如為初次寄宿，請飼主預留30分鐘，本館於確認毛孩安置狀況穩定後，飼主始可離開'
      ],
      Price: '1000'
    }
  ]
})

mock.onGet(`${process.env.VUE_APP_BASE_URL}/room_rabbitANDguineapig`).reply(200, {
  petAccommodationDetail: [
    {
      imgUrl: 'room_rabbit_and_guineapig01.jpg',
      PetRoom_Type: '獨立寵物房',
      PetRoom_Of_pings: '3坪',
      Temperature_Adjustment: '恆溫調節',
      Outdoor_Scenery: '對外窗',
      Independent_Space: '隱蔽空間',
      Remote_Monitoring_Equipment: '24小時遠端監控設備',
      Take_One_More_Walk: '散步多一次',
      Touch: '摸摸',
      Playing: '玩耍',
      Feed_Dessert: '餵點心',
      Feed_Medicine: '餵藥',
      Room_Serve_Description: [
        '同一個飼主有多隻毛孩寄宿之需求，可同住一個空間',
        '一天餵食兩次',
        '一小時清潔一次環境',
        '可攜帶毛孩熟悉物品一同住宿',
        '提供視訊服務，可遠端跟毛孩說話，或觀看毛孩目前狀況',
        '可自備食盆、飲水器、毛孩習慣之食物',
        '本館有自種新鮮牧草、蔬菜，提供寄宿毛孩享用'
      ],
      Accommodation_Notice: [
        '需提供寵物健康之證明',
        '如寵物有特殊狀況需注意者，請於住宿前告知',
        '如為初次寄宿，請飼主預留30分鐘，本館於確認毛孩安置狀況穩定後，飼主始可離開'
      ],
      Price: '500'
    }
  ]
})
mock.onGet(`${process.env.VUE_APP_BASE_URL}/room_hamster`).reply(200, {
  petAccommodationDetail: [
    {
      imgUrl: 'room_hamster01.jpg',
      PetRoom_Type: '尊貴倉鼠房',
      PetRoom_Of_pings: '3坪',
      Temperature_Adjustment: '恆溫調節',
      Outdoor_Scenery: '對外窗',
      Independent_Space: '隱蔽空間',
      Remote_Monitoring_Equipment: '24小時遠端監控設備',
      Take_One_More_Walk: '散步多一次',
      Touch: '摸摸',
      Playing: '玩耍',
      Feed_Dessert: '餵點心',
      Feed_Medicine: '餵藥',
      Room_Serve_Description: [
        '同一個飼主有多隻毛孩寄宿之需求，可同住一個空間',
        '一天餵食兩次',
        '一小時清潔一次環境',
        '可攜帶毛孩熟悉物品一同住宿',
        '提供視訊服務，可遠端跟毛孩說話，或觀看毛孩目前狀況',
        '可自備食盆、飲水器、毛孩習慣之食物',
        '本館有自種新鮮牧草、蔬菜，提供寄宿毛孩享用'
      ],
      Accommodation_Notice: [
        '需提供寵物健康之證明',
        '如寵物有特殊狀況需注意者，請於住宿前告知',
        '如為初次寄宿，請飼主預留30分鐘，本館於確認毛孩安置狀況穩定後，飼主始可離開'
      ],
      Price: '300'
    }
  ]
})
// axios.get("/dogs").then(function (response) {
//   console.log(response.data);
// });

// axios.get("/cats").then(function (response) {
//   console.log(response.data);
// });

// axios.get("/rabbits").then(function (response) {
//   console.log(response.data);
// });

// axios.get("/guineapigs").then(function (response) {
//   console.log(response.data);
// });

// axios.get("/hamsters").then(function (response) {
//   console.log(response.data);
// });
