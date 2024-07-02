import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'animate.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main_Layout from "./assets/Components/Main_Layout/Main_Layout.jsx";
import Home from "./assets/Components/Home/Home.jsx";
import All_Art_Items from "./assets/Components/All_Art_Items/All_Art_Items.jsx";
import Add_Craft_Items from "./assets/Components/Add_Craft_Items/Add_Craft_Items.jsx";
import My_Art_List from "./assets/Components/My_Art_List/My_Art_List.jsx";
import Login from "./assets/Components/Login/Login.jsx";
import Register from "./assets/Components/Register/Register.jsx";
import Firebase_AuthProvider from "./assets/Components/Firebase_AuthProvider/Firebase_AuthProvider.jsx";
import Add_Craft from "./assets/Components/Private_Routes/Add_Craft.jsx";
import My_Arts from "./assets/Components/Private_Routes/My_Arts.jsx";
import Craft_Details from "./assets/Components/Craft_Details/Craft_Details.jsx";
import Craft_Secret from "./assets/Components/Private_Routes/Craft_Secret";
import Update_Craft from "./assets/Components/Update_Craft/Update_Craft.jsx";
import Update_Craft_Private from "./assets/Components/Private_Routes/Update_Craft_Private.jsx";
import Uni_Error from './assets/Components/Error_Page/Uni_Error';
import Subcategory_Page from "./assets/Components/Subcategory_Page/Subcategory_Page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout></Main_Layout>,
    errorElement: <Uni_Error></Uni_Error>,
    children: [
      {
        path: "/",
        element: <Home title="Paint Home"></Home>,
        loader: () => fetch("https://paint-server-eight.vercel.app/home_all_crafts")
      },
      {
        path: "/all-art-items",
        element: <All_Art_Items title="All Art Items"></All_Art_Items>,
        loader: () => fetch("https://paint-server-eight.vercel.app/all_art_items"),
      },
      {
        path: "/add-craft-item",
        element: (
          <Add_Craft>
            <Add_Craft_Items title="Add Craft Items"></Add_Craft_Items>
          </Add_Craft>
        ),
      },
      {
        path: "/my-art-list/:email",
        element: (
          <My_Arts>
            <My_Art_List title="My Art List"></My_Art_List>
          </My_Arts>
        ),
        loader: ({ params }) =>
          fetch(`https://paint-server-eight.vercel.app/my_art_list/${params.email}`),
      },
      {
        path: "/subcategory_cards/:subcategory",
        element:<Subcategory_Page title="Subcategory Page"></Subcategory_Page>,
        loader:({params})=>fetch(`https://paint-server-eight.vercel.app/subcategory/${params.subcategory}`),
      },
      {
        path: "/log_in",
        element: <Login title="Log In"></Login>,
      },
      {
        path: "/register",
        element: <Register title="Register"></Register>,
      },
      {
        path: "/craft_details/:id",
        element: (
          <Craft_Secret>
            <Craft_Details title="Craft Details"></Craft_Details>
          </Craft_Secret>
        ),
        loader: ({ params }) =>
          fetch(`https://paint-server-eight.vercel.app/art_item_details/${params.id}`),
      },
      {
        path: "/all-art-items/craft_details/:id",
        element: (
          <Craft_Secret>
            <Craft_Details title="Craft Details"></Craft_Details>
          </Craft_Secret>
        ),
        loader: ({ params }) =>
          fetch(`https://paint-server-eight.vercel.app/art_item_details/${params.id}`),
      },
      {
        path: "/update-craft/:id",
        element: (
          <Update_Craft_Private>
            <Update_Craft title="Update Your Craft"></Update_Craft>
          </Update_Craft_Private>
        ),
        loader: ({ params }) =>
          fetch(`https://paint-server-eight.vercel.app/art_item_details/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Firebase_AuthProvider>
      <RouterProvider router={router} />
    </Firebase_AuthProvider>
  </React.StrictMode>
);
