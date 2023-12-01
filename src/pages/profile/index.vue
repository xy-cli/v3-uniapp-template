<template>
  <view>
    <u-picker :show="show" :columns="columns"></u-picker>
    <u-button @click="show = true">打开</u-button>
    <button @click="toPath">回首页</button>
  </view>
</template>

<script setup>
import { ref, reactive } from 'vue';

const show = ref(false);
const columns = reactive([
  ['中国', '美国', '日本']
]);
const toPath = () => {
  uni.switchTab({
    url: '/pages/home/index'
  })
}
</script>
