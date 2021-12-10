<template>
  <div>
    <div class="products_descript_box">
      <div class="products_descript">
        <h4>本館販售嚴選毛孩鮮食、點心，讓毛孩吃得健康又安心</h4>
      </div>
    </div>
    <div class="products_box">
      <div v-for="(item, index) of productsList" :key="index" class="products_box_content">
        <item :products="item" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import item from './item.vue'

export default {
  name: 'Products',
  components: { item },

  data() {
    return {
      productsList: []
    }
  },

  computed: {},

  watch: {},

  mounted() {
    const productsName = this.$route.name
    this.getproductsList(productsName)
  },

  destroyed() {},

  methods: {
    getproductsList(productsName) {
      axios.get(`${process.env.VUE_APP_BASE_URL}/products`).then(res => {
        const productsList = res.data[productsName]
        this.productsList = productsList
        console.log(this.productsList)
      })
    }
  }
}
</script>
