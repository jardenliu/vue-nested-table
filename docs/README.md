# vue-nested-table

::: demo this is `description`

<template>
  <div>
    <MyComp></MyComp>
  </div>
</template>

<script lang="ts">
    import MyComp from '../packages/index.ts'
    import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

    @Component({
      components:{
        MyComp
      }
    })
    export default class App extends Vue {}
</script>

:::
