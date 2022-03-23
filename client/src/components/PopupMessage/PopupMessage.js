import React ,{useState} from 'react';
import styles from './PopUpMessage.module.css';
import { Modal , Button} from 'react-bootstrap';


const PopUpMessage = (props)=>{


  const handleClose = ()=>{
    props.handleClose()
  }
  
  return(
      <Modal className={styles.modalStyle} show={props.show} onHide={handleClose} >
      <Modal.Title>
        {props.title}
      </Modal.Title>
 
    <Modal.Body>
        {props.body}
    </Modal.Body>
    <Modal.Footer>
      
      <Button size="md" block variant="primary" onClick={handleClose}>
        {props.button}
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default PopUpMessage;