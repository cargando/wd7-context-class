import React from 'react';
import { Consumer } from '../context'

// первый сценарий как внутри функионального или классовго компаонента получить данные через консьюмера (Consumer)
function Counter(props) {


  const { extraName } = props;
  console.log("пропс extraName, который пришел трансфером из HOC = ", extraName);

  return (
    <div>
      <Consumer>

        {
          data => (<h4>Counter = { data.counter }</h4>)
        }

      </Consumer>

    </div>
  );
}

export default Counter;
