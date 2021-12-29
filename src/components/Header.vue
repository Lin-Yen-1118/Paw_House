<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">
          <img id="logo" src="../assets/images/svg/logo.svg" />
        </router-link>
      </div>
      <div class="nav_bar">
        <!-- 用input的checkbox與for特性做漢堡選單的選取器 -->
        <input id="burger" type="checkbox" name="" />
        <ul class="header_bar">
          <li v-for="(item, index) of menu" id="nav_menu" :key="index">
            <router-link :to="item.path">
              <span>
                <img id="introduction" :src="require(`../assets/images/svg/${item.icon}`)" />
              </span>
              <span>{{ item.title }}</span>
            </router-link>
            <ul class="adopt_menu_select_menu">
              <li
                v-for="(subMenu, subMenuIndex) of item.children"
                :key="subMenuIndex"
                class="adopt_menu_select"
              >
                <router-link :to="subMenu.path" class="link_style">
                  <span>{{ subMenu.title }}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div>
        <ul class="user_cart">
          <!-- 會員 -->
          <li>
            <router-link to="/user" class="link_style">
              <span>
                <img id="user" src=../assets/images/svg/user-circle-solid.svg />
              </span>
            </router-link>
          </li>
          <!-- 我的訂單 -->
          <li class="cart_list_box">
            <router-link to="/cart" class="link_style">
              <span>
                <span class="cart_list">{{ getProductLength }}</span>
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
  data() {
    return {
      menu: [
        {
          path: '/aboutUs',
          icon: 'dog01.svg',
          title: '民宿介紹',
          children: []
        },
        {
          path: '/',
          icon: 'cat01.svg',
          title: '我要認養',
          children: [
            {
              path: '/adopt_main',
              title: '認養須知'
            },
            {
              path: '/adopt_dog',
              title: '認養狗狗'
            },
            {
              path: '/adopt_cat',
              title: '認養貓貓'
            },
            {
              path: '/adopt_rabbit',
              title: '認養兔兔'
            },
            {
              path: '/adopt_rodent',
              title: '認養鼠鼠'
            }
          ]
        },
        {
          path: '/',
          icon: 'rabbit01.svg',
          title: '住宿相關',
          children: [
            {
              path: '/room',
              title: '一般住宿'
            },
            {
              path: '/pet_accommodation',
              title: '毛孩寄宿'
            }
          ]
        },
        {
          path: '/products',
          icon: 'mouse01.svg',
          title: '周邊商品',
          children: []
        }
      ]
    }
  },

  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'getProductLength'
      // ...
    ])
  }
}
</script>
