<template>
    <div class="products_items">
        <img :src="require(`../assets/images/${$route.name}/${products.imgUrl}`)" alt="商品圖片" title="好吃食物" />
        <div class="products_content">
            <h4>{{ products.Product_Name }}</h4>
            <p>{{ products.Commodity_Information }}</p>
            <p>商品規格:{{ products.Product_Ecification }}</p>
            <div class="price">${{ products.Price }}</div>
        </div>
        <div class="count_box">
            <p>數量</p>
            <div class="count">
                <button class="count_btn" id="decrease_btn" @click="decrease">-</button>
                {{ count }}
                <button class="count_btn" id="increase_btn" @click="increase">+</button>
            </div>
        </div>
        <div class="buying_button" @click="add_cart">
            <input type="button" value="加入購物車" name="buying_button" />
        </div>
    </div>
</template>
<script>
// import { mapGetters, mapMutations } from 'vuex'
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            count: 1,
        }
    },
    props: {
        products: {
            type: Object,
            // Object or array defaults must be returned from
            // a factory function
            default: function() {
                return {}
            },
        },
    },
    methods: {
        decrease() {
            this.count = this.count - 1
            this.count < 0 ? (this.count = 0) : 0

            // if(this.count < 0){
            //    (this.count = 0)
            // }else{
            //   return
            // }
        },
        increase() {
            this.count = this.count + 1
        },
        add_cart() {
            let products = this.products
            products.count = this.count
            this.$store.commit('increment', products)
        },
        ...mapMutations({
            add: 'increment', // 将 `this.add()` 映射为 `this.$store.commit('increment')`
        }),
    },
    mounted() {},
    destroyed() {},
    // computed: {
    //     // 使用对象展开运算符将 getter 混入 computed 对象中
    //     ...mapGetters([
    //         'getProductList',
    //         // ...
    //     ]),
    // },
}
</script>
<style lang="scss" scoped>
@import '@/scss/products.scss';
</style>
