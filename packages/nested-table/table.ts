import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './table.vue'

@Component({
  mixins: [template],
  components: {}
})
export default class Test extends Vue {}
