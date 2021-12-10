<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/"><img id="logo" src="../assets/images/svg/logo.svg" /></router-link>
      </div>
      <div class="nav_bar">
        <!-- 用input的checkbox與for特性做漢堡選單的選取器 -->
        <input id="burger" type="checkbox" name="" />
        <ul id="nav_menu" class="header_bar">
          <!-- 關於我 -->
          <li>
            <router-link to="/aboutUs">
              <span>
                <img id="introduction" src="../assets/images/svg/dog01.svg" />
              </span>
              <span>民宿介紹</span>
            </router-link>
          </li>
          <!-- 我要認養 -->
          <li class="adopt_menu">
            <router-link to="">
              <span>
                <img id="adoption" src="../assets/images/svg/cat01.svg" />
              </span>
              <span>我要認養</span>
            </router-link>

            <!-- 我要認養的下拉選單 -->
            <ul class="adopt_menu_select_menu">
              <li class="adopt_menu_select">
                <router-link to="/adopt_main" class="link_style"><span>認養須知</span></router-link>
              </li>
              <li class="adopt_menu_select">
                <router-link to="/adopt_dog" class="link_style"><span>認養狗狗</span></router-link>
              </li>
              <li class="adopt_menu_select">
                <router-link to="/adopt_cat" class="link_style"><span>認養貓貓</span></router-link>
              </li>
              <li class="adopt_menu_select">
                <router-link to="/adopt_rabbit" class="link_style">
                  <span>認養兔兔</span>
                </router-link>
              </li>
              <li class="adopt_menu_select">
                <router-link to="/adopt_rodent" class="link_style">
                  <span>認養鼠鼠</span>
                </router-link>
              </li>
              <li class="adopt_menu_select">
                <router-link to="/" class="link_style"><span>醫療團隊</span></router-link>
              </li>
            </ul>
          </li>
          <!-- 住宿相關 -->
          <li class="booking_rooms_menu">
            <router-link to="">
              <span>
                <img id="room" src="../assets/images/svg/rabbit01.svg" />
              </span>
              <span>住宿相關</span>
            </router-link>

            <!-- 住宿的下拉選單 -->
            <ul class="booking_rooms_menu_select_menu">
              <li class="booking_rooms_select">
                <router-link to="/room" class="link_style">
                  <span>一般住宿</span>
                </router-link>
              </li>
              <li class="booking_rooms_select">
                <router-link to="/pet_accommodation" class="link_style">
                  <span>毛孩寄宿</span>
                </router-link>
              </li>
            </ul>
          </li>
          <!-- 周邊商品 -->
          <li>
            <router-link to="/products" class="link_style">
              <span>
                <img id="merchandise" src="../assets/images/svg/mouse01.svg" />
              </span>
              <span>周邊商品</span>
            </router-link>
          </li>
        </ul>
      </div>

      <div>
        <ul class="user_cart">
          <!-- 會員 -->
          <li>
            <router-link to="/user" class="link_style">
              <span>
                <!-- <img id="user" src=../assets/images/svg/user-circle-solid.svg//////////> -->
              </span>
            </router-link>
          </li>
          <!-- 我的訂單 -->
          <li>
            <router-link to="/cart" class="link_style">
              <span>
                {{ getProductLength }}
                <img id="cart" src="../assets/images/svg/shopping-cart.svg" />
              </span>
            </router-link>
          </li>
        </ul>
      </div>
      <!--漢堡選單--->
      <!-- 用input的checkbox與for特性做漢堡選單的選取器 -->
      <label for="burger">
        <div class="burger_box">
          <div class="bgr_bar top" />
          <div class="bgr_bar middle" />
          <div class="bgr_bar bottom" />
        </div>
      </label>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'getProductLength'
      // ...
    ])
  }
}
</script>

<style lang="scss">
// @import '@/scss/header.scss';
</style>
