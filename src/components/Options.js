import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div>
      <h3 className="display-4">Your Tasks</h3>
      <button
        className="btn btn-outline-dark btn-sm"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>

    {props.options.length === 0 && <label className="alert alert-secondary">Please add an item to get started!</label>}
    {
      props.options.map((option, index) => (
        <Option
          key={option}
          optionText={option}
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;
