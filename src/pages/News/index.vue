<template>
  <div class="page-wrap pb-6">
    <div class="search-wrap">
      <AutoComplete :defaultValue="(route.query.search as string)" @search="handleSearch" />
    </div>
    <div class="news-list">
      <div class="news-item-wrap" v-for="newsItem in paginatedNews" :key="newsItem.id">
        <div class="news-item" @click="goToNewsDetail(newsItem)">
          <div class="news-image">
            <ImageLazyLoad :src="newsItem.imageUrl" :alt="newsItem.title" class="max-sm:w-[128px]" height="150px"
              width="150px" />
          </div>
          <div class="news-details">
            <h2 class="news-title" :title="newsItem.title">{{ newsItem.title }}</h2>
            <p class="news-content">{{ newsItem.content }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="newsData.list.length > pageSize" class="pagination">
      <button class="prev-page" :class="{ 'disabled-btn': currentPage === 1 }" @click="prevPage"
        :disabled="currentPage === 1">上一页</button>
      <button class="next-page" :class="{ 'disabled-btn': currentPage === totalPages }" @click="nextPage"
        :disabled="currentPage === totalPages">下一页</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AutoComplete from '../../components/AutoComplete.vue';
import ImageLazyLoad from '../../components/ImageLazyLoad.vue';
import { INewsList, INewsItem } from '../../types'


const route = useRoute();
const router = useRouter();
const newsData = ref<INewsList>({
  list: [],
  count: 0
});
const currentPage = ref(1);
const pageSize = 18;


const totalPages = computed(() => Math.ceil(newsData.value.count / pageSize));

const paginatedNews = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return newsData.value.list.slice(startIndex, endIndex);
});

watch(router.currentRoute, () => {
  fetchNewsData()
});

onMounted(() => {
  fetchNewsData();
});

const fetchNewsData = () => {
  // 新闻数据集，包含100~1000个条目的新闻 -- 模拟数据代替api接口数据
  const data:INewsItem[] = [];
  const count:number = 1000;
  for (let i = 1; i <= count; i++) {
    data.push({
      id: `${i}`,
      title: `新闻标题 ${i} -- ${i % 2 ? '音乐' : '视频'}`,
      content: `这是新闻内容 ${i} 哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~哒哒哒~~`,
      imageUrl: `https://s9.rr.itc.cn/r/wapChange/20176_21_8/a7t2t65624640852619.jpg`,
    });
  }
  newsData.value = {list: data, count};

  newsDatafilter();
}

const newsDatafilter = () => {
  const search = route.query.search as string || '';
  const list = newsData.value.list.filter((news) =>
    news.title.toLowerCase().includes(search.toLowerCase())
  );
  const count = newsData.value.list.length;
  newsData.value = {list, count};
  
  currentPage.value = 1;
}

const handleSearch = (keyword: string) => {
  router.replace(keyword ? `/?search=${keyword}` : '/');
}

const prevPage = () => {
  currentPage.value--;
}

const nextPage = () => {
  currentPage.value++;
}

const goToNewsDetail = (newsItem:INewsItem) => {
  router.push({ name: 'NewsDetail', params: { id: newsItem.id } });
}
</script>

<style scoped>
.search-wrap {
  @apply pt-6 px-20 max-sm:fixed max-sm:w-full max-sm:px-8 max-sm:py-6;
}

.news-list {
  @apply flex p-4 flex-wrap max-sm:pt-20;
}

.news-item-wrap {
  @apply sm:p-2 sm:my-4 max-sm:my-2 rounded w-1/4 max-xl:w-1/3 max-lg:w-1/2 max-sm:w-full;
}

.news-item {
  @apply flex flex-col shadow-lg gap-4 max-sm:h-[128px] cursor-pointer transition-transform max-sm:flex-row hover:sm:translate-y-[-10px] hover:sm:brightness-75 overflow-hidden;
}

.news-details {
  @apply flex flex-col p-3;
}

.news-title {
  @apply text-lg font-bold line-clamp-2 text-ellipsis;
}

.news-content {
  @apply mt-1.5 text-sm line-clamp-2 text-ellipsis;
}

.news-image {
  @apply flex justify-center items-center;
}

.pagination {
  @apply flex justify-center items-center gap-4;
}

.pagination button {
  @apply p-1 text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600;
}

.pagination .disabled-btn {
  @apply bg-blue-300 hover:bg-blue-300 cursor-default;
}

</style>
