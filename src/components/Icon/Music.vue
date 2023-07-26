<template>
 <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  stroke="none"
  fill="currentColor"
  class="music-icon"
  :class="{ 'animate-spin-slow': true , 'paused': isMusicPlaying}"
>
  <path
    d="M12 22a2 2 0 01-1.682-3L12 16c1.105 0 2-.895 2-2V6a2 2 0 00-3.294-1.555l-3.002 3.36A2 2 0 106.294 9.554L9.296 6.19A2 2 0 007 6v8c0 3.307 2.692 6 6 6zM6 12a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z"
  />
</svg>

</template>
<script setup lang="ts">
defineProps({
    isMusicPlaying: Boolean,
});
</script>
<style scoped>
.paused {
    animation-play-state: paused
}
</style>