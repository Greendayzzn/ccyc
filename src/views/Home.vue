<!--
 * @Author: 张卓南
 * @Date: 2023-10-17 23:54:36
 * @LastEditTime: 2023-10-18 20:06:19
 * @Description: 
-->
<template>
  <div class="flex justify-center h-screen p-8">
    <div class="flex flex-col w-full mt-100px">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images.imagesList" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>

      <div>
        <div class="mt-20px flex flex-col items-center justify-center">
          <div
            class="mb-20px  text-22px font-black enter-y"
          >
            创创约车
          </div>
          <div
            class="mb-100px  text-16px  enter-y"
          >
            让通勤更简单
          </div>
        </div>

        <van-button
      class="enter-y !rounded-md !mb-25px"
      type="primary"
      block
     :onclick="toLogin"
    >
      开始
    </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref, unref } from "vue";
import image from "@/assets/ccyc.png";
import { useRouter } from 'vue-router'; // 导入 useRouter
export default {
  name: "Home",
  setup() {
    const images = reactive({ imagesList: [image, image] });
    const router = useRouter();
    const toLogin = ()=>{
      router.replace('/login');
      showSuccessToast('登录成功，即将进入系统');
    }
    return { images,toLogin };

  },
};
</script>

<style scoped>
/* 样式 */
</style>
