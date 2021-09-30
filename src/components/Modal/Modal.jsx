import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './Modal.css'

const Modal = ({ isShowing, hide, ...props }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className='modal-overlay'>
            <div className='modal-wrapper'>
              <div className='modal'>
                <button
                  type='button'
                  className='modal-close-button'
                  onClick={hide}
                >
                  <span>&times;</span>
                </button>
                <div className='modal-header'>
                  <h4>Espace de connexion :</h4>
                </div>
                <div className='modal-body'>{props.children}</div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired
}

export default Modal
