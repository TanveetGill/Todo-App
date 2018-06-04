import React from 'react';

const Action = (props) => (
  <div>
    <button
      className="btn btn-secondary btn-lg btn-block"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What should I do?
      </button>
  </div>
);

export default Action;
