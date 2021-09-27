<template>
    <div>
        <!-- 前導文字 -->
        <div class="lead_text"><h3>這裡有許多浪浪在等家，趕快來預約互動吧</h3></div>
        <div class="adopt" id="page1">
            <div class="adoptBox" id="adoptDogPage1">
                <div class="adoptBoxContent" v-for="(item, index) in dogsData" :key="index">
                    <a href="#" title="adopt">
                        <img class="adopt_pic grid_item_dog" :src="require(`../assets/images/dog/${item.imgUrl}`)" alt="待認養動物圖片" title="狗狗" />
                    </a>
                    <div class="picContent">
                        <div>
                            <p id="dog01">編號:{{ item.Serial_number }}</p>
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
                        <input type="button" value="我要預約" onclick="window.open('adoptForm.html')" />
                    </div>
                </div>
            </div>
        </div>

        <!-- 分頁 -->
        <div class="adopt_pagination_box">
            <ul class="pagination">
                <li><a href="#">«</a></li>
                <li>
                    <a class="active" id="adoptDogPage1" href="adopt_dog.html">1</a>
                </li>
                <li><a id="adoptDogPage2" href="adopt_dog_page2.html">2</a></li>
                <li><a id="adoptDogPage3" href="adopt_dog_page3.html">3</a></li>
                <li><a href="#">»</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'adopt_dog',
    watch: {},
    components: {},

    data() {
        return {
            dogsData: [
                {
                    Serial_number: '汪零壹',
                    Entry_date: '1574179200000',
                    Gender: '公',
                    Age: 3,
                    Birth_control_status: '已節育',
                    Health_status: '健康',
                    Describe: '吃貨一枚',
                    imgUrl: '001.jpg',
                },
                {
                    Serial_number: '汪零貳',
                    Entry_date: '1574179200000',
                    Gender: '母',
                    Age: 2,
                    Birth_control_status: '已節育',
                    Health_status: '健康',
                    Describe: '活潑貪吃',
                    imgUrl: '002.jpg',
                },

                {
                    Serial_number: '汪零參',
                    Entry_date: '1574179200000',
                    Gender: '母',
                    Age: 4,
                    Birth_control_status: '已節育',
                    Health_status: '有指間炎',
                    Describe: '喜歡發呆、睡覺',
                    imgUrl: '003.jpg',
                },
                {
                    Serial_number: '汪零肆',
                    Entry_date: '1574179200000',
                    Gender: '母',
                    Age: 3,
                    Birth_control_status: '已節育',
                    Health_status: '健康',
                    Describe: '很貪吃，精力旺盛',
                    imgUrl: '004.jpg',
                },
                {
                    Serial_number: '汪零伍',
                    Entry_date: '1574179200000',
                    Gender: '母',
                    Age: 2,
                    Birth_control_status: '已節育',
                    Health_status: '健康',
                    Describe: '警戒心高、膽小',
                    imgUrl: '005.jpg',
                },
                {
                    Serial_number: '汪零陸',
                    Entry_date: '1574179200000',
                    Gender: '公',
                    Age: 2,
                    Birth_control_status: '已節育',
                    Health_status: '健康',
                    Describe: '超級黏人',
                    imgUrl: '006.jpg',
                },
                {
                    Serial_number: '汪零柒',
                    Entry_date: '1574179200000',
                    Gender: '母',
                    Age: 2,
                    Birth_control_status: '已節育',
                    Health_status: '健康',
                    Describe: '愛翻肚肚討摸摸，很乖巧',
                    imgUrl: '007.jpg',
                },
                {
                    Serial_number: '汪零巴',
                    Entry_date: '1574179200000',
                    Gender: '公',
                    Age: 4,
                    Birth_control_status: '已節育',
                    Health_status: '健康',
                    Describe: '很沉穩內斂的孩子',
                    imgUrl: '008.jpg',
                },
                {
                    Serial_number: '汪零玖',
                    Entry_date: '1574179200000',
                    Gender: '公',
                    Age: 1,
                    Birth_control_status: '已節育',
                    Health_status: '健康',
                    Describe: '活潑愛叫，喜歡到處咬',
                    imgUrl: '009.jpg',
                },
                {
                    Serial_number: '汪伊零',
                    Entry_date: '1574179200000',
                    Gender: '母',
                    Age: 2,
                    Birth_control_status: '已節育',
                    Health_status: '健康',
                    Describe: '外冷內熱，喜歡玩球',
                    imgUrl: '010.jpg',
                },
                {
                    Serial_number: '汪伊伊',
                    Entry_date: '1574179200000',
                    Gender: '母',
                    Age: 3,
                    Birth_control_status: '已節育',
                    Health_status: '健康',
                    Describe: '憂鬱小生一枚，喜歡吃肉乾',
                    imgUrl: '011.jpg',
                },
                {
                    Serial_number: '汪伊二',
                    Entry_date: '1574179200000',
                    Gender: '公',
                    Age: 2,
                    Birth_control_status: '已節育',
                    Health_status: '健康',
                    Describe: '活潑陽光大男孩，喜歡玩接球遊戲',
                    imgUrl: '012.jpg',
                },
            ],
        }
    },
    methods: {},
    mounted() {},
    destroyed() {},
    computed: {},
}
</script>
<style lang="scss" scoped>
@import '@/scss/adopt.scss';
</style>
