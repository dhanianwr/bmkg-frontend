import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComp = ( props ) => {
    return (

    <Card className='kartu' style={{ width: '18rem', height: '31.2rem'}} >
      <Card.Img variant="top" src={props.img} style={{height:"24rem"}}/>
      <Card.Body>
        <div className='title-card'>
          <Card.Title className='text-center fw-bold'>{props.tittle}</Card.Title>
        </div>
        <div className='text-center tombol-card'>
          <Button variant="danger" href={props.link}>{props.button}</Button>
        </div>
      </Card.Body>
    </Card>

    );
};

export default CardComp;