<template>
  <div class="index_petroom_content">
    <div v-for="(item, index) of petroomItemList" :key="index" class="index_petroom_item">
      <div class="index_petroom ">
        <router-link to="/pet_accommodation" />
        <!-- <a :href="item.routeName" /> -->
        <div class="petroom_item">
          <div class="petroom_pic">
            <img :src="item.imgSrc" :title="item.title" :alt="item.alt" />
          </div>
          <div class="petroom_link">
            <span :span="item.span">{{ item.span }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PetRoom',
  data() {
    return {
      petroomItemList: [
        {
          routeName: './room_dog.html',
          imgSrc: require('../../assets/images/pet_accommodation/02.jpg'),
          title: '狗狗寄宿',
          alt: '寵物住宿',
          span: '犬'
        },
        {
          routeName: './room_cat.html',
          imgSrc: require('../../assets/images/pet_accommodation/01.jpg'),
          title: '貓貓寄宿',
          alt: '寵物住宿',
          span: '貓'
        },
        {
          routeName: './room_rabbitANDguineapig.html',
          imgSrc: require('../../assets/images/pet_accommodation/07.jpg'),
          title: '兔兔寄宿',
          alt: '寵物住宿',
          span: '兔'
        },
        {
          routeName: './room_rabbitANDguineapig.html',
          imgSrc: require('../../assets/images/pet_accommodation/06.jpg'),
          title: '天竺鼠寄宿',
          alt: '寵物住宿',
          span: '天竺鼠'
        },
        {
          routeName: './room_hamster.html',
          imgSrc: require('../../assets/images/pet_accommodation/09.jpg'),
          title: '倉鼠寄宿',
          alt: '寵物住宿',
          span: '倉鼠'
        }
      ]
    }
  }
}
</script>
