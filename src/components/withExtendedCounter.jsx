import React from 'react';


// функция withExtendedCounter - это HOC - higher order component - компонент высшего порядка
// на вход принимает ваш компонент - ComponentToWrap, который нужно обогатить какой-то дополнительной логигой или функциональностью

function withExtendedCounter(ComponentToWrap) {

  return class LocalHOC extends React.Component {

    state = {
      data: 'sdfsfsdf',
    }

    render() {
      console.log("PROPS HOC = ", this.props);
      return (
        // this.props - будет указывать на пропсы класса LocalContainer, который как бы расширяет функциональность базового класса ComponentToWrap
        <>
          <h5>{ this.state.data }</h5>

          <ComponentToWrap data={ this.state.data } { ...this.props } />
        </>
      );
    }

  };

}

export default withExtendedCounter;
