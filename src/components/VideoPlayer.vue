<template>
  <div>
    <videoPlay v-bind="options" :poster="source" />
  </div>
</template>
  
<script setup lang="ts">
import { reactive } from 'vue';
import { videoPlay } from "vue3-video-play";
import "vue3-video-play/dist/style.css";
import CoverImg from '../assets/img-default.jpg'

const props = defineProps({
  videoUrl: String, // 视频地址
  coverImgUrl: String
});

//视频封面 可采用统一封面 
const source = props.coverImgUrl || CoverImg;

const options = reactive({
  width: "100%",
  height: "100%",
  color: "#409eff", //主题色
  title: "", //视频名称
  src: props.videoUrl, //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    // "pip",
    // "pageFullScreen",
    "fullScreen",
  ]
});
</script>

<style scoped>
.dplayer-container {
  @apply h-[380px];
}
</style>
  