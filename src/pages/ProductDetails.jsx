import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {


  const {productID} = useParams();
  return ( 
  <div>
    Product Details
    <p>ID: {productID}</p>
    </div>
);
}

export default ProductDetails;