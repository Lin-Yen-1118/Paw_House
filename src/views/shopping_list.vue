<template>
  <div class="shoppiin_list_box">
    <span v-show="getProductList.length === 0">您的購物車目前無品項 !</span>
    <div v-show="getProductList.length !== 0" class="container">
      <!-- 購買明細 -->
      <Item v-for="(item, index) of getProductList" :key="index" :products="item" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from './cartListItem.vue'

export default {
  name: 'Products',
  components: { Item },

  data() {
    return {}
  },

  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'getProductList'
      // ...
    ])
  },

  watch: {},
  mutation: {}
}
</script>
