<template>
    <div>
        <!-- 房型分頁 -->
        <!-- <div class="pagination_box">
      <ul class="pagination">
        <li>
          <a id="SmallRoom" href="bookingroom_smallroom.html">溫馨小房</a>
        </li>
        <li>
          <a id="LargeRoom" href="bookingroom_largeroom.html">寬敞大房</a>
        </li>
        <li>
          <a a id="LuxuryRoom" href="bookingroom_luxuryroom.html">豪華家庭房</a>
        </li>
      </ul>
    </div> -->

        <div class="room_box">
            <!-- 左邊區塊 -->
            <!-- 漫畫照片 -->
            <!-- <div class="bookingroom_box">
        <div class="bookingroom_pic">
          <a href="#" target="_blank"
            ><img
              class="booking_img only_people"
              src="./img/svg/bookingroom_only_people.svg"
          /></a>
        </div>
        <div class="bookingroom_pic">
          <a href="#" target="_blank"
            ><img
              class="booking_img bringing_pet"
              src="./img/svg/bookingroom_bringing_pet.svg"
          /></a>
        </div>
        <div class="bookingroom_pic">
          <a href="#" target="_blank"
            ><img
              class="booking_img pet_boarding"
              src="./img/svg/bookingroom_pet_boarding.svg"
          /></a>
        </div>
        <div class="bookingroom_pic">
          <a href="#" target="_blank"
            ><img
              class="booking_img welcome"
              src="./img/svg/bookingroom_welcome.svg"
          /></a>
        </div>
      </div> -->
            <!-- 右邊區塊 -->
            <div class="right_box">
                <div class="room_leading">
                    <h2>本館共有三種房型可以選擇，歡迎來住宿放鬆</h2>
                </div>
                <!-- 房型照片與簡述 -->
                <div class="room_review_box">
                    <div class="room_review">
                        <div class="room_pic">
                            <a href="./bookingroom_smallroom.html"><img class="rooms_pic" src=../assets/images/room/L_room03.jpg></a>
                        </div>
                        <div class="room_overview">
                            <h3>溫馨小房</h3>
                            <p>適合2~3人住宿</p>
                        </div>
                    </div>
                    <div class="room_review">
                        <div class="room_pic">
                            <a href="./bookingroom_largeroom.html"><img class="rooms_pic" src=../assets/images/room/L_room01.jpg></a>
                        </div>
                        <div class="room_overview">
                            <h3>寬敞大房</h3>
                            <p>適合3~5人住宿</p>
                        </div>
                    </div>
                    <div class="room_review">
                        <div class="room_pic">
                            <a href="./bookingroom_luxuryroom.html"><img class="rooms_pic" src=../assets/images/room/L_room05.jpg></a>
                        </div>
                        <div class="room_overview">
                            <h3>豪華家庭房</h3>
                            <p>適合5~10人住宿</p>
                        </div>
                    </div>
                </div>
                <!-- 本館特點 -->
                <div class="booking_features">
                    <!-- 標題 -->
                    <div class="booking_features_title"><h2>本館特色</h2></div>
                    <!-- 特點介紹 -->
                    <div class="features_content">
                        <div class="booking_features_box">
                            <div class="booking_features_box_pic">
                                <img src="../assets/images/room-Building materials/001.jpg" />
                            </div>
                            <div class="booking_features_box_description">
                                <h3>康柏纖泥板</h3>
                                <p>無石綿、環保隔音建材，<br />擁有極佳隔熱及吸音功效</p>
                            </div>
                        </div>

                        <div class="booking_features_box">
                            <div class="booking_features_box_pic">
                                <img src="../assets/images/room-Building materials/002.jpg" />
                            </div>
                            <div class="booking_features_box_description">
                                <h3>丹麥 Flugger 環保塗料</h3>
                                <p>寵物不小心牆壁啃了一塊也安全</p>
                            </div>
                        </div>

                        <div class="booking_features_box">
                            <div class="booking_features_box_pic">
                                <img src="../assets/images/room-Building materials/003.jpg" />
                            </div>
                            <div class="booking_features_box_description">
                                <h3>天然無負擔的環保清潔劑</h3>
                                <p>使用淨毒五郎清潔環境，安全無負擔</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 照片牆 -->
        <div class="photo_grid">
            <div class="photo_grid_content">
                <div class="photo_grid_title"><h2>照片牆</h2></div>

                <div class="photo_grid_item_box">
                    <div class="photo_grid_item">
                        <img src="../assets/images/room/001.jpg" id="imge" />
                    </div>
                    <div class="photo_grid_item">
                        <img src="../assets/images/room/002.jpg" id="imge02" />
                    </div>
                    <div class="photo_grid_item">
                        <img src="../assets/images/room/003.jpg" class="pic" />
                    </div>
                </div>
                <div class="photo_grid_item_box">
                    <div class="photo_grid_item">
                        <img src="../assets/images/room/004.jpg" class="pic" />
                    </div>
                    <div class="photo_grid_item">
                        <img src="../assets/images/room/005.jpg" class="pic" />
                    </div>
                    <div class="photo_grid_item">
                        <img src="../assets/images/room/006.jpg" class="pic" />
                    </div>
                </div>
                <div class="photo_grid_item_box">
                    <div class="photo_grid_item">
                        <img src="../assets/images/room/007.jpg" />
                    </div>
                    <div class="photo_grid_item">
                        <img src="../assets/images/room/008.jpg" />
                    </div>
                    <div class="photo_grid_item">
                        <img src="../assets/images/room/009.jpg" />
                    </div>
                </div>
                <div class="photo_grid_item_box">
                    <div class="photo_grid_item">
                        <img src="../assets/images/room/010.jpg" />
                    </div>
                    <div class="photo_grid_item">
                        <img src="../assets/images/room/011.jpg" />
                    </div>
                    <div class="photo_grid_item">
                        <img src="../assets/images/room/012.jpg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
