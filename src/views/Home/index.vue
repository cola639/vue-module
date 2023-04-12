<template>
  <div class="rc flex-column wrap">
    <el-button-group>
      <el-button round type="primary" @click="() => handleClick('lazyImg')">lazyImg</el-button>
      <el-button round type="primary" @click="() => handleClick('pdf')">export pdf</el-button>
      <el-button round type="primary" @click="() => handleClick('excel')">export excel</el-button>
    </el-button-group>
    <div class="content">
      <lazy-img v-if="module === 'lazyImg'" />
      <pdf v-if="module === 'pdf'" />
      <excel v-if="module === 'excel'" />
    </div>
  </div>
</template>
<script>
import LazyImg from '../lazyImg' // img lazy load
import Pdf from '../pdf' // pdf
import Excel from '../excel' // excel
export default {
  name: 'Home',
  data() {
    return {
      module: ''
    }
  },
  watch: {},
  computed: {},
  components: { LazyImg, Pdf, Excel },
  methods: {
    handleClick(type) {
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
