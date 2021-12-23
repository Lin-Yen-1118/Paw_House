<template>
  <div class="index_room_content">
    <div v-for="(item, index) of roomItemList" :key="index" class="index_room_item">
      <div class="index_room">
        <router-link to="/room">
          <div class="room_item">
            <div class="room_pic">
              <img :src="item.imgSrc" :title="item.title" :alt="item.alt" />
            </div>
            <div class="room_link" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Room',
  data() {
    return {
      roomItemList: [
        {
          routeName: 'bookingroom_peopleroom',
          imgSrc: require('../../assets/images/room/room26.jpg'),
          title: '住宿',
          alt: '住宿'
        },
        {
          routeName: 'bookingroom_peopleroom',
          imgSrc: require('../../assets/images/room/room24.jpg'),
          title: '住宿',
          alt: '住宿'
        },
        {
          routeName: 'bookingroom_peopleroom',
          imgSrc: require('../../assets/images/room/room23.jpg'),
          title: '住宿',
          alt: '住宿'
        },
        {
          routeName: 'bookingroom_peopleroom',
          imgSrc: require('../../assets/images/room/room25.jpg'),
          title: '住宿',
          alt: '住宿'
        }
      ]
    }
  }
}
</script>
