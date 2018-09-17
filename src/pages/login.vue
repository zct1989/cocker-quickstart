<template>
  <q-page class="login flex flex-center">
    <div class="login-form column item-center justify-center">
      <q-field icon="person" error-label="请确认用户名格式正确" :error="$v.loginModel.username.$error">
        <q-input float-label="用户名" type="text" v-model="loginModel.username" @blur="$v.loginModel.username.$touch"></q-input>
      </q-field>
      <q-field icon="lock" error-label="请确认密码格式正确" :error="$v.loginModel.password.$error">
        <q-input float-label="密码" type="password" v-model="loginModel.password" @blur="$v.loginModel.password.$touch"></q-input>
      </q-field>
      <q-field inset="icon" error-label="验证码错误" :error="$v.loginModel.code.$error">
        <div class="validate-code row no-wrap inline items-end">
          <q-input float-label="验证码" type="text" v-model="loginModel.code" maxlength="4" @blur="$v.loginModel.code.$touch"></q-input>
          <img :src="verification.dataURL" @click="updateVerification" />
        </div>
      </q-field>
      <q-btn @click="onLogin" label="登陆" class="q-mt-xl" color="primary"></q-btn>
    </div>
    <canvas ref="canvas" id="canvas"></canvas>
  </q-page>
</template>

<style>
</style>

<script lang="ts">
import { Validations, Layout, Dependencies } from "@cocker/core";
import { required, minLength } from "vuelidate/lib/validators";
import Component from "vue-class-component";
import Vue from "vue";
import Proton from "proton-js";
import verification from "verification-code";

const codeValidate = value => {
  console.log(verification);
  return value === verification.code;
};

@Layout("default")
@Component({})
export default class Login extends Vue {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  private readonly proton = new Proton();
  private readonly emitter = new Proton.Emitter();
  private verification = verification.create();

  @Validations({
    username: {
      required,
      minLength: minLength(5)
    },
    password: {
      required,
      minLength: minLength(6)
    },
    code: {
      codeValidate(value) {
        const self: Login = this as any;
        return self.verification.code === value;
      }
    }
  })
  private loginModel = {
    username: "",
    password: "",
    code: ""
  };

  private onLogin() {
    this.$v.loginModel.$touch();

    if (this.$v.loginModel.$error) {
      return;
    }

    // 登录成功
    this.$router.push("/dashboard");
  }

  private updateVerification() {
    this.verification = verification.create();
  }

  private mounted() {
    this.createCanvas();
  }

  private createCanvas() {
    // 获取canvas
    this.canvas = this.$refs.canvas as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
    // 设置canvas尺寸
    this.setCanvasSize();
    this.createProton();
    this.updateProton();
  }

  private setCanvasSize() {
    if (!window.onresize) {
      window.onresize = this.setCanvasSize.bind(this);
    }
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.emitter.p.x = this.canvas.width / 2;
    this.emitter.p.y = this.canvas.height / 2;
  }

  private createProton() {
    this.emitter.rate = new Proton.Rate(
      new Proton.Span(10, 20),
      new Proton.Span(0.1, 0.25)
    );
    this.emitter.addInitialize(new Proton.Mass(1));
    this.emitter.addInitialize(new Proton.Radius(1, 12));
    this.emitter.addInitialize(new Proton.Life(2, 4));
    this.emitter.addInitialize(
      new Proton.Velocity(
        new Proton.Span(2, 4),
        new Proton.Span(-30, 30),
        "polar"
      )
    );
    this.emitter.addBehaviour(new Proton.RandomDrift(30, 30, 0.05));
    this.emitter.addBehaviour(
      new Proton.Color("ff0000", "random", Infinity, Proton.easeOutQuart)
    );
    this.emitter.addBehaviour(new Proton.Scale(1, 0.7));
    this.emitter.p.x = this.canvas.width / 2;
    this.emitter.p.y = this.canvas.height / 2;
    this.emitter.emit();

    this.proton.addEmitter(this.emitter);

    const renderer = new Proton.CanvasRenderer(this.canvas);

    renderer.onProtonUpdate = () => {
      if (this.context) {
        this.context.fillStyle = "rgba(0, 0, 0, 0.1)";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }
    };

    this.proton.addRenderer(renderer);
  }

  private updateProton() {
    requestAnimationFrame(this.updateProton);
    this.emitter.rotation += 2;
    this.proton.update();
  }
}
</script>

<style lang="less" scoped>
.login {
  font-family: Monospace;
  background-color: #f0f0f0;
  margin: 0px;
  overflow: hidden;
  background: transparent;

  .login-form {
    width: 350px;
    background-color: rgba(255,255,255,0.95);
    padding: 20px;
    border-radius: 5px;
    & > .q-field {
      height: 75px;
    }
    .validate-code {
      .q-input {
        width: calc(100% - 90px);
      }
    }
  }

  #canvas {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    background: #000;
  }
}
</style>
