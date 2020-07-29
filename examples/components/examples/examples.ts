/**
 * @name examples
 * @description examples
 * @createDate 7/29/2020, 11:19:32 AM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './examples.vue'
import Sidebar from '../sidebar'

@Component({
  mixins: [template],
  components: {
    Sidebar
  }
})
export default class Examples extends Vue {}
