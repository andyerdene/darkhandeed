import React, { useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
interface News {
  title: string;
  body: string;
  // publishedAt: string;
}

export default function SingleNews(props: any) {
  const [imgUrl, setImgUrl] = useState("");
  // const gsReference = ref(getStorage(), props.images[0]);
  // getDownloadURL(gsReference).then((e) => {
  //   setImgUrl(e);
  // });
  let a = `asd${imgUrl}`;
  console.log(props);
  return (
    <div className="card-outer">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.attributes.title}</Card.Title>
          <Card.Img variant="top" src={props.attributes.imageUrl} />
          <Card.Text>{props.attributes.body.substring(0, 100)}...</Card.Text>
          <Link to={`/detail/${props.id}`}>Read More</Link>
        </Card.Body>
      </Card>
    </div>
  );
}
