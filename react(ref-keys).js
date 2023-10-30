import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      items: [1, 2, 3],
    };
  }

  handleAddItem = () => {
    const newItem = this.state.items.length + 1;
    this.setState({ items: [...this.state.items, newItem] });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAddItem}>Add Item</button>
        <ul>
          {this.state.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <input type="text" ref={this.myRef} />
      </div>
    );
  }
}

export default MyComponent;
