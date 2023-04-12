<template>
  <div class="rc flex-column wrap">
    <h1>DEMO：导出PDF</h1>
    <!-- 容器调整PDF打印样式 -->
    <div class="content" id="pdfDom">
      <el-table :data="tableData" border>
        <el-table-column prop="date" label="日期" width="180" align="center"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center"> </el-table-column>
        <el-table-column prop="address" label="地址" align="center"> </el-table-column>
      </el-table>
    </div>
    <el-button class="btn" type="primary" @click="exportFile">导出PDF</el-button>
  </div>
</template>

<script>
export default {
  name: 'Pdf',
  components: {},
  data() {
    return {
      pdfTitle: 'pdf-name',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },

  methods: {
    exportFile() {
      this.getPdf('pdfDom', this.pdfTitle)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 10px;
}
.btn {
  margin-top: 6px;
  align-self: flex-end;
}
.content {
  width: 80vw;
  padding: 20px;
}
</style>
