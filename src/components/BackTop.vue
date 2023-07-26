<template>
  <button v-show="showButton" class="back-to-top-button" @click="scrollToTop" title="返回顶部">
    <slot>
      <IconTop  class="icon" />
    </slot>
  </button>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import IconTop from './Icon/Top.vue';
import { debounce } from 'lodash';

const showButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const debouncedHandleScroll = debounce(() => {
  showButton.value = window.scrollY > 100;
}, 200);

onMounted(() => {
  window.addEventListener('scroll', debouncedHandleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll);
});
</script>
  
<style scoped>
.back-to-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease;
}

.back-to-top-button:hover {
  background-color: #0056b3;
}

.icon {
  width: 24px;
  height: 24px;
}
</style>
  