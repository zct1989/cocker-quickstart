<template>
  <q-layout-drawer side="left" v-model="showDrawer" content-class="bg-grey-2">
    <q-list>
      <q-collapsible icon="explore" label="First">
        <q-item style="padding:10px">
          <q-item-side color="primary" icon="user"/>
          <q-item-main>
            <q-item-tile label>123</q-item-tile>
          </q-item-main>
        </q-item>
      </q-collapsible>
      <q-collapsible icon="perm_identity" label="Second">
        <div>
          Content
        </div>
      </q-collapsible>
      <q-collapsible icon="shopping_cart" label="Third">
        <div>
          Content
        </div>
      </q-collapsible>
    </q-list>
  </q-layout-drawer>
</template>

<script lang="ts">
import { Validations, Layout, Dependencies } from "@cocker/core";
import Component from "vue-class-component";
import Vue from "vue";
import { State, Mutation, namespace } from "vuex-class";
const LayoutModule = namespace("layout");

@Component({
  components: {}
})
export default class WorkSideMenu extends Vue {
  @LayoutModule.State private collapse;
  @LayoutModule.Mutation private updateCollapse;
  get showDrawer() {
    return !this.collapse;
  }

  set showDrawer(value) {
    this.updateCollapse(value);
  }
}
</script>


<style lang="less" scoped>
.work-side-menu {
}
</style>
