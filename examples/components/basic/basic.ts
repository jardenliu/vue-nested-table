/**
 * @name basic
 * @description basic
 * @createDate 7/29/2020, 11:39:57 AM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './basic.vue'
import NestedTable from 'vue-nested-table'

@Component({
  mixins: [template],
  components: {
    NestedTable
  }
})
export default class Basic extends Vue {}
