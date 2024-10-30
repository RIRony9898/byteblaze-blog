import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Blogs from "./pages/Blogs/Blogs";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import MainLayout from "./layouts/MainLayout/MainLayout";
import SingleFullBlog from "./pages/SingleFullBlog/SingleFullBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("https://dev.to/api/articles?top=7"),
      },
      {
        path: "/blog/:id",
        element: <SingleFullBlog/>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
      },
      { path: "/bookmarks", element: <Bookmarks /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
