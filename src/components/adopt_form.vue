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
                <input type="text" class="form-control" name="Username" v-bind:class="{ 'is-invalid': usernameError }" v-model="username" id="name" minlength="2" placeholder="請輸入真實姓名" autofocus />
                <div class="invalid-feedback">
                    <!-- {{ userErrMsg }} -->
                </div>
            </div>

            <div>
                性別:
                <input type="radio" id="male" name="gender" value="male" checked />
                <label for="male">男</label>

                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">女</label>
            </div>
            <div>
                出生年月日:
                <input id="date" type="date" min="1900-01-01" max="2021-01-01" required="required" />
            </div>
            <div>
                手機號碼:
                <input id="tel" type="tel" minlength="10" maxlength="10" pattern="09\d{8}" placeholder="請輸入手機號碼(格式:09xxxxxxxx)" required="required" />
            </div>

            <div>
                電子郵件:
                <input type="email" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="請輸入e-mail" />
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
                    <select name="" id="" @change="getAreaList($event)">
                        <!-- <option>{{ item.CityName }}請選擇居住縣/市</option> -->
                        <option :value="null" disabled>請選擇縣市</option>
                        <option v-for="(city, index) in cityList" :key="index"> {{ city }} </option>
                    </select>
                    <select name="" id="">
                        <option :value="null" disabled>請選擇地區</option>
                        <option v-for="(area, index) in areaList" :key="index">
                            {{ area.AreaName }}
                        </option>
                    </select>
                </div>
            </div>

            <div>
                居住環境:

                <input type="radio" name="living_env" value="apartment" id="apartment" checked />
                <label for="apartment">公寓</label>

                <input type="radio" name="living_env" value="house" id="house" />
                <label for="house" value="house">透天</label>

                <input type="radio" name="living_env" value="community_building" id="community_building" />
                <label for="community_building" value="community_building">電梯大廈</label>
            </div>

            <div>
                是否有過飼養寵物經驗:
                <input type="radio" id="yes" name="kept_pet" value="yes" checked />
                <label for="yes">是</label>

                <input type="radio" id="no" name="kept_pet" value="no" />
                <label for="no">否</label>
            </div>
            <div>
                預約互動日期: <br />
                <input id="”datetime-local”" type="datetime-local" />
            </div>
            <br />
            <div>
                <input type="submit" value="送出預約單" />
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'adoptForm',
    data() {
        return {
            addressList: [],
            cityList: [],
            areaList: [],
            username: '',
            usernameError: false,
        }
    },

    components: {},

    methods: {
        closeAdoptForm() {
            this.$emit('update:close', false)
        },
        async getaddressList() {
            await axios.get(`${process.env.BASEURL}/address`).then((res) => {
                const addressList = res.data
                this.addressList = addressList.address
            })
        },
        addresslist() {
            const cityList = []
            const address = this.addressList
            address.forEach((item) => {
                cityList.push(item.CityName)
            })
            this.cityList = cityList
        },
        getAreaList($event) {
            let addressList = this.addressList
            const selectedOptionName = $event.target.value
            const optionObjet = addressList.filter((item) => {
                return item.CityName === selectedOptionName
            })
            this.areaList = optionObjet[0].AreaList
        },
    },
    async mounted() {
        const addressName = this.$route.name
        await this.getaddressList(addressName)
        this.addresslist()
    },
    computed: {},
    watch: {
        username: function() {
            var isText = /^[a-zA-Z0-9]+$/
            if (!isText.test(this.username)) {
                this.usernameError = true
                this.userErrMsg = '請勿包含特殊字元'
            } else if (this.username.length > 10) {
                this.usernameError = true
                this.userErrMsg = '請勿超過10個字'
            } else {
                this.usernameError = false
            }
        },
    },
}
</script>

<style lang="scss" scoped>
#adopt_form {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 10;
}
.close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
#close_icon {
    width: 30px;
    margin: 0 0 0 0;
}
.adopt_form_group {
    background-color: #fff;
    position: absolute;
    top: 10%;
    left: 30%;
    width: 40%;
    max-width: 700px;
    height: 80%;
    padding: 10px;
    border-radius: 2%;
}
</style>
