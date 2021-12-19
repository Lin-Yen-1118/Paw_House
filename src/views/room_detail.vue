<template>
  <!-- 小型房型詳細資訊 -->
  <div class="room_box">
    <div class="booking_cards">
      <div v-for="(item, index) of roomDetailsList" :key="index" class="booking_info">
        <!-- 房型照片區塊 -->
        <div class="booking_info_pic">
          <!-- 一張大張房型照片 -->
          <div class="room_pic_itemsBox main_room_pic">
            <img class="rooms_pic" />
          </div>
          <!-- 三張房型照片 -->
          <div class="room_pic_itemsBox">
            <div>
              <img
                v-for="(imgName, imgIndex) of item.imgUrl"
                :key="imgIndex"
                :src="require(`../assets/images/room/${imgName}`)"
                :class="imgIndex === 0 ? 'largerImg' : 'smallerImg'"
                alt="房間圖片"
                title="住宿房型照片"
              />
            </div>
            <!-- <div>
              <img class="rooms_pic_items" src=~@/aasets/room/room14.jpg>
            </div>
            <div>
              <img class="rooms_pic_items" src=~@/aasets/room/room18.jpg>
            </div> -->
            <!-- <div>
              <img class="rooms_pic_items" src=~@/aasets/room/bathroom03.jpg>
                        </div>
                        <div>
                            <img class="rooms_pic_items" src=~@/aasets/room/room14.jpg>
                        </div>
                        <div>
                            <img class="rooms_pic_items" src=~@/aasets/room/room18.jpg>
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
            <span>{{ item.Number_of_pings }}</span>
            <span>{{ item.Air_conditioner }}</span>
            <span>{{ item.Heating }}</span>
            <span>{{ item.Private_bathroom }}</span>
            <span>{{ item.Double_bed }}</span>
            <span>{{ item.Dehumidifier }}</span>
            <span>{{ item.Hair_Dryer }}</span>
            <span>{{ item.WIFI }}</span>
          </div>

          <div class="rooms_main_details">
            <h4>住宿請自備:</h4>
            <span>{{ item.Toiletries }}</span>
          </div>

          <div class="rooms_main_details public_use">
            <h3>公共設施:</h3>
            <span>{{ item.Drinking_fountain }}</span>
            <span>{{ item.Coin_operated_washing_machine }}</span>
            <span>{{ item.Coin_operated_dryer }}</span>
            <span>{{ item.Parking }}</span>
            <span>{{ item.Baggage_Deposit }}</span>
          </div>

          <div class="rooms_main_details housing_policy">
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
import axios from 'axios'

export default {
  name: 'RoomDetail',
  data() {
    return {
      roomDetailsList: []
    }
  },

  mounted() {
    const roomDetails = this.$route.name
    this.getRoomDetailsList(roomDetails)
  },

  methods: {
    getRoomDetailsList(roomDetails) {
      axios.get(`${process.env.VUE_APP_BASE_URL}/${roomDetails}`).then(res => {
        const roomDetailsList = res.data.roomDetails
        this.roomDetailsList = roomDetailsList
      })
    }
  }
}
</script>
