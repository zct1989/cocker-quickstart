<template>
  <q-page class="login flex flex-center">
    <canvas ref="canvas" id="canvas"></canvas>
    <div style="background:white;width:300px;height:400px;border-radius:10px;box-shadow:gray 5px 10px 10px;">

    </div>
  </q-page>
</template>

<style>
</style>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import Proton from "proton-js";
@Component({})
export default class Login extends Vue {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  private readonly proton = new Proton();
  private readonly emitter = new Proton.Emitter();

  mounted() {
    // 获取canvas
    this.canvas = this.$refs["canvas"] as HTMLCanvasElement;
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

  updateProton() {
    requestAnimationFrame(this.updateProton);
    this.emitter.rotation += 1.5;
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
  background:transparent;

  #canvas {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    background: #000;
  }
}
</style>
