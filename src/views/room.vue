<template>
  <div class="room_box">
    <div class="room_leading">
      <h2>本館共有三種房型可以選擇，歡迎來住宿放鬆</h2>
    </div>
    <div class="room_box_item">
      <!-- 房型照片與簡述 -->
      <div v-for="(item, index) of roomList" :key="index" class="room_review_box">
        <div class="room_review">
          <div class="room_pic">
            <router-link id="" :to="item.path">
              <img
                class="rooms_pic"
                :src="require(`../assets/images/${$route.name}/${item.imgUrl}`)"
                alt="房型照片"
                title=""
              />
            </router-link>
            <!-- <router-link to="/room_detail"> <img class="rooms_pic" :src="require(`../assets/images/${$route.name}/${item.imgUrl}`)" alt="房型照片" title="" /> </router-link>
                        <router-view /> -->
          </div>

          <div class="room_overview">
            <h3>{{ item.Room_Type }}</h3>
            <p>{{ item.Room_Living_Population }}</p>
          </div>
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
            <p>無石綿、環保隔音建材，擁有極佳隔熱及吸音功效</p>
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

  <!-- 照片牆 -->
  <!-- <div class="photo_grid">
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
        </div> -->
</template>

<script>
import axios from 'axios'

export default {
  name: 'Room',
  data() {
    return {
      roomList: []
    }
  },

  mounted() {
    const roomType = this.$route.name
    this.getRoomList(roomType)
  },

  methods: {
    getRoomList(roomType) {
      axios.get(`${process.env.VUE_APP_BASE_URL}/${roomType}`).then(res => {
        const roomList = res.data[roomType]
        this.roomList = roomList
      })
    }
  }
}
</script>
