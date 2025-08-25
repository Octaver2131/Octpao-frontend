<template>
  <div id="teamPage">
    <van-button type="primary" @click="doJoinTeam">加入队伍</van-button>
    <team-card-list :teamList="teamList" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.js";

const router = useRouter();

const doJoinTeam = () => {
  router.push({
    path: '/team/add'
  })
}

const teamList = ref([]);
// 页面加载时只触发一次
onMounted(async () => {
  const res = await myAxios.get('/team/list');
  if (res?.code === 0) {
    teamList.value = res.data;
  } else {
    alert("获取队伍列表失败，请刷新重试");
  }
})
</script>

<style scoped>

</style>