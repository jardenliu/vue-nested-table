/**
 * @name sidebar
 * @description sidebar
 * @createDate 7/29/2020, 11:41:07 AM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './sidebar.vue'

@Component({
  mixins: [template],
  components: {
  }
})
export default class Sidebar extends Vue {}
