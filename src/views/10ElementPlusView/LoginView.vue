<template>
  <div class="login-container">
    <el-form
        :label-position="'right'"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px;"

    >
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username" type="text"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password" type="password"/>
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
</script>


<style>
.login-container {
  background-image: url('@/assets/loginBackground.png');
  height: 100vh;
  background-size: 100% 100%;
}
</style>