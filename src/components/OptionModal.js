import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <div className="modal fade">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <Modal
          isOpen={!!props.selectedOption}
          onRequestClose={props.handleClearSelectedOption}
          contentLabel="Selected Option"
          closeTimeoutMS={200}
          
        >
          <div className="modal-header">
            <h5 className="modal-title">Selected Option</h5>
          </div>
          <div className="modal-body">
            {props.selectedOption && <p>{props.selectedOption}</p>}
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={props.handleClearSelectedOption}>Okay</button>
          </div>
        </Modal>
      </div>
    </div>
  </div>
);

export default OptionModal;
