<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<style>
</style>


<script lang="ts">
import { Validations, Layout, Dependencies } from "@cocker/core";
import Component from "vue-class-component";
import Vue from "vue";


@Layout("workspace")
@Component({})
export default class Dashboard extends Vue {
}
</script>
