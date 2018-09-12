<template>
  <q-layout-header>
    <q-toolbar class="toolbar" color="primary">
      <div class="logo-group" :style="{width: collapse ? asideWidth.collapse : asideWidth.normal}">
        <!-- <img v-if="collapse" :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/icon-only.png`">
        <img v-else :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/all.png`"> -->
      </div>
      <div class="toggle-aside">
        <q-btn flat dense round @click="updateCollapse()" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>
      </div>
      <work-header-menu>

      </work-header-menu>
    </q-toolbar>
  </q-layout-header>
</template>

<script lang="ts">
import { Validations, Layout, Dependencies } from "@cocker/core";
import Component from "vue-class-component";
import Vue from "vue";
import { State, Mutation, namespace } from "vuex-class";
import WorkHeaderMenu from "./work-header-menu.vue";
const LayoutModule = namespace("layout");

@Component({})
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
.toolbar {
  height: 60px;
}
</style>
