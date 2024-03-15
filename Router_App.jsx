import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Home } from "../pages/Home";
import { Productdetail } from "../pages/Productdetail";
import Donor from "../pages/Donor";
import Recipient from "../pages/Recipient";
import A_d from "../pages/A_d";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>

            <Route path="signUp" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/Productdetail/:id" element={<Productdetail />} />
            <Route path="/donor" element={<Donor/>}/>
            <Route path="/recipient" element={<Recipient/>}/>
            <Route path="/A+d" element={<A_d/>}/>


        </Route>
    )
)


const Router_App = () => {


    return <RouterProvider router={router} />;
}


export { Router_App }