import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I am app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

/* Creating Context */
const MyContext = React.createContext();

/* Creating a Provider Component, it is where the data will live */
class MyProvider extends Component {
  state = {
    name: "sahil",
    age: 23
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growYearOlder: () => {
            this.setState({ age: this.state.age + 1 });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

/* Person Class */
class Person extends Component {
  render() {
    return (
      /* Accessing state data using Context Provider */
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <p>age: {context.state.age}</p>
            <button onClick={context.growYearOlder}>+cake</button>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

/* Family class */
const Family = props => {
  return (
    <div className="family">
      <Person />
    </div>
  );
};

export default App;
