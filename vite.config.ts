/*
 * @Author: 张卓南
 * @Date: 2023-10-17 23:08:13
 * @LastEditTime: 2023-10-18 01:23:05
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import path from 'path'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
// path.resolve () 方法用于将一系列路径段解析为绝对路径。它通过处理从右到左的路径序列来工作，在每个路径之前添加，直到创建绝对路径。
import WindiCSS from 'vite-plugin-windicss'
function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  // 别名
  resolve: {
    // alias: [
    //   // @/xxxx => src/xxxx
    //   {
    //     find: /\@\//,
    //     replacement: pathResolve('src') + '/',
    //   },
    //   // #/xxxx => types/xxxx
    //   {
    //     find: /\#\//,
    //     replacement: pathResolve('types') + '/',
    //   },
    // ],
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    dedupe: ["vue"],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
        // 注入全局 less 变量
        additionalData: `@import "src/styles/var.less";`,
      },
    },
  },
  optimizeDeps: {
    include: [],
    // 打包时强制排除的依赖项
    exclude: [],
  },

  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
});
