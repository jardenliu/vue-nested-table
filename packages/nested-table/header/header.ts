/**
 * @name header
 * @description header
 * @createDate 8/2/2020, 11:31:08 AM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './header.vue'

@Component({
  mixins: [template],
  components: {
  }
})
export default class Header extends Vue {}
