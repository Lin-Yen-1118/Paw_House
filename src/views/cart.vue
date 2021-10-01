<template>
    <div id="app">
        <div class="container">
            <!-- 頭 -->
            <div class="item_header">
                <!-- 固定的 -->
                <div class="item_detail">商品</div>
                <div class="price">單價</div>
                <div class="count">數量</div>
                <div class="amount">總計</div>
                <div class="operate">價格:{{ total }}</div>
            </div>

            <!-- 購買物的主體 -->
            <div class="item_header item_body" v-for="(item, index) in itemList" :key="item.id">
                <!-- 不斷重複的item開始 -->
                <div class="item_detail">
                    <img :src="item.imgUrl" alt="" />
                    <div class="name">{{ item.name }}</div>
                </div>

                <!-- 後面沒span -->
                <div class="price"><span>$</span>{{ item.price }}</div>
                <!--  -->
                <div class="count">
                    <button @click="handleSub(item)">-</button>
                    {{ item.count }}
                    <button @click="handlePlus(item)">+</button>
                </div>

                <!-- 總價 -->
                <div class="amount">{{ item.price * item.count }}</div>
                <div class="operate">
                    <button @click="delHandler(index)">刪除</button>
                </div>
                <!-- 不斷重複的item結束 -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cart',
    data() {
        return {
            itemList: [],
            count: 0,
            total3: 0,
        }
    },
    methods: {
        handleSub: function(item) {
            if (item.count >= 1) {
                item.count--
            }
        },
        handlePlus: function(item) {
            console.log('item:', item)
            item.count++
        },
        delHandler: function(index) {
            console.log(index)
            this.itemList.splice(index, 1)
        },
    },
    computed: {
        // 自動算總額
        total: {
            get() {
                let total = 0
                this.itemList.forEach((item) => {
                    console.log(item.price * item.count)
                    total += item.price * item.count
                    // total.toString();
                    console.log('計算全部(get):', total)
                })

                return total
            },
            // val就是get平常返回的值
            // html值input往回打時
            // set(val) {
            //     this.total3 = val;
            //     console.log('set:', this.total3);

            // }
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/cart.scss';
</style>
