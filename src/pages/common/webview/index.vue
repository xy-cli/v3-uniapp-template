<template>
  <view class="webview">
    <web-view v-if="url" style="height: 100vh" :src="url"/>
    <u-empty v-else mode="page" marginTop="100" text="链接配置错误"/>
  </view>
</template>

<script setup lang="ts">
const url = ref<string>('')

onLoad((params: any) => {
  url.value = params.url.includes('http') ? params.url : ''
})
</script>
