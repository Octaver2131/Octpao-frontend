import { createApp } from 'vue'
import App from './App.vue'
import { Button, Icon, NavBar, Tabbar, TabbarItem } from 'vant';
import * as VueRouter from 'vue-router'
import routes from "./config/route.ts";
import '../global.css'

const app = createApp(App);
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem)

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

app.use(router);

app.mount('#app');