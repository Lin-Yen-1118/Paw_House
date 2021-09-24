<template>
    <div class="room_box">
        <!-- 右邊區塊 -->
        <div class="right_box">
            <div class="room_leading">
                <h2>本館提供毛孩安心的住宿環境，歡迎帶寶貝來寄宿</h2>
            </div>
            <!-- 房型照片與簡述 -->
            <div class="room_review_box">
                <div class="room_review">
                    <div class="room_pic">
                        <a href="./room_dog.html"><img class="rooms_pic" src=../assets/images/pet_room/room_dog01.jpg></a>
                    </div>
                    <div class="room_overview">
                        <h3>狗狗房</h3>
                        <p>一犬一房</p>
                    </div>
                </div>
                <div class="room_review">
                    <div class="room_pic">
                        <a href="./room_cat.html"><img class="rooms_pic" src=../assets/images/pet_room/room_cat01.jpg></a>
                    </div>
                    <div class="room_overview">
                        <h3>貓貓房</h3>
                        <p>一貓一房</p>
                    </div>
                </div>
                <div class="room_review">
                    <div class="room_pic">
                        <a href="./room_rabbitANDguineapig.html"><img class="rooms_pic" src=../assets/images/pet_room/room_rabbit_and_guineapig01.jpg></a>
                    </div>
                    <div class="room_overview">
                        <h3>兔兔 | 天竺鼠</h3>
                        <p>隱密好房</p>
                    </div>
                </div>
                <div class="room_review">
                    <div class="room_pic">
                        <a href="./room_hamster.html"><img class="rooms_pic" src=../assets/images/pet_room/room_hamster01.jpg></a>
                    </div>
                    <div class="room_overview">
                        <h3>倉鼠房</h3>
                        <p>好觀察的好房</p>
                    </div>
                </div>
            </div>
            <!-- 本館特點 -->
            <div class="booking_features">
                <!-- 標題 -->
                <div class="booking_features_title"><h3>本館特色</h3></div>
                <!-- 特點介紹 -->
                <div class="features_content">
                    <div class="booking_features_box">
                        <div class="booking_features_box_pic">
                            <img src="../assets/images/pet_room/pet_sitter.jpg" />
                        </div>
                        <div class="booking_features_box_description">
                            <h3>專業寵物保姆</h3>
                            <p>毛孩交給專業又有愛心的保姆照顧好放心</p>
                        </div>
                    </div>

                    <div class="booking_features_box">
                        <div class="booking_features_box_pic">
                            <img src="../assets/images/pet_room/remote_monitor.jpg" />
                        </div>
                        <div class="booking_features_box_description">
                            <h3>24小時高清遠端攝像機</h3>
                            <p>隨時都可以看到毛孩狀況，本館攝像機支援聲音傳輸</p>
                        </div>
                    </div>

                    <div class="booking_features_box">
                        <div class="booking_features_box_pic">
                            <img src="../assets/images/pet_room/cohedin.jpg" />
                        </div>
                        <div class="booking_features_box_description">
                            <h3>醫療級六雙啶</h3>
                            <p>醫療級消毒水，住宿環境消毒使用好安心</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'pet_accommodation',
}
</script>
<style lang="scss" scoped>
@import '@/scss/room_pet.scss';
@import '@/scss/bookingroom.scss';
@import '@/scss/bookingroom_peopleroom.scss';
</style>
