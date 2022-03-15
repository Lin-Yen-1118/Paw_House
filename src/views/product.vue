<template>
  <div>
    <div class="products_descript_box">
      <div class="products_descript">
        <h4>本館販售嚴選毛孩鮮食、點心，讓毛孩吃得健康又安心</h4>
      </div>
    </div>
    <div class="products_box">
      <div v-for="(item, index) of products" :key="index" class="products_box_content">
        <item :products="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import item from './item.vue'

export default {
  name: 'Products',
  components: { item },

  data() {
    return {}
  },

  computed: {
    ...mapGetters('api', ['products'])
  },

  watch: {},

  mounted() {
    const productsName = this.$route.name
    this.getproducts(productsName)
  },

  destroyed() {},

  methods: {
    async getproducts(productsName) {
      await this.getproductsList(productsName)
    },

    ...mapActions('api', ['getproductsList'])
  }
}
</script>
