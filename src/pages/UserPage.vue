<template>
  <template v-if="user">
    <van-cell title="当前用户" :value="user?.username" />
    <van-cell title="修改信息" is-link to="/user/update" />
    <van-cell title="我创建的队伍" is-link to="user/team/create" />
    <van-cell title="我加入的队伍" is-link to="user/team/join" />
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