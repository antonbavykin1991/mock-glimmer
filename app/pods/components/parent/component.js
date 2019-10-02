import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking'

export default class ParentComponent extends Component {
  @tracked state = 'some state'

  updateState = (value) => {
    this.state = value
  }
}
