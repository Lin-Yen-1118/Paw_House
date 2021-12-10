<template>
  <div class="products_items">
    <img
      :src="require(`../assets/images/products/${products.imgUrl}`)"
      alt="商品圖片"
      title="好吃食物"
    />
    <div class="products_content">
      <h4>{{ products.Product_Name }}</h4>
      <p>{{ products.Commodity_Information }}</p>
      <p>商品規格:{{ products.Product_Ecification }}</p>
      <div class="price">${{ products.Price }}</div>
    </div>
    <div class="count_box">
      <p>數量</p>
      <div class="amount">
        <button id="decrease_btn" class="count_btn" @click="decrease">-</button>
        {{ amount }}
        <button id="increase_btn" class="count_btn" @click="increase">+</button>
      </div>
    </div>
    <div class="delete_box">
      <div class="delete">
        <button id="del_btn" class="del_btn" @click="delCartList(products.Id)">刪除</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    products: {
      type: Object,

      default() {
        return {}
      }
    }
  },

  data() {
    return {
      amount: 1
    }
  },

  methods: {
    decrease() {
      this.amount -= 1
      this.amount < 0 ? (this.amount = 0) : 0
    },

    increase() {
      this.amount += 1
    },

    delCartList(id) {
      this.$store.commit('delCartList', id)
    },

    ...mapMutations(['delCartList'])
  },

  mounted() {
    this.amount
  },

  destroyed() {}
}
</script>
