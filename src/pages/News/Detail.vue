<template>
    <BackBar title="详情" />
    <div v-if="newsData?.musicUrl" class="rotate-icon" @click="toggleMusic">
        <Music :isMusicPlaying="isPlaying" />
    </div>
    <main class="detail-wrap">
        <div v-if="newsData">
            <h2 class="title">{{ newsData.title }}</h2>
            <p class="content">{{ newsData.content }}</p>
            <!-- 视频播放器 -->
            <VideoPlayer v-if="newsData.videoUrl" :videoUrl="newsData.videoUrl"
                class="mb-4 h-[480px] max-md:h-[300px] max-sm:h-[200px]" />
            <!-- 音乐播放器 -->
            <AudioPlayer v-if="newsData.musicUrl" :musicUrl="newsData.musicUrl" :isPlaying="isPlaying" />
            <!-- 图片 -->
            <ImageLazyLoad :src="newsData.imageUrl" :alt="newsData.title" height="auto" width="100%" />
        </div>
        <div v-else>
            <!-- 可以显示加载中的提示或者其他处理 -->
            加载中...
        </div>
    </main>
    <BackTop />
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BackBar from '../../components/NavBar/BackBar.vue';
import Music from '../../components/Icon/Music.vue';
import ImageLazyLoad from '../../components/ImageLazyLoad.vue';
import VideoPlayer from '../../components/VideoPlayer.vue';
import AudioPlayer from '../../components/AudioPlayer.vue';
import BackTop from '../../components/BackTop.vue';
import { INewsDetail } from '../../types'


const newsData = ref<INewsDetail | null>(null); //数据
const isPlaying = ref(false); // 控制音乐播放和暂停

// 获取地址栏参数中的新闻ID
const route = useRoute();
const newsId = route.params.id as string;

// 在组件挂载后，通过newsId获取对应的新闻详情数据
onMounted(() => {
    fetchNewsData();
});

// 根据 newsId 来获取对应的新闻详情数据  -- 模拟数据
const fetchNewsData = () => {
    const res = Number(newsId) % 2;
    newsData.value = {
        id: newsId,
        title: `新闻标题 ${newsId}`,
        content: `这是新闻内容 ${newsId} 哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~`,
        imageUrl: 'https://s9.rr.itc.cn/r/wapChange/20176_21_8/a7t2t65624640852619.jpg',
        videoUrl: res == 0 ? 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' : '',
        musicUrl: res != 0 ? 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3' : '',
    };
}

const toggleMusic = () => {
    isPlaying.value = !isPlaying.value;
}
</script>

<style scoped>
.detail-wrap {
    @apply py-4 px-72 max-xl:px-32 max-lg:px-24 max-md:px-20 max-sm:px-5;
}

.title {
    @apply text-2xl font-bold text-center;
}

.content {
    @apply my-4 leading-8;
}

.rotate-icon {
    @apply fixed right-20 max-md:right-8 max-sm:right-4 top-5 max-sm:top-16 flex items-center justify-center bg-white w-10 h-10 rounded-full border cursor-pointer;
}
</style>