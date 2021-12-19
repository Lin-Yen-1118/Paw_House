<template>
  <div class="room_box">
    <div class="room_leading">
      <h2>本館提供毛孩安心的住宿環境，歡迎帶寶貝來寄宿</h2>
    </div>
    <div class="room_box_item">
      <!-- 房型照片與簡述 -->
      <div v-for="(item, index) of petroomList" :key="index" class="room_review_box">
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
          </div>
          <div class="room_overview">
            <h3>{{ item.PetRoom_Type }}</h3>
            <p>{{ item.PetRoom_Living_Population }}</p>
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
            <img src="../assets/images/pet_accommodation/pet_sitter.jpg" />
          </div>
          <div class="booking_features_box_description">
            <h3>專業寵物保姆</h3>
            <p>毛孩交給專業又有愛心的保姆照顧好放心</p>
          </div>
        </div>

        <div class="booking_features_box">
          <div class="booking_features_box_pic">
            <img src="../assets/images/pet_accommodation/remote_monitor.jpg" />
          </div>
          <div class="booking_features_box_description">
            <h3>24小時高清遠端攝像機</h3>
            <p>隨時都可以看到毛孩狀況，本館攝像機支援聲音傳輸</p>
          </div>
        </div>

        <div class="booking_features_box">
          <div class="booking_features_box_pic">
            <img src="../assets/images/pet_accommodation/cohedin.jpg" />
          </div>
          <div class="booking_features_box_description">
            <h3>醫療級六雙啶</h3>
            <p>醫療級消毒水，住宿環境消毒使用好安心</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PetAccommodation',

  data() {
    return {
      petroomList: []
    }
  },

  mounted() {
    const petroomType = this.$route.name
    this.getpetroomList(petroomType)
  },

  methods: {
    getpetroomList(petroomType) {
      axios.get(`${process.env.VUE_APP_BASE_URL}/${petroomType}`).then(res => {
        const { petroom } = res.data
        this.petroomList = petroom
      })
    }
  }
}
</script>
