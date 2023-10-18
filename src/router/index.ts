/*
 * @Author: 张卓南
 * @Date: 2023-10-17 23:53:10
 * @LastEditTime: 2023-10-18 20:28:10
 * @Description:
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // 添加其他路由
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/Login.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    // path: "/release",
    path: "/",
    name: "Release",
    component: () => import("@/views/release/Release.vue"),
    meta: {
      title: "发布载客",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
