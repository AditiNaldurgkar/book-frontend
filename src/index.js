import react from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./views/home/home";
import Add from "./views/add/add";
const root =createRoot(document.getElementById("root"));
const router=createBrowserRouter([{
    path:'/',
    element:<Home/>

},{
    path:'/add',
    element:<Add/>
}])
root.render(<RouterProvider router={router}></RouterProvider>);