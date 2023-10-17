/*
 * @Author: 张卓南
 * @Date: 2023-10-17 23:53:10
 * @LastEditTime: 2023-10-18 00:10:21
 * @Description:
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // 添加其他路由
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/Login.vue"),
    meta: {
      title: "登录",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
