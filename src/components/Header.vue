<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">
          <img id="logo" src="../assets/images/svg/logo.svg" />
        </router-link>
      </div>
      <!-- 在選取menu的router並導頁後，menu要隱藏起來 -->
      <!-- 在click父層menu的router後，menu如有子選單要展開 -->
      <div class="nav_bar">
        <ul class="header_bar" :class="menuVisible ? 'menu_open' : ''">
          <li
            v-for="(item, index) of menu"
            id="nav_menu"
            :key="index"
            class="menu"
            @click.self="
              toggleMenu(!menuVisible)
              item.path !== ''
            "
          >
            <router-link :to="item.path">
              <span>
                <img id="introduction" :src="require(`../assets/images/svg/${item.icon}`)" />
              </span>
              <span>{{ item.title }}</span>
            </router-link>
            <!-- 下拉選單 -->
            <!-- 在選取父層menu的router後，menu如有子選單要展開 -->

            <ul class="select_menu " :class="menuVisible ? 'child_menu_open' : ''">
              <li
                v-for="(subMenu, subMenuIndex) of item.children"
                :key="subMenuIndex"
                class="select_menu_item"
                @click="
                  toggleMenu(!menuVisible)
                  item.children.length !== 0
                "
              >
                {{ item.value }}
                <router-link :to="subMenu.path" class="link_style">
                  <span>{{ subMenu.title }}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!--購物車訂單與會員--->
      <!-- 如果先點擊burgermenu才點擊"購物車"、"會員"，burgermenu要自動隱藏 -->
      <div>
        <ul class="user_cart">
          <!-- 會員 -->
          <li @click="toggleMenu(false)">
            <router-link to="/user" class="link_style">
              <span>
                <img id="user" src=../assets/images/svg/user-circle-solid.svg />
              </span>
            </router-link>
          </li>
          <!-- 我的訂單 -->
          <li class="cart_list_box" @click="toggleMenu(false)">
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
      <div class="nav_menu_burger">
        <!-- <button class="show_menu" @click="visible = !visible" /> -->
        <button class="show_menu" @click="toggleMenu(!menuVisible)" />
        <transition>
          <div id="burger_menu" :class="menuVisible ? 'ham_transition' : ''">
            <div class="bgr_bar top" />
            <div class="bgr_bar middle" />
            <div class="bgr_bar bottom" />
          </div>
        </transition>
      </div>
    </nav>
    <!-- mask -->
    <!-- 當menu出現時，也出現mask -->
    <!-- 當click mask，manu跟mask都close -->
    <div :class="menuVisible ? 'side_mask' : ''" @click="toggleMenu(!menuVisible)" />
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

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
          path: '',
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
          path: '',
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
    // ...mapGetters(['getProductLength']),
    ...mapGetters('ui', ['menuVisible']),
    ...mapGetters(['getProductLength'])
  },

  methods: {
    ...mapMutations('ui', ['toggleMenu'])
    // ...mapMutations('product', ['getProductLength'])
  }
}
</script>
