import React from 'react';

const Option = (props) => (
  <div className="option">
    <p className="list-group-item list-group-item-light">
      {props.count}. {props.optionText}
      <button
        className="btn btn-secondary btn-sm float-right"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
        </button>
    </p>
  </div>
);

export default Option;
