<template>
  <div id="app">
    <div class="mid">
      <dropDown :select-data="selectData" :json-list="varenumList"></dropDown>
    </div>
    <div class="mid">
      <dropDown :select-data="selectData2" :json-list="varenumList"></dropDown>
    </div>
  </div>
</template>

<script>
import dropDown from "./components/select";

export default {
  components: { dropDown },
  name: "app",
  data() {
    return {
      varenumList: [
        {
          dicCode:'gender',
          discription:'性别',
          params:[
            {
              value:'0',
              name:'男'
            },
            {
              value:'1',
              name:'女'
            },
            {
              value:'2',
              name:'其它'
            }
          ]
        },
        {
          dicCode:'priority',
          discription:'优先级',
          params:[
            {
              value:'0',
              name:'忽略'
            },
            {
              value:'1',
              name:'低'
            },
            {
              value:'2',
              name:'中'
            },
            {
              value:'3',
              name:'高'
            },
            {
              value:'4',
              name:'紧急'
            }
          ]
        }
      ],
      selectData: {
        isSelect: '1', //0表格或1下拉框
        value: "1", //当前选中的
        dicCode: 'gender'
      },
      selectData2: {
        isSelect: '1', //0表格或1下拉框
        value: "", //当前选中的
        dicCode: 'priority'
      }
    };
  }
};
</script>

<style>
.mid {
  width: 300px;
  margin-top: 5px;
}
</style>
