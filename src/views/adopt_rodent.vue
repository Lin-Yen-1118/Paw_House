<template>
  <div>
    <!-- 天竺鼠 |  倉鼠 分頁 -->
    <div class="adopt_pagination_box_selecter">
      <ul class="pagination_selecter">
        <li>
          <router-link
            id="adoptRodentPage1"
            :class="$route.name === 'guineapigs' ? 'active' : ''"
            to="/adopt_guineapigs"
          >
            <p>天竺鼠</p>
          </router-link>
        </li>
        <li>
          <router-link
            id="adoptRodentPage2"
            :class="$route.name === 'hamsters' ? 'active' : ''"
            to="/adopt_hamsters"
          >
            <p>倉鼠</p>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AdoptRodent'
}
</script>
