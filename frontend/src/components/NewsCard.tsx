import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NewsCard(props: any) {
  return (
    <div className="card-outer">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.attributes.title}</Card.Title>
          <Card.Img variant="top" src={props.attributes.imageUrl} />
          <Card.Text>{props.attributes.body.substring(0, 100)}...</Card.Text>
        </Card.Body>
        <Link to={`/news/${props.id}`}>Read More</Link>
      </Card>
    </div>
  );
}
