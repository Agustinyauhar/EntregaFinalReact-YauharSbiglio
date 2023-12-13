import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";



export const ItemDetailContainer = () => {
  const [data, setData] = useState(null);

  const {itemId}= useParams()

  useEffect(() => {
    getProductById(itemId)
      .then((response)=>{
        setData(response)
      })
    },[itemId]);



  return <ItemDetail {...data} />
};

export default ItemDetailContainer;
