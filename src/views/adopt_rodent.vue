<template>
    <div>
        <!-- 前導文字 -->
        <div class="lead_text"><h3>這裡有許多浪浪在等家，趕快來預約互動吧</h3></div>

        <!-- 天竺鼠 |  倉鼠 分頁 -->

        <div class="adopt_pagination_box_selecter">
            <ul class="pagination_selecter">
                <li>
                    <router-link :class="$route.name === 'guineapigs' ? 'active' : ''" id="adoptRodentPage1" to="/adopt_guineapigs"><p>天竺鼠</p></router-link>
                </li>
                <li>
                    <router-link :class="$route.name === 'hamsters' ? 'active' : ''" id="adoptRodentPage2" to="/adopt_hamsters"><p>倉鼠</p></router-link>
                </li>
            </ul>
        </div>
        <router-view />
    </div>
</template>
<script>
export default {
    name: 'adopt_rodent',
}
</script>
<style lang="scss" scoped>
@import '@/scss/adopt.scss';
</style>
