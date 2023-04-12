<template>
  <div class="rc flex-column wrap">
    <el-button-group>
      <el-button round type="primary" @click="() => handleClick('lazyImg')">lazyImg</el-button>
      <el-button round type="primary" @click="() => handleClick('lazyImg')">lazyImg</el-button>
    </el-button-group>
    <div class="content">
      <lazy-img v-if="module === 'lazyImg'" />
    </div>
  </div>
</template>
<script>
import LazyImg from '../lazyImg'
export default {
  name: 'Home',
  data() {
    return {
      module: ''
    }
  },
  watch: {},
  computed: {},
  components: { LazyImg },
  methods: {
    handleClick(type) {
      console.log('type:', type)
      this.module = type
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap {
  padding: 10px;
}
.content {
  margin-top: 10px;
}
</style>
