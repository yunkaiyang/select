<template>
  <div class="dropdown" v-if="selectData.isSelect == '1'">
    <div class="dropdown-header" @click.stop="showDataList">
      <i :class="{rotate:showData}" class="icon-sanjiao"></i>
      <p class="dropdown-text dropdown-selected" :class="{isColor:selectSelection}">{{msg}}</p>
    </div>
    <collapse-transition>
    <div class="dorpdown-con" v-if="showData">
      <ul class="dropdown-select">
        <li class="item" v-for="(item, index) in dataList.params" 
          :class="{liactive:selectData.value==item.value}"
          @click.stop="select(item.name, item.value)">{{item.name}}</li>
      </ul>
    </div>
    </collapse-transition>
  </div>
  <div v-else>
    <span>{{msg}}</span>
  </div>
</template>
<script>
import collapseTransition from "./CollapseTransition";
export default {
  components: { collapseTransition },
  data() {
    return {
      dataList:[],
      msg:"",
      showData: false, //下拉隐藏状态
      selectSelection: false //选中的颜色
    };
  },
  props: {
    jsonList: Array,
    selectData: {
      type:Object,
      default: function(){
        return {
          isSelect: '1', //0表格或1下拉框
          value: "0", //当前选中的
          dicCode: 'gender'
        } 
      }
    }
  },
  mounted() {
    let self = this;
    this.jsonList.forEach(function(v,i){
      if(self.selectData.dicCode == v.dicCode){
        self.dataList = v;
        self.msg = v.discription;
        v.params.forEach(function(v2,i2){
          if(v2.value == self.selectData.value){
            self.msg = v2.name;
          }
        });
      }
    });
    document.addEventListener("click", e => {
      e.stopPropagation();
      if (self.showData == true) {
        self.showData = !self.showData;
      }
      self.selectSelection = false;
      // let dn = document.querySelectorAll(".dorpdown-con");
      // [].forEach.call(dn, function(div) {
      //   div.style.display = "none";
      // });
    });
  },
  methods: {
    showDataList: function() {
      this.showData = !this.showData;
      this.selectSelection = true;
    },
    select: function(item, index) {
      this.selectData.value = index;
      this.msg = item;
      this.showData = !this.showData;
    }
  }
};
</script>
<style>
.dropdown li,
.dropdown p,
.dropdown ul {
  margin: 0;
  padding: 0;
}
.dropdown ul {
  list-style: none;
}
.dropdown-text {
  overflow: hvalueden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dropdown {
  background-color: #fff;
  position: relative;
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
.dropdown-header p {
  box-sizing: border-box;
  width: 100%;
  padding-right: 35px;
  padding-left: 10px;
  color: #495060;
  height: 32px;
  line-height: 32px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dddee1;
  transition: all 0.2s ease-in-out;
}
.dropdown-header p:hover {
  border-color: #57a3f3;
}
.dorpdown-con {
  position: absolute;
  left: 0;
  z-index: 1;
  width: 100%;
  height: auto;
  max-height: 200px;
  line-height: 30px;
  overflow-y: auto;
  overflow-x: hvalueden;
  background-color: #fff;
  box-sizing: border-box;
  margin: 5px 0;
  padding: 5px 0;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
}
.dropdown-select li {
  width: 100%;
  box-sizing: border-box;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  white-space: nowrap;
  overflow: hvalueden;
  text-overflow: ellipsis;
  color: #495060;
}
.dropdown-select li:hover {
  background: #f3f3f3;
}
.dropdown-header {
  position: relative;
}
.dropdown-header .icon-sanjiao {
  position: absolute;
  right: 13px;
  top: 50%;
  margin-top: -6px;
}
.dropdown-header .rotate {
  transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transition: all 0.5s;
}
.dropdown-header .isColor {
  border-color: #57a3f3;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
}
.dropdown-select li.liactive {
  background: rgba(40, 123, 211, 0.91);
  color: #fff;
}
.icon-sanjiao {
  height: 0px;
  width: 0px;
  border-top: 6px solid transparent;
  border-right: 6px solid #80848f;
  border-bottom: 6px solid transparent;
  transform: rotate(-90deg);
  transition: all 0.5s;
}
</style>

