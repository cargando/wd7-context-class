import React from 'react';
import logo from './logo.svg';
import { Provider } from './context';
import LocalContainer from "./components/localContainer";
import './App.css';

class App extends React.Component {

  state = {
    counter: 0,
    userName: '',
  }

  handleUpdateCounter = (e) => {

    let { counter } = this.state;

    if (e.target.value === "increment") {
      counter++;
    } else {
      counter--;
    }

    this.setState({counter});
  };

  handleChangeUserName = (e) => {
    const { value: userName } = e.target;

    this.setState({ userName });
  }

  render () {

    const providerData = {
      ...this.state,
      handleUpdateCounter: this.handleUpdateCounter,
      handleChangeUserName: this.handleChangeUserName,
    }

    return (
      <Provider value={ providerData }>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{ this.state.userName }</h2>
            <hr />
            <LocalContainer />

          </header>
        </div>
      </Provider>
    );


  }
}

export default App;
