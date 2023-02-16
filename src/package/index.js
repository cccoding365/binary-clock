import BinaryClock from "../package/BinaryClock/index.vue"; // 引入封装好的组件

const coms = [BinaryClock]; // 将来如果有其它组件,都可以写到这个数组里

export default {
  install(Vue) {
    coms.forEach((com) => {
      Vue.component(com.name, com);
    });
  }
}