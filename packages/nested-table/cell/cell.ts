/**
 * @name cell
 * @description cell
 * @createDate 8/2/2020, 11:31:24 AM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './cell.vue'

@Component({
  mixins: [template],
  components: {
  }
})
export default class Cell extends Vue {}
