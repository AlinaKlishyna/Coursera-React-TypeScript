import React from 'react';

type MyPropType = {
  message: string
}

type MyStateType = {
  count: number
}

class Counter extends React.Component<MyPropType, MyStateType> {
  state: MyStateType = {
    count: 0
  }

  increment = () => this.setState({ count: this.state.count + 1 })

  render() {
    return (
      <div>
        <p>
          {this.props.message} {this.state.count}
        </p>
        <button onClick={this.increment}> Increment by 1</button>
      </div>
    );
  }
}

class Application extends React.Component {
  render() {
    return <Counter message="The current count is" />;
  }
}


export default Application;
