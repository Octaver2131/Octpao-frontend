<template>
  <van-cell title="昵称" is-link to='/user/edit' :value="user.username"/>
  <van-cell title="账号" :value="user.userAccount" />
  <van-cell title="头像" is-link to='/user/edit'>
    <img style="height: 36px" :src="user.avatarUrl"/>
  </van-cell>
  <van-cell title="性别" is-link to='/user/edit' :value="user.gender" />
  <van-cell title="电话" is-link to='/user/edit' :value="user.phone" />
  <van-cell title="邮箱" is-link to='/user/edit' :value="user.email" />
  <van-cell title="星球编号" :value="user.planetCode" />
  <van-cell title="注册时间" :value="user.createTime.toDateString()" />
</template>

<script setup>
const user = {
  id: 1,
  username: 'Octaver',
  userAccount: 'Octaver',
  avatarUrl: 'https://avatars.githubusercontent.com/u/199230757?v=4',
  gender: 'none',
  phone: '12131133313',
  email: 'Octaver2131@outlook.com',
  planetCode: '0',
  createTime: new Date(),
};
</script>

<style scoped>

</style>