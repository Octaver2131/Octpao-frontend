<template>
  <user-card-list :user-list="userList" />
  <van-empty v-if="!userList || userList.length < 1" description="数据为空"/>
</template>

<script setup>
import {onMounted, ref} from "vue";
import { useRoute } from "vue-router";
import myAxios from "../plugins/myAxios.ts";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();
const { tags } = route.query;
const userList = ref([]);

onMounted(async () => {
  const userListData = await myAxios.get('/user/recommend', {
    withCredentials: false,
    params: {
      pageSize: 10,
      pageNum: 1,
    },
  })
      .then(function (response) {
        console.log('/user/recommend', response);
        return response?.data?.records
      })
      .catch(function (error) {
        console.error('/user/recommend', error);
      })
  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
})

</script>

<style scoped>

</style>