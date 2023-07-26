<template>
  <div class="sticky top-0 px-3 border h-12 hidden max-sm:flex max-sm:items-center max-sm:justify-between"
    @click="goBack">
    <!-- 左侧内容 -->
    <div>
      <IconLeftArrow class="w-5 h-5 text-black" />
    </div>
    <!-- 中间内容 -->
    <div class="text-lg">
      <span>{{ title }}</span>
    </div>
    <!-- 右侧内容 -->
    <div class="w-5"></div>
  </div>
</template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router';
import IconLeftArrow from '../Icon/LeftArrow.vue';

defineProps({
  title: String,
});

const router = useRouter();

const goBack = () => {
  router.go(-1); // 返回上一页
}
</script>
  
  