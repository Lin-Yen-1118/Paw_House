<template>
  <div>
    <!-- banner -->
    <div class="pre_box">
      <div class="pre_box_content">
        <div class="pre_item_pic">
          <div class="pre_txt">
            <p>我在盼窩等家，等你</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 領養區 -->
    <div class="index_adopt_box">
      <!-- 標題 -->
      <div class="index_adopt_box_title">
        <h2>等家毛孩</h2>
      </div>
      <!-- 認養區塊 -->
      <AdoptBox />
    </div>

    <!-- 住宿服務 -->
    <div class="index_room_box">
      <div class="room_title">
        <h2>住宿服務</h2>
      </div>
      <Room />
    </div>
    <!-- 寵物服務 -->
    <div class="index_petroom_box">
      <div class="room_title">
        <h2>寵物寄宿服務</h2>
      </div>
      <PetRoom />
    </div>

    <!-- 協助我們-助糧計畫、小小志工 -->
    <div class="other_box">
      <div class="index_give_help_box">
        <div class="other_box_title">
          <h2>協助毛孩生活更美好</h2>
        </div>

        <div class="index_give_help">
          <div class="index_give_help_main">
            <a href="./adopt.html">
              <img
                src="../assets/images/bg/food_aid.jpg"
                alt="毛孩助糧計畫"
                title="點擊看助糧計劃詳情"
              />
              <div class="index_give_help_txt">
                <h3>助糧計劃</h3>
                <div class="give_help_txt_content">
                  <p>
                    助糧，
                    <span class="index_give_help_main_text">不</span>
                    捐款
                  </p>
                  <p>
                    最
                    <span class="index_give_help_main_text">食</span>
                    在的幫助
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="index_give_help_main">
            <a href="./adopt.html">
              <img src="../assets/images/bg/volunteer.jpg" alt="小小志工" title="點擊看志工詳情" />
              <div class="index_give_help_txt">
                <h3>小小志工</h3>
                <div class="give_help_txt_content">
                  <p>想親身照顧這些毛孩們嗎?</p>
                  <p>歡迎報名當小小志工</p>
                  <p>來被毛孩的純真融化</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdoptBox from '@/components/homeComponents/AdoptBox.vue'

import Room from '@/components/homeComponents/Room.vue'
import PetRoom from '@/components/homeComponents/PetRoom.vue'

export default {
  components: { AdoptBox, Room, PetRoom },
  data() {
    return {}
  },

  computed: {},
  mounted() {}
}
</script>
