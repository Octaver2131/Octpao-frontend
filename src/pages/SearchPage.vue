<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeIds.length===0">请选择标签</div>
  <van-row gutter="16" style="padding: 0 16px">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="small" type="primary" @close="doColse(tag)">
        {{tag}}
      </van-tag>
    </van-col>
  </van-row>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';

const searchText = ref('');
const onSearch = (val) => Toast(val);
const onCancel = () => Toast('取消');

//已选中的标签
const activeIds = ref([]);
const activeIndex = ref(0);

const tagList = [
  {
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女' },
    ],
  },
  {
    text: '年级',
    children: [
      { text: '大一', id: '大一' },
      { text: '大二', id: '大二' },
    ],
  },
];

const doColse = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag
  })
}

</script>

<style scoped>

</style>