<template>
  <div class="products_items">
    <div class="products_content_box">
      <img
        :src="require(`../assets/images/${$route.name}/${products.imgUrl}`)"
        alt="商品圖片"
        title="好吃食物"
      />

      <div class="products_content">
        <h4>{{ products.Product_Name }}</h4>
        <p>{{ products.Commodity_Information }}</p>
        <p>商品規格:{{ products.Product_Ecification }}</p>
      </div>
    </div>
    <div class="count_buying_box">
      <div class="count_box">
        <p>數量</p>
        <div>
          <button id="decrease_btn" class="count_btn" @click="decrease">-</button>
          <span class="amount">{{ amount }}</span>
          <button id="increase_btn" class="count_btn" @click="increase">+</button>
        </div>
        <div class="price">${{ products.Price }}</div>
      </div>
      <div class="buying_button" @click="add_cart">
        <input type="button" value="加入購物車" name="buying_button" />
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapMutations } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  props: {
    products: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function
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

      if (this.amount < 0) {
        this.amount = 0
      }
    },

    increase() {
      this.amount += 1
    },

    add_cart() {
      const { products } = this
      products.amount = this.amount
      this.$store.commit('increment', products)
    },

    ...mapMutations({
      add: 'increment'
    })
  }

  // mounted() {},
  // destroyed() {}

  // computed: {
  //
  //     ...mapGetters([
  //         'getProductList',
  //         // ...
  //     ]),
  // },
}
</script>
