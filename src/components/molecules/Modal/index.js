import React, { useState } from 'react'

const Modal = ({

}) => {
    const [isVisible, setIsVisible] = useState(false)
  
    const show = () => setIsVisible(true)
    const hide = () => setIsVisible(false)

    return ReactDOM.createPortal(
        <div>
          <button onClick={closeModal}>Close</button>
          {children}
        </div>,
        domEl
      )
}

export default Modal