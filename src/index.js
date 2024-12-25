import react from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
const root =createRoot(document.getElementById("root"));
const router=createBrowserRouter([{
    path:'/',
    element:<h1>hie</h1>

}])
root.render(<RouterProvider router={router}></RouterProvider>);