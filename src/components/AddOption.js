import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <div className="form-group">
            <small className="form-text text-muted">Add a task for the day:</small>
            <input className="form-control" type="text" name="option" placeholder="Ex: Walk the dog"/>
          </div>
          <button className="btn btn-secondary" >Add Option</button>
        </form>
      </div>
    );
  }
}
