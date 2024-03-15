import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, CircularProgress, Typography } from "@mui/material";
import { Custom_Button } from "./Custom_Button";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { set_user_auth } from "../store/slices/user_data_slice";
import { MdLogout } from "react-icons/md";
// import HomeIcon from '@mui/icons-material/Home';

const Navbar_Component = () => {
  const user_data = useSelector((store) => store.user_data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout_handle = () => {
    signOut(auth).then((res) => {
      dispatch(set_user_auth(false));
      navigate('/login');
      console.log('logout ho gya...!');
    });
  };

  return (
    <div className="bg-primary_color h-20 px-3 flex items-center justify-between">
      <Link to={"/"}><img src="https://cdn-icons-png.flaticon.com/512/1297/1297136.png" alt="" width={"70px"}/></Link>
      <Link to={"/"}><Button variant="contained">Home</Button></Link>
      <h1 className="text-5xl text-white font-bold justify-content display-center">Blood Bank Application</h1>
      {/* <HomeIcon className="text-lg"/> */}
      <div>
        {user_data.loading ? (
          <CircularProgress color="warning" />
        ) : (
          <div>
            {user_data.isLoggedIn ? (
              <div className="space-x-3 text-white font-medium flex flex-wrap">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-blood-donation-4760034-3972429.png?f=webp " alt="" width={"60px"}/>
                <Button variant="conatined"><Link to={"/donor"}>Donate Blood</Link></Button>
                <img src="https://cdn-icons-png.flaticon.com/512/7496/7496607.png" alt="" width={"70px"}/>
                <Button variant="conatined"><Link to={"/recipient"}>Get Blood</Link></Button>

                <Custom_Button onClick={logout_handle}>
                  <MdLogout className="w-20 h-12"/>
                  
                </Custom_Button>
              </div>
            ) : (
              <div className="space-x-3 text-white font-medium">
                <Link to="/login">Login</Link>
                <span>|</span>
                <Link to="/signup">Signup</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { Navbar_Component };
