import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";

// https://dummyjson.com/users
function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => setUserData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Table userData={userData} />
    </>
  );
}

export default App;
