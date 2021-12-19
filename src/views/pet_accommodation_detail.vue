<template>
  <!-- 毛孩住房詳細資訊 -->
  <div class="pet_booking_cards">
    <div class="booking_info">
      <!-- 房型照片區塊 -->
      <div class="booking_info_pic">
        <div class="room_pic_itemsBox main_room_pic">
          <!-- <img class="rooms_pic" src=../assets/images/pet_accommodation/room_dog01.jpg///////////> -->
        </div>
      </div>
      <!-- 房型資料介紹區塊 -->
      <div v-for="(item, index) of petAccommodationDetailList" :key="index" class="pet_room_box">
        <div class="booking_info_description">
          <div class="rooms_main_details">
            <h3>房型名稱:</h3>
            <p>{{ item.PetRoom_Type }}</p>
          </div>
          <div class="rooms_main_details">
            <h3>設施介紹:</h3>
          </div>
          <div class="rooms_main_details rooms_details">
            <span>{{ item.PetRoom_Of_pings }}</span>
            <span>{{ item.Temperature_Adjustment }}</span>
            <span>{{ item.Outdoor_Scenery }}</span>
            <span>{{ item.Independent_Space }}</span>
            <span>{{ item.Remote_Monitoring_Equipment }}</span>
          </div>

          <div class="rooms_main_details">
            <h3>可加購服務:</h3>
          </div>
          <div class="rooms_main_details public_use">
            <div class="add_purchase_items">
              <input id="walk" type="checkbox" name="purchase_items" />
              <label for="walk">{{ item.Take_One_More_Walk }}</label>

              <input id="touch" type="checkbox" name="purchase_items" />
              <label for="touch">{{ item.Touch }}</label>

              <input id="playing" type="checkbox" name="purchase_items" />
              <label for="playing">{{ item.Playing }}</label>

              <input id="feed_dessert" type="checkbox" name="purchase_items" />
              <label for="feed_dessert">{{ item.Feed_Dessert }}</label>
              <input id="feed_medicine" type="checkbox" name="purchase_items" />
              <label for="feed_medicine">{{ item.Feed_Medicine }}</label>
            </div>
          </div>
          <div class="rooms_main_details">
            <h3>住宿服務介紹:</h3>
          </div>

          <div class="rooms_main_details">
            <p
              v-for="(services, servicesindex) of item.Room_Serve_Description"
              :key="servicesindex"
            >
              {{ services }}
            </p>
          </div>
          <div class="rooms_main_details">
            <h3>住宿須知:</h3>
          </div>
          <div class="rooms_main_details">
            <p>需提供施打疫苗，以及體內、體外除蟲之證明</p>
            <p>如寵物有特殊狀況需注意者，請於住宿前告知</p>
            <p>
              如為初次寄宿，請飼主預留30分鐘，本館於確認毛孩安置狀況穩定後，飼主始可離開
            </p>
          </div>
        </div>

        <div class="rooms_main_details rooms_prices">
          <span>
            <p class="prices">NTD</p>
            <p class="prices">1000</p>
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
import axios from 'axios'

export default {
  name: 'PetAccommodationDetail',
  data() {
    return {
      petAccommodationDetailList: []
    }
  },

  mounted() {
    const petroomDetails = this.$route.name
    this.getpetAccommodationDetailList(petroomDetails)
  },

  methods: {
    getpetAccommodationDetailList(petAccommodationDetail) {
      axios.get(`${process.env.VUE_APP_BASE_URL}/${petAccommodationDetail}`).then(res => {
        const petAccommodationDetailList = res.data.petAccommodationDetail
        this.petAccommodationDetailList = petAccommodationDetailList
      })
    }
  }
}
</script>
