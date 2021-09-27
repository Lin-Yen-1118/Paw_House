<template>
    <div>
        <!-- 前導文字 -->
        <div class="lead_text"><h3>這裡有許多浪浪在等家，趕快來預約互動吧</h3></div>
        <div class="adopt" id="page1">
            <div class="adoptBox" id="adoptCatPage1">
                <div class="adoptBoxContent">
                    <a href="#" title="adopt">
                        <img class="adopt_pic grid_item_animal" src="../assets/images/cat/001.jpg" alt="待認養動物圖片" title="貓貓" />
                    </a>
                    <div class="picContent">
                        <div>
                            <p>編號:{{ item.Serial_number }}</p>
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
                    <a class="active" id="adoptCatPage1" href="adopt_cat.html">1</a>
                </li>
                <li><a id="adoptCatPage2" href="adopt_cat_page2.html">2</a></li>
                <!-- <li><a id="adoptCatPage3" href="adopt_cat_page3.html">3</a></li> -->
                <li><a href="#">»</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'adopt_',
}
</script>
<style lang="scss" scoped>
@import '@/scss/adopt.scss';
</style>
