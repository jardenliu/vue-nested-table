/**
 * @name nested-table
 * @description nested-table
 * @createDate 8/2/2020, 11:00:13 AM
 */

import { Component, Vue, Prop, Watch, Provide } from 'vue-property-decorator'
import template from './nested-table.vue'
import { EventEmitter } from 'events'

@Component({
  mixins: [template],
  components: {}
})
export default class NestedTable extends Vue {
  @Provide('bus')
  bus = new EventEmitter() // event bus

  /**
   *  @name toggleRowExpansion
   *  @description toggle the expanded state of rows
   */
  public toggleRowExpansion() {
    // TODO: implements
  }

  /**
   * @name refresh
   * @description refresh the layout of table.
   */
  public refresh() {
    // TODO: implements
  }

  /**
   * @name forceUpdate
   * @description forece update table data for render
   */
  public forceUpdate() {
    //
  }
}
