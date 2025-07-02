<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="`${user.username} (${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in tags" style="margin-right: 8px; margin-top: 8px" >
        {{tag}}
      </van-tag>
    </template>
    <template #footer>
      <a href="https://github.com/Octaver2131" target="_blank" rel="noopener noreferrer">
        <van-button size="mini">联系我</van-button>
      </a>
    </template>
  </van-card>
</template>

<script setup >
import {ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const {tags} = route.query;

const mockUser = ref({
  id: 2131,
  username: 'Octaver',
  userAccount: 'Octaver',
  profile: '一条咸鱼',
  gender: 0,
  phone: '11111111111',
  email: 'Octaver2131@outlook.com',
  planetCode: '2131',
  avatarUrl: 'https://avatars.githubusercontent.com/u/199230757?v=4',
  tags: ['c++', 'java', 'python'],
  createTime: new Date(),
})

const userList = ref({mockUser});

</script>

<style scoped>

</style>