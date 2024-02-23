<!--
 * @Author       : zuohy
 * @Date         : 2024-02-19 10:52:16
 * @LastEditTime : 2024-02-22 11:19:25
 * @LastEditors  : zuohy
 * @Description  : 
-->
<template>
  <div class="login-panel">
    <h1 class="title">xxxxxx</h1>
    <div class="tabs">
      <el-tabs type= "border-card" stretch v-model="activeName">
        <el-tab-pane label="账号登录" name="account">
            <template #label>
                <div>
                    <el-icon></el-icon>
                    <span class="text">账号登录</span>
                </div>
            </template>
            <pane-account ref="accountRef"/>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
            <template #label>
                <div class="label">
                    <el-icon></el-icon>
                    <span class="text">手机登录</span>
                </div>
            </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button @click="handleLoginBtnClick" class="login-btn" type="primary" size="large">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'

const isRemPwd = ref(false)
const activeName = ref('account')
const accountRef = ref<InstanceType<typeof PaneAccount>>()

function handleLoginBtnClick() {
    console.log(activeName.value)
    if(activeName.value == 'account') {
        console.log(accountRef.value);
        accountRef.value?.loginAction()
    } else {
        console.log("用户在进行手机登录")
    }
}

</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
}
</style>
