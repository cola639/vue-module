<template>
  <div class="flex-center img_wrap">
    <img v-for="img in imglist" v-lazy="img.src" />
  </div>
</template>
<script>
export default {
  name: 'LazyImg',
  components: {},
  data() {
    return {
      imglist: []
    }
  },
  props: {},
  created() {
    for (let index = 0; index < 1000; index++) {
      this.imglist.push({
        name: 'Internet Pic',
        src: `http://placekitten.com/g/${300 + index}/${250 + index}`
      })
    }
  },
  mounted() {},
  beforeDestroy() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.img_wrap {
  width: 100%;
  img {
    width: 45%;
    margin: 6px 0 0 6px;
  }
}
</style>
