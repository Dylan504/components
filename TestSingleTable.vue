<template>
  <single-table :pageDef="pageDef"></single-table>
</template>

<script>
  import SingleTable from "./SingleTable"

  export  default {
    data() {
      return {
        pageDef: {
          tabDef: {
            isSelect: true, //是否可以多选
            isIndex: true,  //是否有序号
//        表格字段定义
            tabCols: [
              {label: "姓名", isSort: true},
              {label: "性别", isSort: false},
              {label: "年龄", isSort: true},
              {label: "生日", isSort: true},
              {label: "地址", isSort: true}
            ]
          }
        }
      }
    },

    components: {
      SingleTable
    }
  }
</script>
