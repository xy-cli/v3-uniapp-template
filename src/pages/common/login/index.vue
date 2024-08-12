<template>
  <view>
    <view class="login-form-wrap">
      <view class="title"> 欢迎登录</view>
      <up-input v-model="tel" class="tel" placeholder="请输入手机号" type="number" />
      <up-input v-model="code" class="code" placeholder="请输入验证码" type="number" />
      <button class="login-btn" :style="[inputStyle]" @tap="submit">
        登录
        <text class="i-mdi-login" />
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { CSSProperties } from "vue";
import { useUserStore } from "@/stores/modules/user";

const userStore = useUserStore();
const tel = ref<string>("18502811111");
const code = ref<string>("1234");

const inputStyle = computed<CSSProperties>(() => {
  const style = {} as CSSProperties;
  if (tel.value && code.value) {
    style.color = "#fff";
    style.backgroundColor = uni.$u.color.warning;
  }
  return style;
});

function submit() {
  if (uni.$u.test.mobile(tel.value)) {
    userStore.setToken("123456789");
    uni.reLaunch({ url: "/pages/tab/home/index" });
  }
}
</script>

<style lang="scss" scoped>
.login-form-wrap {
  margin: 80rpx 0 0;
  padding: 0 30rpx;

  .title {
    font-size: 60rpx;
    font-weight: bold;
    text-align: left;
    margin-bottom: 100rpx;
  }

  .tel,
  .code {
    margin-bottom: 30rpx;
  }
}
</style>
