import React, {Component} from 'react';
import { CounterContext } from '../context'

class UserName extends Component {

  static contextType = CounterContext;

  render() {

    const { userName, handleChangeUserName } = this.context;

    return (
      <div>
          <input type="text" value={ userName } onChange={ handleChangeUserName } />
      </div>
    );
  }
}

// UserName.contextType = CounterContext;

export default UserName;
