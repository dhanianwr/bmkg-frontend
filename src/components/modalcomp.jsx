import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalComp = (props) => {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)} className="me-2 bg-danger" variant='danger'>
        {props.buttontitle}
      </Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {props.modaltitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>{'Weather : '+ props.weather}</p>
            <br/>
            <p>{'Wind : '+ props.wind}</p>
            <br/>
            <p>{'Temp : '+ props.temp}</p>
            <br/>
            <p>{'Humidity : '+ props.humidity}</p>
            <br/>
            <p>{'Wave : '+ props.wave}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComp;