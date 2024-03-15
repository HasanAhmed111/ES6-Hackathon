import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cards } from "../pages/Cards";
import { Navbar_Component } from "../components/Navbar_Component";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Donor from "./Donor";



export const Home = () => {
  return (
    <>
    <div className="min-h-screen bg-cover bg-center" style={{backgroundImage: 'url("https://urbanhospitaldahod.com/assets/uploads/bl4.jpg")'}}>

  <Navbar_Component />
  <h1 className="text-center text-8xl font-bold font-serif">Home </h1>
  {/* <Button variant="contained"><Link to={"/donor"} >Donor</Link></Button>
  <Button variant="contained"><Link to={"/recipient"}>Recipient</Link></Button> */}
    </div>
    </>
  );
};