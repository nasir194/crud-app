import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function Form() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    Age: "",
    phone_number: "",
    email: "",
    gender: "",
    address: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id); // 1 , id you click
  const editUser = useLoaderData();
  console.log(editUser); // obj of the corresponding id, obj with id=1

  // when i click edit button i get id and user data which logic written in routes in App component
  // but for Add i dont get any id or data
  useEffect(() => {
    if (id && editUser) {
      setUser(editUser);
    }
  }, [id, editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      // Edit existing user
      axios
        .put(`http://localhost:8000/users/${id}`, user)
        .then((response) => {
          console.log("User updated successfully:", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    } else {
      // Add new user
      axios
        .post("http://localhost:8000/users", user)
        .then((response) => {
          console.log("User added successfully:", response.data);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error adding user:", error);
        });
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg space-y-6 "
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          {id ? "Edit Employee" : "Add New Employee"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              for="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={user.first_name}
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
              className="mt-1 px-4 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={user.last_name}
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
              className="px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label
            for="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            for="last_name"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={user.gender}
            onChange={(e) => setUser({ ...user, gender: e.target.value })}
            className="px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              for="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={user.Age}
              onChange={(e) => setUser({ ...user, Age: e.target.value })}
              className="px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="phone_number"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              onChange={(e) =>
                setUser({ ...user, phone_number: e.target.value })
              }
              id="phone_number"
              name="phone_number"
              value={user.phone_number}
              className="px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label
            for="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <textarea
            id="address"
            onChange={(e) => setUser({ ...user, address: e.target.value })}
            name="address"
            value={user.address}
            rows="3"
            className="px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
          >
            {id ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
