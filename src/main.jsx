import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Modal from './Modal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Modal
      isBackgroundDisplayed={true}
      title={'Titre'}
      message={'Employee Created !'}
    // closureFunction={() => { setIsModalOpen(!isModalOpen) }}
    // classModal={"classModal-test"}
    // classTitle={"classTitle-test"}
    // classMessage={"classMessage-test"}
    // classBackgroundColor={'blue'}
    // closureIconSize={'80px'}
    />
  </StrictMode>,
)
