<template>
  <div class="app_container">
    <div class="binary_time_box">
      <div class="time_colum" v-for="i in binaryTime">
        <div class="time_point" :class="{ active: j == 1 }" v-for="j in i"></div>
      </div>
    </div>
    <div class="decimal_time_box" v-if="props.showDec">
      {{ decimalTime }}
    </div>
  </div>
</template>

<script>
export default { name: 'BinaryClock' }
</script>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  showSec: Boolean,
  showDec: Boolean
})


let binaryTime = ref(
  props.showSec
    ? [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    : [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
)

let decimalTime = ref(props.showSec ? '00 : 00 : 00' : '00 : 00')

onMounted(() => {
  setInterval(() => {
    let hours = new Date().getHours(), minutes = new Date().getMinutes(), seconds = new Date().getSeconds();
    let a = binary4b(Math.floor(hours / 10)),
      b = binary4b((hours % 10)),
      c = binary4b(Math.floor(minutes / 10)),
      d = binary4b(minutes % 10),
      e = binary4b(Math.floor(seconds / 10)),
      f = binary4b(seconds % 10);
    decimalTime.value = props.showSec ? `${convert2twoDigits(hours)} : ${convert2twoDigits(minutes)} : ${convert2twoDigits(seconds)}` : `${convert2twoDigits(hours)} : ${convert2twoDigits(minutes)}`
    binaryTime.value = props.showSec
      ? [[...a], [...b], [...c], [...d], [...e], [...f]]
      : [[...a], [...b], [...c], [...d]]
  }, 1000)
})

const convert2twoDigits = (num) => (num + '').padStart(2, '0')

// 转换成4位二进制字符串
const binary4b = (num) => num.toString(2).padStart(4, 0)

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
  /* font-family: Arial, sans-serif; */
  /* font-family: -apple-system, BlinkMacSystemFont, "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif !important; */
}

.binary_time_box {
  display: flex;
}

.time_colum:nth-child(3),
.time_colum:nth-child(5) {
  margin-left: 7px;
}

.time_point {
  width: 30px;
  height: 30px;
  margin: 6px 3px;
  border-radius: 4px;
  background-color: rgba(128, 128, 128, .7);
  transition: .5s;
}

.time_point.active {
  background-color: #fff;
  box-shadow: rgba(255, 255, 255, .5) 1px 1px 3px;
}

.decimal_time_box {
  text-align: center;
  font-size: 40px;
  /* font-weight: bolder; */
}
</style>