import Component from '@glimmer/component';

export default class ChildComponent extends Component {
  get text() {
    return this.args.state + ' hey Im text'
  }

  get otherText() {
    return this.args.state + ' hey Im other text'
  }
}
