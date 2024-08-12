<template>
  <view class="webview">
    <web-view v-if="url" :src="url" style="height: 100vh" />
    <u-empty v-else margin-top="100" mode="page" text="链接配置错误" />
  </view>
</template>

<script setup lang="ts">
const url = ref<string>("");

onLoad((params: any) => {
  url.value = params.url.includes("http") ? params.url : "";
});
</script>
