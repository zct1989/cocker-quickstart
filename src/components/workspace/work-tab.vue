<template>
  <q-toolbar class="work-tab toolbar fixed row no-warp justify-between" color="primary">
    asd
  </q-toolbar>
</template>

<script lang="ts">
import { Validations, Layout, Dependencies } from "@cocker/core";

import { Vue, Component, Inject } from "vue-property-decorator";
import { State, Mutation, namespace } from "vuex-class";

const LayoutModule = namespace("layout");

@Component({
  components: {}
})
export default class WorkTab extends Vue {
  @LayoutModule.State private collapse;
  @Inject()
  private layout
  get showDrawer() {
    return !this.collapse;
  }

  // @Watch("layout.scroll")
  // private onLayoutScroll(scroll) {
  //   if (
  //     scroll.direction === "up" ||
  //     scroll.position <= 250 ||
  //     scroll.position - scroll.inflexionPosition < 100
  //   ) {
  //     console.log(123);
  //   }
  // }
}
</script>


<style lang="less" scoped>
.work-tab {
  z-index: 100;
}
</style>
