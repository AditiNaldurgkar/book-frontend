import react from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./views/home/home";
const root =createRoot(document.getElementById("root"));
const router=createBrowserRouter([{
    path:'/',
    element:<Home/>

}])
root.render(<RouterProvider router={router}></RouterProvider>);