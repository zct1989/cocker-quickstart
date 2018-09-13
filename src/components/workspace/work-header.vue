<template>
  <q-layout-header class="work-header">
    <q-toolbar class="toolbar row no-warp justify-between" color="primary">
      <div class="logo-group " :style="{width: collapse ? asideWidth.collapse : asideWidth.normal}">
        <!-- <img v-if="collapse" :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/icon-only.png`">
        <img v-else :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/all.png`"> -->
      </div>
      <div class="toggle-aside">
        <q-btn flat dense round @click="updateCollapse()" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>
      </div>
      <work-header-menu class="col">

      </work-header-menu>
      <div>
        <q-btn flat icon="fullscreen" @click="$q.fullscreen.toggle()">

        </q-btn>
      </div>
    </q-toolbar>
  </q-layout-header>
</template>

<script lang="ts">
import { Validations, Layout, Dependencies } from "@cocker/core";
import { Vue, Component, Inject } from "vue-property-decorator";
import { State, Mutation, namespace } from "vuex-class";
import WorkHeaderMenu from "./work-header-menu.vue";
const LayoutModule = namespace("layout");

@Component({
  components: {
    WorkHeaderMenu
  }
})
export default class WorkHeader extends Vue {
  @LayoutModule.State private collapse;
  @LayoutModule.Mutation private updateCollapse;

  private readonly asideWidth = {
    normal: "200px",
    collapse: "65px"
  };
}
</script>


<style lang="less" scoped>
.work-header {
  .toolbar {
    height: 60px;
  }
}
</style>
