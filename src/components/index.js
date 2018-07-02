import vueDropDown from './select.vue'

const vDropDown = {
  install: function (Vue) {
    Vue.component('dropDown', vueDropDown)
  }
};

// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vDropDown)
}

export default vDropDown