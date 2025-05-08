import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
// https://dummyjson.com/users

const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />,
    errorElement: <div>Page Not Found</div>,
    loader: async () => {
      const response = await axios.get("http://localhost:8000/users");
      console.log(response.data);
      return response.data;
    },
  },
  {
    path: "/add",
    element: <Form />,
  },
  {
    path: "/edit/:id",
    element: <Form />,

    // get data of a specific user and send it to the Form component
    loader: async ({ params }) => {
      console.log(params); // params = {id: '1'}, http://localhost:8000/users/params
      const response = await axios.get(
        `http://localhost:8000/users/${params.id}`
      );
      return response.data;
    },
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
