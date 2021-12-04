<template>
    <div class="index_adopt_item_box">
        <div class="index_adopt_item " :class="item.isLeft ? 'index_adopt_left' : 'index_adopt_right'" v-for="(item, index) in adoptItemList" :key="index">
            <div class="adopt_pic ">
                <router-link :to="item.routeName">
                    <img :src="item.imgSrc" :title="item.title" :alt="item.alt" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdoptBox',
    data() {
        return {
            adoptItemList: [
                { routeName: 'adopt_dog', imgSrc: require('../../assets/images/bg/dog.jpg'), title: '待領養的狗狗', alt: '待領養的狗狗', isLeft: true },
                { routeName: 'adopt_cat', imgSrc: require('../../assets/images/bg/cat.jpg'), title: '待領養的貓貓', alt: '待領養的貓貓', isLeft: false },
                { routeName: 'adopt_rabbit', imgSrc: require('../../assets/images/bg/rabbit.jpg'), title: '待領養的兔兔', alt: '待領養的兔兔', isLeft: true },
                { routeName: 'adopt_rodent', imgSrc: require('../../assets/images/bg/hamster.jpg'), title: '待領養的鼠鼠', alt: '待領養的鼠鼠', isLeft: false },
                { routeName: 'adopt_guineapigs', imgSrc: require('../../assets/images/bg/guineapig.jpg'), title: '待領養的天竺鼠', alt: '待領養的天竺鼠', isLeft: true },
            ],
        }
    },
}
</script>
