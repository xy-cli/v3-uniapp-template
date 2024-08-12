<template>
  <view class="home">
    <view class="test" @click="test"> {{ title }}</view>
    <view>{{ userStore.token }}</view>
  </view>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/modules/user";
import { postMenu } from "@/api/modules/user";

const userStore = useUserStore();
const title = ref<string>("首页");

onShow(() => {
  console.log("<%=localName%>");
});
const test = () => {
  userStore.setToken("123456");
  postMenu({ id: 1 }).then(res => {
    console.log(res);
  });
};
</script>

<style scoped lang="scss">
.home {
  @include wh(100%, 100vh);
  @include flexCol(center);
  font-size: 40rpx;
}
</style>
