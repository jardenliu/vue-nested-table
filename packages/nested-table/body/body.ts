/**
 * @name body
 * @description body
 * @createDate 8/2/2020, 11:32:13 AM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './body.vue'

@Component({
  mixins: [template],
  components: {
  }
})
export default class Body extends Vue {}
