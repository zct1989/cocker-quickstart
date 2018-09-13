<template>
  <q-layout view="hHh Lpr fff">
    <work-header></work-header>
    <work-side-menu></work-side-menu>

    <q-page-container>
      <work-tab></work-tab>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import WorkHeader from "~/components/workspace/work-header.vue";
import WorkSideMenu from "~/components/workspace/work-side-menu.vue";
import WorkTab from "~/components/workspace/work-tab.vue";
@Component({
  components: {
    WorkHeader,
    WorkSideMenu,
    WorkTab
  }
})
export default class WorkspaceLayout extends Vue {
  private a = true;
}
</script>

<style>
</style>
