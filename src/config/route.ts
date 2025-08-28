import Index from "../pages/Index.vue";
import TeamPage from "../pages/TeamPage.vue";

import UserPage from "../pages/UserPage.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";
import UserTeamJoinPage from "../pages/UserTeamJoinPage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";

import SearchPage from "../pages/SearchPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";

import TeamAddPage from "../pages/TeamAddPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";

const routes = [
    { path: '/', component: Index, title: "欧泡时间" },
    { path: '/team', component: TeamPage, title: "欧泡时间" },
    { path: '/team/add', component: TeamAddPage, title: "欧泡时间" },
    { path: '/team/update', component: TeamUpdatePage, title: "欧泡时间" },
    { path: '/user', component: UserPage, title: "欧泡时间" },
    { path: '/search', component: SearchPage, title: "欧泡时间" },
    { path: '/user/list', component: SearchResultPage, title: "欧泡时间" },
    { path: '/user/edit', component: UserEditPage},
    { path: '/user/login', component: UserLoginPage},
    { path: '/user/update', component: UserUpdatePage },
    { path: '/user/team/join', component: UserTeamJoinPage },
    { path: '/user/team/create', component: UserTeamCreatePage },
]

export default routes;