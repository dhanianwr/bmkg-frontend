import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function GaleriComp(props)  {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

    <img src={props.img} onClick={handleShow} id="photo-galeri" />
      
      <Modal 
        show={show} 
        onHide={handleClose}
        size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <img src={props.img} id='modal-photo'/>
            <h4 className='text-center pt-3 justify-content-center'>{props.caption}</h4>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default GaleriComp;