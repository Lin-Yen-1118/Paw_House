<template>
  <div id="app">
    <div class="cart_container">
      <!-- 頭 -->
      <div class="item_header">
        <!-- 固定的 -->

        <div class="item_header_title item_detail">品項</div>
        <div class="item_header_title amount">數量</div>
        <div class="item_header_title price">價格</div>
        <div class="item_header_title total">總價{{ unitPriceTotal }}</div>
        <div class="item_header_title delete">刪除</div>
      </div>
      <!-- 購買物的主體 -->
      <div>
        <shoppingList />
      </div>
    </div>
  </div>
</template>

<script>
import shoppingList from './shopping_list.vue'

export default {
  name: 'Cart',
  components: { shoppingList },

  data() {
    return {
      // productsList: [],
      unitPriceTotal: 0
    }
  },

  computed: {
    // 自動算總額
    // total: {
    //     get() {
    //         let total = 0
    //         this.itemList.forEach((item) => {
    //             console.log(item.price * item.amount)
    //             total += item.price * item.amount
    //             // total.toString();
    //             console.log('計算全部(get):', total)
    //         })
    //         return total
    //     },
    //     // val就是get平常返回的值
    //     // html值input往回打時
    //     // set(val) {
    //     //     this.total3 = val;
    //     //     console.log('set:', this.total3);
    //     // }
    // },
  },

  watch: {},

  methods: {}
}
</script>
