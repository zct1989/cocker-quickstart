<template>
  <q-page class="page" :style-fn="styleFn">
    <slot></slot>
  </q-page>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  components: {}
})
export default class Page extends Vue {
  private tabHeight = 50;

  private styleFn(offset) {
    return { 
      minHeight: `calc(100vh - ${offset || 0 + this.tabHeight}px)`,
      paddingTop: `${this.tabHeight}px`
    };
  }
}
</script>


<style lang="less" scoped>
.page{

}
</style>
