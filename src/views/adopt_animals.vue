<template>
    <div>
        <!-- 前導文字 -->
        <div class="lead_text"><h3>這裡有許多浪浪在等家，趕快來預約互動吧</h3></div>
        <div class="adopt" id="page1">
            <div class="adoptBox" id="adoptRabbitPage1">
                <div class="adoptBoxContent" v-for="(item, index) in animalsList" :key="index">
                    <a href="#" title="adopt">
                        <img class="adopt_pic grid_item_rabbit" :src="require(`../assets/images/${$route.name}/${item.imgUrl}`)" alt="待認養動物圖片" title="" />
                    </a>
                    <div class="picContent">
                        <div>
                            <p id="animals">編號:{{ item.Serial_number }}</p>
                            <p class="date">進所日期:{{ item.Entry_date }}</p>
                            <p class="animalSex">性別:{{ item.Gender }}</p>
                            <p class="animalYears">年齡:約{{ item.Age }}歲</p>
                            <p class="animalLigation">節育狀態:{{ item.Birth_control_status }}</p>
                            <p class="animalHealth">健康狀況:{{ item.Health_status }}</p>
                            <p class="animalHobby">描述:{{ item.Describe }}</p>
                        </div>
                    </div>
                    <!--我要預約按鈕-->
                    <div class="adoptBtn">
                        <button @click="toggleAdoptForm()">我要預約</button>
                    </div>
                </div>
            </div>
        </div>
        <adoptForm v-show="isShow" :close.sync="isShow"></adoptForm>
        <!-- 分頁 -->
        <div class="adopt_pagination_box">
            <ul class="pagination">
                <li><a href="#">«</a></li>
                <li>
                    <a class="active" href="#">1</a>
                    <a class="" href="#">2</a>
                    <a class="" href="#">3</a>
                </li>
                <!-- <li><a id="adoptGuineapigPage2" href="adopt_dog_page2.html">2</a></li>
        <li><a id="adoptGuineapigPage3" href="adopt_dog_page3.html">3</a></li> -->
                <li><a href="#">»</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import adoptForm from '../components/adopt_form.vue'
export default {
    name: 'adopt_animal',
    watch: {},
    components: { adoptForm },

    data() {
        return {
            animalsList: [],
            isShow: false,
        }
    },
    methods: {
        getAnimalsList(animalsName) {
            axios.get(`${process.env.BASEURL}/${animalsName}`).then((res) => {
                const animalsList = res.data[animalsName]
                this.animalsList = animalsList
            })
        },
        toggleAdoptForm: function() {
            this.isShow = !this.isShow
        },
    },
    mounted() {
        const animalsName = this.$route.name
        this.getAnimalsList(animalsName)
    },
    destroyed() {},
    computed: {},
}
</script>
<style lang="scss" scoped>
@import '@/scss/adopt.scss';
</style>
