import React from 'react';
import Counter from './counter'
import Controls from './controls'
import UserName from './userName';
import withExtendedCounter from './withExtendedCounter'

function LocalContainer(props) {

  const NewComponent = withExtendedCounter(Counter);

  return (
    <div>

      <NewComponent extraName="Семеныч" />
      <Controls />
      <UserName />

    </div>
  );
}

export default LocalContainer;
