<template>
  <view class="page-wrap">
    <view class="avatar">
      <up-avatar font-size="18" random-bg-color text="鱼"></up-avatar>
    </view>
    <view>
      <u-cell-group>
        <u-cell icon="rmb-circle" title="支付" is-link />
        <u-cell icon="star" title="收藏" is-link />
        <u-cell icon="photo" title="相册" is-link />
        <u-cell icon="coupon" title="卡券" is-link />
        <u-cell icon="heart" title="关注" is-link />
        <u-cell icon="setting" title="设置" is-link />
      </u-cell-group>
    </view>
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.avatar {
  @include flexCol(center);
  margin: 80rpx;
}
</style>
