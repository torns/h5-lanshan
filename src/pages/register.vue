<template>
  <div class="register w-100 h-100">
    <div class="register-wrap">
      <!-- <img class="w150" src="http://116.62.142.85:8090/baseImg/logo.jpg" alt=""> -->
      <div class="mt25 f28 f-theme f-bold lb-8 ">注册</div>

      <el-form class="register-form" :model="form" :rules="rules" ref="ruleForm" label-width="70px">
        <el-form-item label="账户" prop="account">
          <el-input class="form-item" v-model="form.account" placeholder="请输入账户"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input class="form-item" v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input class="form-item" v-model="form.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="portrait">
          <Imgpond :count="1" v-model="form.portrait" />
        </el-form-item>
      </el-form>
      <div class="register-btn" @click="submit">注册</div>
    </div>
  </div>
</template>

<script>
import { register } from "@/api/user";
export default {
  name: "register",
  data() {
    return {
      form: {
        account: "",
        password: "",
        userName: "",
        portrait: "",
      },
      rules: {
        account: [{ required: true, message: "请输入账户", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        portrait: [{ required: true, message: "请上传头像", trigger: "blur" }],
      },
    };
  },
  methods: {
    submit() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          register(this.form).then((res) => {
            if (res.status == 10000) {
              this.$notify({
                title: "注册成功",
                message: "赶快用注册用户登录体验吧",
                type: "success",
              });
              this.$router.push("/login");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  overflow: hidden;
  background-image: linear-gradient(
    rgb(172, 199, 247) 22%,
    rgba(151, 191, 239, 0.88) 39%,
    rgb(167, 201, 232) 100%
  );

  .register-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 480px;
    border-radius: 15px;
    background: #fff;
    margin: 150px auto 0 auto;
    padding: 40px 10px;

    .register-form {
      width: 400px;
      margin: 40px auto 0 auto;

      .form-item {
        width: 330px;
      }
    }

    .register-btn {
      width: 350px;
      height: 40px;
      margin-top: 20px;
      border-radius: 10px;
      background: $theme-color;
      line-height: 40px;
      font-size: 22px;
      color: #fff;
      letter-spacing: 10px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>