<template>
  <router-view />
</template>
<script setup lang="ts">
import Dialog from './components/Modal'
import CookieTip from './components/CookieTip'

//模拟弹窗
Dialog({ title: '提示', message: '还未登录,请登录!' });
CookieTip({});
</script>
