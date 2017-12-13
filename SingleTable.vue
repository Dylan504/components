<template>
  <section>
    <!--工具条-->
    <!--<el-col :span="24" >-->
      <!--<el-form :inline="true">-->
        <!--<el-form-item>-->
          <!--<el-input  placeholder="姓名"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
          <!--<el-button type="primary" >查询</el-button>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
          <!--<el-button type="primary" >新增</el-button>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
    <!--</el-col>-->

    <!--列表-->
    <el-table highlight-current-row v-loading="listLoading" >

      <el-table-column v-if="pageDef.tabDef.isSelect" type="selection" width="55">
      </el-table-column>
      <el-table-column v-if="pageDef.tabDef.isIndex" type="index" width="60">
      </el-table-column>
      <template v-for="tabCol in pageDef.tabDef.tabCols">
        <template v-if="tabCol.isSort">
          <el-table-column :label="tabCol.label" sortable>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column :label="tabCol.label">
          </el-table-column>
        </template>
      </template>
      <el-table-column label="操作" width="150">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
  export default {
    props:['pageDef'],
    data(){
      return {
        listLoading: false
      }
    }
  }
</script>
<style>
  .el-main {
    background-color: #409EFF;
    /*color: #333;*/
    text-align: center;
  }
</style>
