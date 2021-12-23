<template>
  <div id="adopt_form" class="popupBox">
    <form class="adopt_form_group" action="" method="get">
      <!-- closeBTN -->
      <div class="close" @click="closeAdoptForm">
        <img id="close_icon" src="../assets/images/svg/times-circle-regular.svg" />
      </div>
      <!-- 表單內容-->
      <div>
        <label for="username">姓名:</label>
        <input
          id="name"
          v-model="username"
          type="text"
          class="form-control"
          name="Username"
          :class="{ 'is-invalid': usernameError }"
          minlength="2"
          placeholder="請輸入真實姓名"
          autofocus
        />
        <div class="invalid-feedback">
          <!-- {{ userErrMsg }} -->
        </div>
      </div>

      <div>
        性別:
        <input id="male" type="radio" name="gender" value="male" checked />
        <label for="male">男</label>

        <input id="female" type="radio" name="gender" value="female" />
        <label for="female">女</label>
      </div>
      <div>
        出生年月日:
        <input id="date" type="date" min="1900-01-01" max="2021-01-01" required="required" />
      </div>
      <div>
        手機號碼:
        <input
          id="tel"
          type="tel"
          minlength="10"
          maxlength="10"
          pattern="09\d{8}"
          placeholder="請輸入手機號碼(格式:09xxxxxxxx)"
          required="required"
        />
      </div>

      <div>
        電子郵件:
        <input
          type="email"
          required="required"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder="請輸入e-mail"
        />
      </div>
      <div>
        收入:
        <select name="income">
          <option>23800~30000</option>
          <option>30000-35000</option>
          <option>35000-40000</option>
          <option>40000-45000</option>
          <option>45000-50000</option>
          <option>50000以上</option>
        </select>
      </div>

      <div>
        居住地址:
        <div role="tw-city-selector">
          <select id="" name="" @change="getAreaList($event)">
            <!-- <option>{{ item.CityName }}請選擇居住縣/市</option> -->
            <option :value="null" disabled>請選擇縣市</option>
            <option v-for="(city, index) of cityList" :key="index">{{ city }}</option>
          </select>
          <select id="" name="">
            <option :value="null" disabled>請選擇地區</option>
            <option v-for="(area, index) of areaList" :key="index">
              {{ area.AreaName }}
            </option>
          </select>
        </div>
      </div>

      <div>
        居住環境:

        <input id="apartment" type="radio" name="living_env" value="apartment" checked />
        <label for="apartment">公寓</label>

        <input id="house" type="radio" name="living_env" value="house" />
        <label for="house" value="house">透天</label>

        <input id="community_building" type="radio" name="living_env" value="community_building" />
        <label for="community_building" value="community_building">電梯大廈</label>
      </div>

      <div>
        是否有過飼養寵物經驗:
        <input id="yes" type="radio" name="kept_pet" value="yes" checked />
        <label for="yes">是</label>

        <input id="no" type="radio" name="kept_pet" value="no" />
        <label for="no">否</label>
      </div>
      <div>
        預約互動日期:
        <br />
        <input id="”datetime-local”" type="datetime-local" />
      </div>
      <br />
      <div class="adopt_formBtn">
        <input type="submit" value="送出預約單" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdoptForm',

  components: {},
  data() {
    return {
      addressList: [], // 整個大的地址陣列
      cityList: [], // 縣市的陣列
      areaList: [], // 地區的陣列
      username: '', // 預設是空值
      usernameError: true
    }
  },

  computed: {},
  watch: {
    username() {
      const isText = /^[a-zA-Z0-9]+$/
      if (!isText.test(this.username)) {
        this.usernameError = true
        this.userErrMsg = '請勿包含特殊字元'
      } else if (this.username.length > 10) {
        this.usernameError = true
        this.userErrMsg = '請勿超過10個字'
      } else {
        this.usernameError = false
      }
    }
  },

  async mounted() {
    await this.getaddressList()
    this.createCityList()
  },

  methods: {
    // 關閉認養表單的彈窗
    closeAdoptForm() {
      this.$emit('update:close', false)
    },

    async getaddressList() {
      await axios.get(`${process.env.VUE_APP_BASE_URL}/address`).then(res => {
        const addressList = res.data
        this.addressList = addressList.address
      })
    },

    createCityList() {
      // 生成 選擇縣市清單
      // 將 this.addressList 每個物件依序抽出 CityName 放入 this.cityList (選擇縣市清單)
      this.addressList.forEach(item => {
        this.cityList.push(item.CityName)
      })
    },

    getAreaList($event) {
      // let addressList = this.addressList
      // 生成 選擇地區清單 當選擇好縣市後，呈現可選擇的對應物件(選擇地區清單)
      const selectedOptionName = $event.target.value
      const optionObjet = this.addressList.filter(item => {
        return item.CityName === selectedOptionName
      })
      this.areaList = optionObjet[0].AreaList
    }
  }
}
</script>
