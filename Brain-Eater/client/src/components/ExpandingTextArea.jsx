const DEFAULT_HEIGHT = 20;

export default class TextArea extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      height: DEFAULT_HEIGHT,
      value: ''
    };

    this.setValue = this.setValue.bind(this);
    this.setHeight = this.setHeight.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.setHeight();
  }

  setHeight() {
    if (this.mounted) {
      const element = this.ghost;
      this.setState({
        height: element.clientHeight
      });
    }
  }

  setValue(event) {
    const { value } = event.target;

    this.setState({ value });
  }

  getExpandableField() {
    const isOneLine = this.state.height <= DEFAULT_HEIGHT;
    const { height, value } = this.state;

    return (
      <div>
        <label htmlFor="textarea">Add some text...</label>
        <textarea
          classname="textarea"
          id="textarea"
          autoFocus={true}
          defaultValue={value}
          style={(
            height,
            resize: isOneLine ? "none" : null
          )}
          onChange={this.setValue}
          onKeyUp={this.setHeight}
        />
     </div>
    );
  }

  getGhostField() {
    return (
      <div
        className="textarea textarea--ghost"
        ref={(c) => this.ghost = c}
        aria-hidden="true"
      >
        {this.state}
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.getExpandableField()}
        {this.getGhostField()}
      </div>
    );
  }

}