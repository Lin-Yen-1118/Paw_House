<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },

  props: {},
  data() {
    return {}
  },

  computed: {},
  mounted() {},

  methods: {}
}
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>
