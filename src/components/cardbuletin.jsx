import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cardbuletin = (props) => {
  return (
    <Card className="kartu" style={{ width: "18rem", height: "31.2rem" }}>
      <embed
        src={props.file}
        type="application/pdf"
        style={{ height: "24rem" }}
      />
      <Card.Body>
        <div className="title-card">
          <Card.Title className="text-center fw-bold">
            {props.tittle}
          </Card.Title>
        </div>
        <div className="text-center tombol-card">
          <Button variant="danger" href={props.link} target="_blank">
            {props.button}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cardbuletin;
