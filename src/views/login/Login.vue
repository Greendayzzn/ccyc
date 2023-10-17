<!--
 * @Author: 张卓南
 * @Date: 2023-10-17 23:19:59
 * @LastEditTime: 2023-10-18 00:07:50
 * @Description: 
-->
<template>
  <div>
    <div class="flex justify-center h-screen p-8">
      <div class="flex flex-col w-full">
        <LoginTitle />
        <LoginForm />
        <ForgetPasswordForm />
        <RegisterForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import LoginTitle from './LoginTitle.vue';
  import LoginForm from './LoginForm.vue';
  import ForgetPasswordForm from './ForgetPasswordForm.vue';
  import RegisterForm from './RegisterForm.vue';
</script>

<style scoped lang="less">
  :deep(.van-field__left-icon) {
    display: flex;
  }
  :deep(.van-field__right-icon) {
    display: flex;
  }
</style>
