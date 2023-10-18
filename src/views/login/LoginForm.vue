<template>
  <van-form
    ref="formRef"
    v-if="getShow"
    class="flex flex-col items-center"
    @submit="handleSubmit"
  >
    <van-field
      class="enter-y items-center mb-25px !rounded-md"
      v-model="formData.username"
      name="username"
      placeholder="姓名"
      :rules="getFormRules.username"
    >
      <template #left-icon>
        <Icon>
          <UserOutlined />
        </Icon>
      </template>
    </van-field>

    <van-field
      class="enter-y items-center mb-25px !rounded-md"
      v-model="formData.phoneNum"
      name="phoneNum"
      placeholder="手机号"
      :rules="getFormRules.phoneNum"
    >
      <template #left-icon>
        <Icon>
          <MobileOutlined />
        </Icon>
      </template>
    </van-field>

    <van-field
      class="enter-y items-center mb-20px !rounded-md"
      v-model="formData.sms"
      center
      clearable
      placeholder="请输入短信验证码"
      :rules="getFormRules.sms"
    >
      <template #left-icon>
        <Icon>
          <EditOutlined />
        </Icon>
      </template>
      <template #button>
        <van-button size="small" type="primary">发送验证码</van-button>
      </template>
    </van-field>
    <van-field
        name="policy"
        class="enter-y items-center px-1 !rounded-md mb-20px "
        :rules="getFormRules.policy"
      >
        <template #input>
          <van-checkbox v-model="formData.policy" icon-size="14px" shape="square">
            同意《创创约车注册服务协议》
          </van-checkbox>
        </template>
      </van-field>

    <van-button
      class="enter-y !rounded-md !mb-25px"
      type="primary"
      block
      native-type="submit"
      :loading="loading"
    >
      登 录
    </van-button>

  </van-form>
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
  MobileOutlined
} from "@vicons/antd";
import { LoginStateEnum, useLoginState, useFormRules } from "./useLogin";

const { setLoginState, getLoginState } = useLoginState();
const { getFormRules } = useFormRules();
const router = useRouter();
const route = useRoute();

const formRef = ref<FormInstance>();
const loading = ref(false);
const rememberMe = ref(false);
const switchPassType = ref(true);
const formData = reactive({
  username: "admin",
  phoneNum: "123456",
  sms: "",
  policy:''
});

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);

function handleSubmit() {
  formRef.value
    ?.validate()
    .then(async () => {
      // try {
      //   loading.value = true;
      //   showLoadingToast('登录中...');
      //   const { code, message: msg } = await userStore.Login({
      //     username: formData.username,
      //     phoneNum: formData.phoneNum,
      //   });
      //   if (code == ResultEnum.SUCCESS) {
      //     const toPath = decodeURIComponent((route.query?.redirect || '/') as string);
      //     showSuccessToast('登录成功，即将进入系统');
      //     if (route.name === PageEnum.BASE_LOGIN_NAME) {
      //       router.replace('/');
      //     } else router.replace(toPath);
      //   } else {
      //     showFailToast(msg || '登录失败');
      //   }
      // } finally {
      //   loading.value = false;
      // }
    })
    .catch(() => {
      console.error("验证失败");
    });
}

onMounted(() => {});
</script>

<style scoped lang="less"></style>
