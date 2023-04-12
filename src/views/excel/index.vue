<template>
  <div class="rc flex-column wrap">
    <h1>DEMO：导出EXCEL</h1>

    <div class="content" id="excelDom" style="width: 80%">
      <el-table :data="tableData" style="width: 80%" border>
        <el-table-column prop="date" label="日期" width="180" align="center"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center"> </el-table-column>
        <el-table-column prop="address" label="地址" align="center"> </el-table-column>
      </el-table>
    </div>
    <div>
      <el-button class="btn" type="primary" @click="exportDom">DOM导出EXCEL</el-button>
      <el-button class="btn" type="primary" @click="exportNew">定义样式导出EXCEL</el-button>
    </div>
    <div class="content-2" id="complexExcelDom" style="width: 80%">
      <el-table :data="complexTable" style="width: 100%">
        <el-table-column prop="date" label="日期" width="150"> </el-table-column>
        <el-table-column label="配送信息">
          <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
          <el-table-column label="地址">
            <el-table-column prop="province" label="省份" width="120"> </el-table-column>
            <el-table-column prop="city" label="市区" width="120"> </el-table-column>
            <el-table-column prop="address" label="地址" width="300"> </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table>
      <el-button class="btn" type="primary" @click="exportComplexExcel"> 导出复杂EXCEL </el-button>
    </div>
  </div>
</template>
<script>
import FileSaver from 'file-saver'
import * as XLSX from 'xlsx'
import * as XLSXD from 'xlsx-style-fixedver'

export default {
  name: 'Excel',
  components: {},
  data() {
    return {
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
      ],
      complexTable: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ],
      msgList: [
        {
          name: '张三',
          age: 16,
          sex: '男'
        },
        {
          name: '李四',
          age: 16,
          sex: '男'
        },
        {
          name: '王五',
          age: 16,
          sex: '男'
        }
      ]
    }
  },

  methods: {
    exportDom() {
      // 设置当前日期
      let time = new Date()
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      let name = year + '' + month + '' + day

      // 导出DOM
      const wb = XLSX.utils.table_to_book(document.getElementById('excelDom'))
      wb['!cols'] = [{ wch: 50 }, { wch: 20 }, { wch: 40 }]

      /* get binary string as output */
      const wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      })
      try {
        //  excel表格名字
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), name + '.xlsx')
      } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout)
      }
      return wbout
    },

    exportNew() {
      let wb = XLSX.utils.book_new()
      let contentWs = XLSX.utils.json_to_sheet(this.complexTable)

      //这里遍历单元格给单元格对象设置属性,s为控制样式的属性
      Object.keys(contentWs).forEach(key => {
        if (key.indexOf('!') < 0) {
          contentWs[key].s = {
            alignment: {
              //对齐方式
              horizontal: 'center', //水平居中
              vertical: 'center', //竖直居中
              wrapText: true, //自动换行
              sz: 13
            },
            font: {
              name: '宋体'
            }
          }
        }
      })

      contentWs['!rows'] = [{ hch: 50 }]
      contentWs['!cols'] = [
        { wch: 20 },
        { wch: 10 },
        { wch: 10 },
        { wch: 10 },
        { wch: 50 },
        { wch: 10 }
      ]

      XLSX.utils.book_append_sheet(wb, contentWs, '人员明细表')
      // 使用xlsx-style写入文件方式,使得自定义样式生效
      const tmpDown = new Blob([
        this.s2ab(
          XLSXD.write(wb, {
            bookType: 'xlsx',
            bookSST: true,
            type: 'binary',
            cellStyles: true
          })
        )
      ])
      this.downExcel(tmpDown, 'excel-name.xlsx')
    },

    exportComplexExcel() {
      let time = new Date()
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      let name = year + '' + month + '' + day + 'complexTable'

      const wb = XLSX.utils.table_to_book(document.getElementById('complexExcelDom'))
      console.log(' exportComplexExcel >> wb:', wb)

      /* get binary string as output */
      const wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      })

      try {
        //  name+'.xlsx'表示导出的excel表格名字
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), name + '.xlsx')
      } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout)
      }
      return wbout
    },

    // 自定义下载文件方法
    downExcel(obj, fileName) {
      const a_node = document.createElement('a')
      a_node.download = fileName
      if ('msSaveOrOpenBlob' in navigator) {
        window.navigator.msSaveOrOpenBlob(obj, fileName)
      } else {
        a_node.href = URL.createObjectURL(obj)
      }
      a_node.click()
      //
      setTimeout(() => {
        URL.revokeObjectURL(obj)
      }, 2000)
    },
    // 文件流转换
    s2ab(s) {
      if (typeof ArrayBuffer !== 'undefined') {
        const buf = new ArrayBuffer(s.length)
        const view = new Uint8Array(buf)
        for (let i = 0; i != s.length; ++i) {
          view[i] = s.charCodeAt(i) & 0xff
        }

        return buf
      } else {
        const buf = new Array(s.length)
        for (let i = 0; i != s.length; ++i) {
          buf[i] = s.charCodeAt(i) & 0xff
        }

        return buf
      }
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
  align-self: center;
}
.content {
  padding: 8px;
}
.content-2 {
  padding: 8px;
  .btn {
    margin-left: 50vw;
  }
}
</style>
