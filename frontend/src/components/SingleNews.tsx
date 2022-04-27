import React, { useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
interface News {
  title: string;
  body: string;
  images: string[];
}

export default function SingleNews(props: News) {
  const [imgUrl, setImgUrl] = useState("");
  const gsReference = ref(getStorage(), props.images[0]);
  getDownloadURL(gsReference).then((e) => {
    setImgUrl(e);
  });
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={imgUrl} alt="" />
      <p>{props.body.slice(0, 200)}...</p>
    </div>
  );
}
