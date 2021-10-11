<template>
    <div>
        <div class="products_descript_box">
            <div class="products_descript">
                <h4>本館販售嚴選毛孩鮮食、點心，讓毛孩吃得健康又安心</h4>
            </div>
        </div>
        <div class="products_box">
            <div class="products_box_content" v-for="(item, index) in productsList" :key="index">
                <item :products="item"></item>
            </div>
        </div>
    </div>
</template>
<script>
import item from './item.vue'
import axios from 'axios'
export default {
    name: 'products',
    watch: {},
    components: { item },

    data() {
        return {
            productsList: [],
        }
    },
    methods: {
        getproductsList(productsName) {
            axios.get(`${process.env.BASEURL}/products`).then((res) => {
                const productsList = res.data[productsName]
                this.productsList = productsList
                console.log(this.productsList)
            })
        },
    },
    mounted() {
        const productsName = this.$route.name
        this.getproductsList(productsName)
    },
    destroyed() {},
    computed: {},
}
</script>
<style lang="scss" scoped>
@import '@/scss/products.scss';
</style>
