<template>
  <form class="flex relative z-10">
    <div class="w-full relative flex justify-center items-center">
      <input v-model="inputValue" @input="loadDataFromServer" type="text" placeholder="Search for a tag"
        className="search-input peer" />
      <IconClose class="absolute right-2 cursor-pointer w-5" v-if="inputValue" @click="handleClose" />
    </div>

    <div @click="handleSubmit" class="w-16 flex items-center justify-center bg-blue-500 cursor-pointer rounded-tr-md">
      <IconsSearch class="text-white" />
    </div>

    <ul v-if="suggestions.length > 0 && showTip" class="search-tooltip">
      <li class="search-tooltip-item" v-for="suggestion in suggestions" :key="suggestion"
        @click="selectSuggestion(suggestion)">
        {{ suggestion }}
      </li>
    </ul>
  </form>
</template>
  
<script setup lang="ts">
import { ref, watchEffect, onMounted } from 'vue';
import IconsSearch from './Icon/Search.vue';
import IconClose from './Icon/Close.vue';
import Dialog from './Modal'

interface AutoCompleteProps {
  defaultValue: string;
}

const props = defineProps<AutoCompleteProps>();


//此处使用模拟数据 代替服务器中的数据
const fakeData: string[] = [];
for (let i = 1; i <= 1000; i++) {
  fakeData.push(`新闻标题 ${i} -- ${i % 2 ? '音乐' : '视频'}`);
}
console.log(props.defaultValue)
const inputValue = ref<string>(props.defaultValue);
const suggestions = ref<string[]>([]);
const showTip = ref<boolean>(false);
const emit = defineEmits(["search"]);

function loadDataFromServer() {
  showTip.value = true;
  suggestions.value = fakeData.filter((item) =>
    item.toLowerCase().includes(inputValue.value.toLowerCase())
  );
  if (suggestions.value.length < 2) {
    showTip.value = false;
  }
}

onMounted(() => {console.log(props.defaultValue)
  showTip.value = false;
});

watchEffect(() => {
  if (!inputValue.value) {
    suggestions.value = [];
    return;
  }console.log(props.defaultValue)
  loadDataFromServer();
});

// 提交
function handleSubmit() {
  const matchedItem = suggestions.value.find(
    (item) => item.toLowerCase() === inputValue.value.toLowerCase()
  );
  showTip.value = false;
  if (!matchedItem) {
    Dialog({ title: '提示', message: '输入无效，请从建议列表中选择一个选项!', type: 2});
    inputValue.value = '';
    return;
  }
  emit('search', inputValue.value);
}

// 选择
function selectSuggestion(suggestion: string) {
  if (inputValue.value.toLowerCase() == suggestion.toLowerCase()) {
    showTip.value = false;
    return;
  }
  inputValue.value = suggestion;
  suggestions.value = [];
}

// 关闭
function handleClose() {
  showTip.value = false;
  inputValue.value = '';
  suggestions.value = [];
  emit('search', '');
}
</script>
  
<style>

.search-input {
  @apply block w-full rounded-ss-md border border-gray-200 bg-white py-2.5 pl-5 pr-12 text-sm shadow-lg focus:border-black focus:outline-none focus:ring-0;
}

.search-tooltip {
  @apply absolute p-2 max-h-96 overflow-auto top-10 bg-white w-full border rounded-b-md shadow-lg cursor-pointer max-sm:max-h-52;
}

.search-tooltip-item {
  @apply px-4 py-1 hover:bg-gray-200 focus:bg-gray-200;

}

.search-tooltip::-webkit-scrollbar {
  width: 2px;
}

.search-tooltip::-webkit-scrollbar-track {
  background: rgb(221, 217, 217);
  border-radius: 10px;
}

.search-tooltip::-webkit-scrollbar-thumb {
  background: rgb(136, 136, 136);
  border-radius: 10px;
}

.search-tooltip::-webkit-scrollbar-thumb:hover {
  background: rgb(100, 100, 100);
  border-radius: 10px;
}

.search-tooltip::-webkit-scrollbar-thumb:active {
  background: rgb(68, 68, 68);
  border-radius: 10px;
}
</style>