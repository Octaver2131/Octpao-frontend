<template>
  <template v-if="user">
    <van-cell title="昵称" is-link to='/user/edit' :value="user.username" @click="toEdit('username','昵称',user.username)" />
    <van-cell title="账号" :value="user.userAccount" />
    <van-cell title="头像" is-link to='/user/edit'>
      <img style="height: 36px" :src="user.avatarUrl" alt=""/>
    </van-cell>
    <van-cell title="性别" is-link to='/user/edit' :value="user.gender" @click="toEdit('gender','性别',user.gender)" />
    <van-cell title="电话" is-link to='/user/edit' :value="user.phone" @click="toEdit('phone','电话',user.phone)" />
    <van-cell title="邮箱" is-link to='/user/edit' :value="user.email" @click="toEdit('email','邮箱',user.email)" />
    <van-cell title="星球编号" :value="user.planetCode" />
    <van-cell title="注册时间" :value="user.createTime" />
  </template>
</template>
<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {showFailToast, showSuccessToast} from "vant/lib/vant.es";
import {getCurrentUser} from "../services/user.ts";

// const user = {
//   id: 1,
//   username: 'Octaver',
//   userAccount: 'Octaver',
//   avatarUrl: 'https://avatars.githubusercontent.com/u/199230757?v=4',
//   gender: 'none',
//   phone: '12131133313',
//   email: 'Octaver2131@outlook.com',
//   planetCode: '0',
//   createTime: new Date(),
// };

const user = ref();

const router = useRouter();

onMounted(async () => {
  user.value = await getCurrentUser();
})

const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}
</script>

<style scoped>

</style>