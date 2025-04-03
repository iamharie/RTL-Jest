import React from "react";

interface HeaderClass {
  count: number;
  name: string;
}

class HeaderClass extends React.Component<{}, { count: number; name: string }> {
  //manage state
  constructor(props: HeaderClass) {
    super(props);
    this.state = {
      count: 0,
      name: "Hari",
    };
  }

  //function to handle state

  addition = () => {
    this.setState({ count: this.state.count + 1 });
  };

  sub() {
    this.setState({ test: 4 });
  }

  render() {
    return (
      <>
        <button onClick={this.addition}>Click</button>
        <h4>{this.state.count}</h4>
        <h4>{this.state.name}</h4>
        {/* <h6>{this.state.}</h6> */}
        <h1>Class component</h1>
      </>
    );
  }
}

export default HeaderClass;
