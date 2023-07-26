<template>
  <div>
    <audio ref="audio" :src="musicUrl" autoplay="autoplay" loop />
  </div>
</template>
  
<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  musicUrl: String, //音乐地址
  isPlaying: Boolean, //播放状态
});

// 获取 audio 元素的引用
const audioRef = ref(null);

onMounted(() => {
  audioRef.value = document.querySelector('audio');
});

// 监听 isPlaying 状态的变化
watch(
  () => props.isPlaying,
  (newValue) => {
    if (!newValue) {
      onPlay();
    } else {
      onPause();
    }
  }
);

// 音乐播放方法
const onPlay = () => {
  if (audioRef.value) {
    audioRef.value.play();
  }
}

// 音乐暂停方法
const onPause = () => {
  if (audioRef.value) {
    audioRef.value.pause();
  }
}

</script>
  