<template>
  <single-table :pageDef="pageDef" :dataList="dataList"></single-table>
</template>

<script>
  import SingleTable from "./SingleTable"

  export  default {
    data() {
      return {
        dataList:[
          {name:"Alice",sex:'M',age:18,birthday:"2001-01-01",address:"Chengdu"},
          {name:"Bob",sex:'F',age:20,birthday:"2002-01-01",address:"Shanghai"}
        ],
        pageDef: {
          tabDef: {
            isSelect: true, //是否可以多选
            isIndex: true,  //是否有序号
//        表格字段定义
            tabCols: [
              {label: "姓名", prop:"name", isSort: true},
              {label: "性别", prop:"sex", isSort: false,isFormat:true},
              {label: "年龄", prop:"age", isSort: true},
              {label: "生日", prop:"birthday", isSort: true},
              {label: "地址", prop:"address", isSort: true}
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
