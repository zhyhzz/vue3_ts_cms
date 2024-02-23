<!--
 * @Author       : zuohy
 * @Date         : 2024-02-05 15:29:08
 * @LastEditTime : 2024-02-19 16:37:36
 * @LastEditors  : zuohy
 * @Description  : 
-->
<template>
    <div class="login">
        <login-panel></login-panel>
    </div>
</template>

<script setup lang="ts">
import LoginPanel from './c-cpns/login-panel.vue'
</script>

<style lang="less" scoped >
.login{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
}
</style>