<template>
  <div class="login-container">
    <el-form
        id="loginForm"
        :label-position="'right'"
        label-width="100px"
        :model="formLabelAlign"
    >
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username" type="text" placeholder="请输入用户名" clearable/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password" type="password" placeholder="请输入密码" clearable show-password/>
      </el-form-item>
      <el-form-item>
        <el-row class="mb-24" style="margin-left: 20%;">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info">忘记密码</el-button>
        </el-row>
      </el-form-item>

    </el-form>
  </div>

</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'

const formLabelAlign = reactive({
  username: '',
  password: ''
})

function login() {
  console.log("去登录啦")
}
</script>


<style>
.login-container {
  background-image: url('@/assets/loginBackground.png');
  height: 100vh;
  background-size: 100% 100%;
}

/* 登录表单在页面居中显示 */
#loginForm {
  max-width: 460px;
  /* 决定元素的定位方式：绝对定位 absolute、相对定位 relative、固定定位 fixed、静态定位 static */
  position: relative;
  /* 定位=定位模式 + 边偏移（top、bottom、left、right）*/
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>