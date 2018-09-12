<template>
  <q-layout view="hhh lpr fff">
    <work-header></work-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import WorkHeader from "~/components/workspace/work-header.vue";

@Component({
  components: {
    WorkHeader
  }
})
export default class WorkspaceLayout extends Vue {}
</script>

<style>
</style>
