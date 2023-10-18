<!--
 * @Author: 张卓南
 * @Date: 2023-10-18 20:23:54
 * @LastEditTime: 2023-10-18 21:38:10
 * @Description: 
-->
<template>
  <div>
    <div class="flex justify-center h-screen p-8">
      <div class="flex flex-col w-full">
        <div class="flex flex-col items-center justify-center">
          <div
            class="mb-80px text-darkBlue dark:text-garyWhite text-22px font-black enter-y"
          >
            发布载客
          </div>
        </div>
        <van-form
          ref="formRef"
          class="flex flex-col items-center"
          @submit="handleSubmit"
        >
          <van-field
            class="enter-y items-center mb-20px !rounded-md"
            v-model="formData.username"
            name="username"
            placeholder="姓名"
            label="姓名"
          >
            <template #left-icon>
              <Icon>
                <UserOutlined />
              </Icon>
            </template>
          </van-field>

          <van-field
            class="enter-y items-center mb-20px !rounded-md"
            v-model="formData.phoneNum"
            name="phoneNum"
            placeholder="手机号"
            label="手机号"
          >
            <template #left-icon>
              <Icon>
                <MobileOutlined />
              </Icon>
            </template>
          </van-field>

          <van-field
            class="enter-y items-center mb-20px !rounded-md"
            v-model="formData.licence"
            name="licence"
            placeholder="车牌号"
            label="车牌号"
          >
            <template #left-icon>
              <van-icon name="other-pay" />
            </template>
          </van-field>

          <van-field
            class="enter-y items-center mb-20px !rounded-md"
            v-model="formData.endDate"
            name="endDate"
            placeholder="驾驶证到期日"
            label="驾驶证到期日"
          >
            <template #left-icon>
              <van-icon name="underway-o" />
            </template>
          </van-field>

          <van-field
            class="enter-y items-center mb-20px !rounded-md"
            v-model="formData.upNums"
            name="endDate"
            placeholder="上班空余座数"
            label="上班空余座数"
          >
            <template #left-icon>
              <van-icon name="location-o" />
            </template>
          </van-field>

          <van-field
            class="enter-y items-center mb-20px !rounded-md"
            v-model="formData.downNums"
            name="endDate"
            placeholder="下班空余座数"
            label="下班空余座数"
          >
            <template #left-icon>
              <van-icon name="smile-o" />
            </template>
          </van-field>

          <van-field
            class="enter-y items-center mb-20px !rounded-md"
            v-model="formData.address"
            name="endDate"
            placeholder="所在职场"
            label="所在职场"
          >
            <template #left-icon>
              <van-icon name="bag-o" />
            </template>
          </van-field>

          <van-field
            class="enter-y items-center mb-20px !rounded-md"
            v-model="formData.home"
            name="endDate"
            placeholder="回家地址"
            label="回家地址"
          >
            <template #left-icon>
              <van-icon name="home-o" />
            </template>
          </van-field>
 
          <div class="enter-y w-full px-5px flex justify-between mb-20px">
            <van-button
              icon="gold-coin-o"
            >
              价格设定
            </van-button>
            <van-button color="#7232dd" plain> 按距离/线下协商 </van-button>
          </div>

          <div class="enter-y w-full px-5px flex justify-between mb-20px">
            <van-button
              icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png"
            >
              车辆信息
            </van-button>
            <van-uploader>
              <van-button icon="plus" color="#7232dd" plain>上传图片</van-button>
            </van-uploader>
          </div>

          <van-button
            class="enter-y !rounded-md !mb-20px"
            type="primary"
            block
            native-type="submit"
            :loading="loading"
          >
            编辑
          </van-button>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, unref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { FormInstance } from "vant";
import { Icon } from "@vicons/utils";
import {
  UserOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  EditOutlined,
  MobileOutlined,
  
} from "@vicons/antd";

const router = useRouter();
const route = useRoute();

const formRef = ref<FormInstance>();
const loading = ref(false);
const rememberMe = ref(false);
const switchPassType = ref(true);

const formData = reactive({
  username: "admin",
  phoneNum: "123456",
  licence:'',
  endDate:'2024-10-1',
  upNums:2,
  downNums:1,
  address:'武汉',
  home:'花山'

});
onMounted(() => {});
</script>

<style scoped lang="less">
:deep(.van-field__left-icon) {
  display: flex;
}
:deep(.van-field__right-icon) {
  display: flex;
}
</style>
