import { Button, Link } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

export const Productdetail = () => {

  let { id } = useParams()  ;

  const [singleProducts, setSingleProducts] = useState("");
  console.log(id);

  useEffect(() => {
    const Fetching = axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setSingleProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
//   const navigatePro = useNavigate();
//   const GotoProd = () => {
//     navigatePro("/Productpage");
//   } 

  return (
    <>
      <div style={{textAlign:"center"}}>
        <img style={{width:"500px", height:"500px"}} src={singleProducts.image} />
        <h1 style={{textAlign:"center", fontSize:"40px"}}>{singleProducts.title}</h1>
        <p style={{textAlign:"center", fontWeight:"bolder", fontSize:"25px"}}>{singleProducts.description}</p>
      </div>

    </>
  );
};