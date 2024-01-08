import React, { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productDocRef = doc(db, "products", itemId.toString());
        const productDocSnapshot = await getDoc(productDocRef);

        if (productDocSnapshot.exists()) {
          const data = productDocSnapshot.data();
          const productAdapted = { id: productDocSnapshot.id, ...data };
          setProduct(productAdapted);
        } else {
          console.error("El producto no fue encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    if (itemId) {
      fetchProduct();
    } else {
      setLoading(false);
    }
  }, [itemId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        product && <ItemDetail {...product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
