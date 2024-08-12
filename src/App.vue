<script setup lang="ts">
import { mpUpdate } from '@/utils/index'

onLaunch(() => {
  console.log("App Launch");
  // #ifdef MP
  mpUpdate()
  // #endif
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
@import "uview-plus/index.scss";
</style>
