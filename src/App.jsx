import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
// import { Link } from "react-router-dom";

// https://dummyjson.com/users
function App() {
  const [userData, setUserData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleDelete = async (id) => {
    const response = axios.delete(`http://localhost:8000/users/${id}`);
    console.log(response.data);
    // setUserData(userData.filter((user) => user.id !== id));
  };
  const handleEdit = (user) => {
    setEditUser(user);
    setShowForm(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const reponse = await axios.get("http://localhost:8000/users");
        console.log(reponse.data);
        setUserData(reponse.data); // here we get and set the data in posts variable
      } catch (error) {
        console.log(error); // AxiosError object
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <div>
        <Table userData={userData} onDelete={handleDelete} />

        {showForm && <Form onEdit={handleEdit} editUser={editUser} />}
      </div>
    </>
  );
}

export default App;
