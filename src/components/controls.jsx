import React from 'react';
import { Consumer } from '../context'

function Controls(props) {

  return (


      <Consumer>
        {
          ({ handleUpdateCounter }) => (
              <div>
                <input type="button" value="increment" onClick={ handleUpdateCounter } />
                <br />
                <input type="button" value="decrement" onClick={ handleUpdateCounter } />
              </div>)
        }
      </Consumer>
  );
}

export default Controls;

