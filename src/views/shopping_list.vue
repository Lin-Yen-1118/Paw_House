<template>
    <div>
        <span v-show="getProductList.length === 0">您的購物車目前無品項 !</span>
        <div v-show="getProductList.length !== 0" class="container">
            <!-- 購買明細 -->
            <Item v-for="(item, index) in getProductList" :key="index" :products="item"></Item>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Item from './cartListItem.vue'
export default {
    name: 'products',
    watch: {},
    components: { Item },

    data() {
        return {}
    },
    computed: {
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters([
            'getProductList',
            // ...
        ]),
    },
    mutation: {},
}
</script>

<style lang="scss" scoped>
@import '@/scss/cart.scss';
</style>
