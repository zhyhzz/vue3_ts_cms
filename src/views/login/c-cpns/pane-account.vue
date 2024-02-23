<!--
 * @Author       : zuohy
 * @Date         : 2024-02-20 10:20:16
 * @LastEditTime : 2024-02-22 15:01:35
 * @LastEditors  : zuohy
 * @Description  : 
-->
<template>
  <div class="pane-account">
    <el-form :model="account" :rules="accountRules" label-wdith="60px" size="large" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input show-password v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, ElForm } from 'element-plus'

const account = reactive({
    name: '',
    password: "",
})
const accountRules: FormRules = {
    name: [
        { required: true, message: "必须输入账号信息", trigger: "blur"},
        { pattern: /[a-z0-9]{6,20}$/, message: "必须是6~20位" ,trigger: "blur"}
    ],
    password: [
        { required: true, message: "必须输入密码信息", trigger: 'blur'},
        {
            pattern: /^[a-z0-9]{3,}$/,
            message: "必须是3位以上数字或字母组成",
            trigger: "blur"
        }
    ]
}

const formRef = ref<InstanceType<typeof ElForm>>()

function loginAction() {
    console.log("ddddddd")
    console.log(account.name, account.password)
}
defineExpose({
    loginAction
})
</script>

<style lang="less" scoped>
.pane-account {
}
</style>
l