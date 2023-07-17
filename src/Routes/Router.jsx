import { createBrowserRouter } from "react-router-dom";
import Main from "../Componants/Main";

export const router=createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
      },
])