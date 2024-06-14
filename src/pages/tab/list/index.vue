<template>
  <view class="home">
    <view class="test">
      {{ title }}
    </view>
  </view>
</template>

<script setup lang="ts">
const title = ref<string>('列表')

onShow(() => {
  console.log('<%=localName%>')
})
</script>

<style scoped lang="scss">
.home{
  @include wh(100%, 100vh);
  @include flexCol(center);
  font-size: 40rpx;
}
</style>
