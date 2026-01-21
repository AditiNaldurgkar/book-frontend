import react from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./views/home/home";
import Add from "./views/add/add";
import Detailview from "./views/detailview/detailview";
import Update from "./views/update/update";
import SignupLogin from "./views/login/login";

const root =createRoot(document.getElementById("root"));
const router=createBrowserRouter([{
    path:'/',
    element:<SignupLogin/>

},{
    path:'/add',
    element:<Add/>
},{
    path:'/detail/:name',
    element:<Detailview/>
},{
    path:'/update/:name',
    element:<Update/>
},
{
    path:'/Home',
    element:<Home/>
}])
root.render(<RouterProvider router={router}></RouterProvider>);