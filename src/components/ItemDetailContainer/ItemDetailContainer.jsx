import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";

const product = {
  id: 1,
  image:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tradeinn.com%2Fgoalinn%2Fes%2Fadidas-botas-futbol-copa-pure.1-fg%2F139416421%2Fp&psig=AOvVaw3KfPAGdV8st5VKIqr2p6cq&ust=1701621255075000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCJkqWX8YIDFQAAAAAdAAAAABAI",
  title: "CopaPure.1"
};

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(product);
      }, 3000);
    });

   getData.then(res => setData(res));
  }, []); 

  return <ItemDetail data={data} />
};

export default ItemDetailContainer;
