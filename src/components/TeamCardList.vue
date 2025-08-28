<template>
  <div id="teamCardList">
    <van-card
        v-for="team in props.teamList"
        :desc="team.description"
        :title="`${team.name}`"
        thumb="https://avatars.githubusercontent.com/u/199230757?v=4"
    >
      <template #tags>
        <van-tag plain type="danger" style="margin-right: 8px; margin-top: 8px">
          {{ teamStatusEnum[team.status] }}
        </van-tag>
      </template>
      <template #bottom>
        <div>
          {{ '最大人数：' + team.maxNum }}
        </div>
        <div v-if="team.expireTime">
          {{ '过期时间：' + team.expireTime }}
        </div>
<!--        <div>-->
<!--          {{ '创建时间：' + team.createTime }}-->
<!--        </div>-->
      </template>
      <template #footer>
        <van-button v-if="team.userId === currentUser?.id" size="small" type="primary" plain @click="doUpdateTeam(team.id)">更新队伍</van-button>
        <van-button v-if="team.userId === currentUser?.id" size="small" type="danger" plain @click="doDeleteTeam(team.id)">解散队伍</van-button>
        <van-button v-if="team.userId !== currentUser?.id && team.hasJoin" size="small" type="primary" plain @click="doQuitTeam(team.id)">退出队伍</van-button>
        <van-button v-if="team.userId !== currentUser?.id && !team.hasJoin" size="small" type="primary" plain @click="doJoinTeam(team.id)">加入队伍</van-button>
      </template>
    </van-card>
  </div>
</template>

<script setup lang="ts">
import type {TeamType} from "../models/team";
import {teamStatusEnum} from "../constants/team.ts";
import myAxios from "../plugins/myAxios.ts";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user.ts";
import {useRouter} from "vue-router";

interface TeamCardListProps {
  teamList: TeamType[];
}

const currentUser = ref();
const router = useRouter();

onMounted(async () => {
  currentUser.value = await getCurrentUser();
})

const props = withDefaults(defineProps<TeamCardListProps>(), {
  // @ts-ignore
  teamList: [] as TeamType[],
});

/**
 * 加入队伍
 * @param id
 */
const doJoinTeam = async (id: number) => {
  const res = await myAxios.post("/team/join", {
    teamId: id
  });
  if (res?.code === 0) {
    alert('加入成功');
  } else {
    alert('加入失败' + (res.description ? `，${res.description}` : ''));
  }
}

/**
 * 跳转到更新队伍页
 * @param id
 */
const doUpdateTeam = (id: number) => {
  router.push({
    path: '/team/update',
    query: {
      id: id
    }
  })
}

/**
 * 解散队伍
 * @param id
 */
const doDeleteTeam = async (id: number) => {
  const res = await myAxios.post("/team/delete", {
    id,
  });
  if (res?.code === 0) {
    alert('操作成功');
  } else {
    alert('操作失败' + (res.description ? `，${res.description}` : ''));
  }
}

/**
 * 退出队伍
 * @param id
 */
const doQuitTeam = async (id: number) => {
  const res = await myAxios.post("/team/quit", {
    teamId: id
  });
  if (res?.code === 0) {
    alert('操作成功');
  } else {
    alert('操作失败' + (res.description ? `，${res.description}` : ''));
  }
}
</script>

<style scoped>
#teamCardList :deep(.van-image__img){
  height: 84px;
  width: 84px;
  object-fit: unset;
}
</style>
