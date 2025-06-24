import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import './Modal.css'

function Modal(props) {

  const { isBackgroundDisplayed, classBackgroundColor, title, message, closureFunction, closureIconSize, classModal = "classModal-default", classTitle = "classTitle-default", classMessage = "classMessage-default" } = props



  return (

    <div className={isBackgroundDisplayed ? "classBg-default" : ''} style={{ background: classBackgroundColor }} >

      <div className={classModal} >

        {closureFunction && (
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={closureFunction}
            className="closureIcon"
            style={{ fontSize: closureIconSize }}
          />
        )}

        {title && (
          <h2 className={classTitle} >{title}</h2>
        )}

        {message && (
          <p className={classMessage} >{message}</p>
        )}

      </div>
    </div>
  )
}

export default Modal