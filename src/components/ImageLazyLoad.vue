<template>
  <div class="lazy-image" ref="lazyImageContainer">
    <div class="image-content">
      <img v-if="isVisible" :src="src" :alt="alt" @load="onImageLoad" @error="onImageError" />
      <div v-else class="placeholder">
        <RectFrame />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import RectFrame from './Frame/Rect.vue';

interface ImageLazyLoadProps {
  src: string;
  alt: string;
  width: string;
  height: string;
}

defineProps<ImageLazyLoadProps>();


const lazyImageContainer = ref<HTMLElement | null>(null);
const isVisible = ref(false);


onMounted(() => {
  const observer = new IntersectionObserver(onIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  if (lazyImageContainer.value) {
    observer.observe(lazyImageContainer.value);
  }
});

onUnmounted(() => {
  const observer = new IntersectionObserver(onIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  if (lazyImageContainer.value) {
    observer.unobserve(lazyImageContainer.value);
  }
});

const onIntersection = (entries: IntersectionObserverEntry[]) =>{
  setTimeout(()=> {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  }, 300)
}

const onImageLoad = () => {
  
  isVisible.value = true;
}

const onImageError = () => {
  // 图片加载失败的逻辑
}
</script>

<style>
.lazy-image {
  overflow: hidden;
  height: 100%;
}

.image-content {
  height: 100%;
  width: 100%;
}

.lazy-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder {
  /* background-color: #f5f5f5; */
  height: 100%;
}
</style>
