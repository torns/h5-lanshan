<template>
  <div class="login w-100 h-100">
    <div class="login-wrap">
      <img class="w150" src="http://116.62.142.85:8090/baseImg/logo.jpg" alt="">

      <el-form class="login-form" :model="form" ref="ruleForm">
        <el-form-item label="账户" prop="account">
          <el-input class="form-item" v-model="form.account" placeholder="请输入账户"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input class="form-item" type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="login-btn" @click="submit">登录</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["userLogin"]),
    submit() {
      if (this.form.account && this.form.password) {
        this.userLogin(this.form).then((res) => {
          if (res.status == 10000) {
            this.$notify({
              title: "登录成功",
              message: "赶快用注册用户登录体验吧",
              type: "success",
            });

            this.$router.push("/");
          }
        });
      } else {
        this.$notify({
          title: "登录失败",
          message: "请输入账户密码",
          type: "warning",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  overflow: hidden;
  background-image: linear-gradient(
    rgb(172, 199, 247) 22%,
    rgba(151, 191, 239, 0.88) 39%,
    rgb(167, 201, 232) 100%
  );

  .login-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 480px;
    border-radius: 15px;
    background: #fff;
    margin: 300px auto 0 auto;
    padding: 40px 10px;

    .login-form {
      width: 400px;
      margin: 40px auto 0 auto;

      .form-item {
        width: 350px;
      }
    }

    .login-btn {
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