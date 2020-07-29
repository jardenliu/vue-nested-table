/**
 * @name fixedHeader
 * @description fixedHeader
 * @createDate 7/29/2020, 2:27:58 PM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './fixedHeader.vue'
import NestedTable from 'vue-nested-table'

@Component({
  mixins: [template],
  components: {
    NestedTable
  }
})
export default class FixedHeader extends Vue {}
