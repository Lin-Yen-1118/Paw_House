<template>
    <!-- 小型房型詳細資訊 -->
    <div class="room_box">
        <div class="booking_cards">
            <div class="booking_info">
                <!-- 房型照片區塊 -->
                <div class="booking_info_pic">
                    <!-- 一張大張房型照片 -->
                    <div class="room_pic_itemsBox main_room_pic">
                        <img class="rooms_pic" />
                    </div>
                    <!-- 三張房型照片 -->
                    <div class="room_pic_itemsBox">
                        <!-- <div>
                            <img class="rooms_pic_items" src=./img-adjust_size/room/bathroom03.jpg>
                        </div>
                        <div>
                            <img class="rooms_pic_items" src=./img-adjust_size/room/room14.jpg>
                        </div>
                        <div>
                            <img class="rooms_pic_items" src=./img-adjust_size/room/room18.jpg>
                        </div> -->
                    </div>
                </div>
                <!-- 房型資料介紹區塊 -->
                <div class="booking_info_description">
                    <div class="rooms_main_details">
                        <h3>房型名稱:</h3>
                        <span>溫馨小房(建議入住人數:2~3人)</span>
                    </div>

                    <div class="rooms_main_details rooms_details">
                        <h3>房間設施:</h3>
                        <span>30坪</span>
                        <span>冷氣</span>
                        <span>暖氣</span>
                        <span>獨立衛浴</span>
                        <span>雙人床(可加床)</span>
                        <span>除濕機</span>
                        <span>吹風機</span>
                        <span>免費WiFi</span>
                    </div>

                    <div class="rooms_main_details">
                        <h4>住宿請自備:</h4>
                        <span>盥洗用品</span>
                    </div>

                    <div class="rooms_main_details public_use">
                        <h3>公共設施:</h3>
                        <span>飲水機</span>
                        <span>投幣式洗衣機</span>
                        <span>投幣式烘衣機</span>
                        <span>免費停車場</span>
                        <span>免費行李寄放</span>
                    </div>

                    <div class="rooms_main_details">
                        <h3>住房政策:</h3>
                        <p>本館全面禁菸</p>
                        <p>有攜帶毛孩住宿者，招待專屬點心乙份</p>
                        <p>
                            因衛生考量，本館不主動提供毛巾，如有需求可至櫃台領取免費毛巾
                        </p>
                        <p>毛巾僅供人使用，如寵物有需求請洽櫃台</p>
                        <p>有攜帶毛孩之旅客，請勿留毛孩單獨於房內，外出請記得繫牽繩喔</p>
                        <p>
                            攜帶毛孩來住宿者，如為狗狗及貓貓，需提供施打疫苗，以及體內、體外除蟲之證明
                        </p>
                    </div>
                </div>

                <div class="rooms_main_details rooms_prices">
                    <span>
                        <p class="prices">NTD</p>
                        <p class="prices">2500</p>
                    </span>
                </div>

                <div class="booking_button">
                    <input type="button" value="我要預訂" name="booking_room" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RoomDetail',
    data() {
        return {
            // roomItemList: [{ routeName: 'bookingroom_peopleroom', LargeImgSrc: require('../../assets/images/room/L_room03.jpg'), title: '小型房', alt: '小型房' }],
        }
    },
}
</script>
