<template>
  <div class="login-container">
    <el-form
        id="loginForm"
        :label-position="'right'"
        label-width="100px"
        :model="formObj">

      <el-form-item label="用户名">
        <el-input v-model="formObj.username" type="text" placeholder="请输入用户名" clearable/>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="formObj.password" type="password" placeholder="请输入密码" clearable show-password/>
      </el-form-item>

      <el-form-item style="margin-left: 20%">
        <el-button type="primary" @click="loginFun" v-show="loginFlag" class="buttonClass">登录</el-button>
        <el-button type="primary" @click="registerFun" v-show="!loginFlag" class="buttonClass" style="margin: 0">注册
        </el-button>
      </el-form-item>

      <el-form-item>
        <el-row class="mb-24" style="margin-left: 30%;">
          <el-button type="text">忘记密码</el-button>
          <el-button type="text" @click="loginFlag = !loginFlag">注册账户</el-button>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import {httpInstance} from "@/api/api";
import router from "@/router";
import {tokenStore} from '@/stores/counter'


// 登录注册切换
const loginFlag = ref(true)
// 表单对象
const formObj = reactive({
  username: '',
  password: ''
})

let tokenStoreVal = tokenStore();

// 登录方法
function loginFun() {
  httpInstance.post('/user/login', formObj)
      .then(res => {
        localStorage.setItem("token", res.data.data)
        tokenStoreVal.setToken(res.data.data);
        router.push('/LoginSuccessView')
      })
}

// 注册方法
function registerFun() {
  httpInstance.post('/user/register', formObj)
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

.buttonClass {
  padding-left: 25%;
  padding-right: 25%
}
</style>