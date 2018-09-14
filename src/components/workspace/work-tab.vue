<template>
  <q-toolbar class="work-tab toolbar fixed row no-padding" color="primary" :style="tabStyle">
    <div class="row no-wrap" style="width:100%">
      <div style="width:20px">left</div>
      <div class="tags-view-container scroll row no-wrap col overflow-hidden">
        <q-chip ref="tag" class="q-mx-xs" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" closable color="green">right</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
        <q-chip ref="tag" square :name="123" color="grey">123</q-chip>
      </div>
      <div style="width:20px">right</div>
    </div>
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
  @Inject() private layout;
  get showDrawer() {
    return !this.collapse;
  }

  get tabStyle() {
    const css = {};
    if (this.layout.left.space) {
      css[`width`] = `calc(100% - ${this.layout.left.size}px)`;
    }

    console.log(css);

    return css;
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


<style lang="less">
.work-tab {
  z-index: 100;
  height: 32px;
  min-height: 38px;
  align-items: flex-end;
  background-color: white;
  .q-chip {
    border-radius: 5px 5px 0 0;
    margin: 0 1px;
    text-align: center;
    min-width: 80px;
    height: 30px;
    line-height: 50px;
  }
}
</style>
