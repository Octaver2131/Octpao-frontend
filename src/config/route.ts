import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/User.vue";
import SearchPage from "../pages/SearchPage.vue";
import EditUserPage from "../pages/EditUserPage.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/user', component: User },
    { path: '/search', component: SearchPage },
    { path: '/user/edit', component: EditUserPage}
]

export default routes;