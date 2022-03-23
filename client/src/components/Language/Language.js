import React  from 'react';
import { Modal , Container, Row, Col, Image} from 'react-bootstrap';
const Language = props =>{
  return(
      <>
       
       <Modal show={props.show} onHide={props.languageSelected}>
        <Modal.Header >
          <Modal.Title>Select a language</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Container>
          <Row>
            <Col xs={6} md={6}>

            <h5  onClick={props.languageSelected} >English</h5>
            
            </Col>
            <Col xs={6} md={6}>
            <h5  onClick={props.languageSelected}  >Afrikaans</h5>
          
            </Col>
          </Row>
          </Container>
        </Modal.Body>
    
      </Modal>
           

      </>
  ) 
}

export default Language