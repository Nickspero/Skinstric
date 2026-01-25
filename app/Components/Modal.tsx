import "../Styles/Modal.css"

const Modal = () => {
  return (
    <div className="modal">
      
        <div className="top">
            <p>ALLOW A.I. TO ACCESS YOUR CAMERA</p>
        </div>
        <div className="bottom">
            <button>DENY</button>
            <button>ALLOW</button>
        </div>
    
    </div>
  )
}

export default Modal
