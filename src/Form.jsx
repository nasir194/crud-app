import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/users", user)
      .then((response) => {
        console.log("User added successfully:", response.data);
        navigate("/"); // Redirect to the home page after successful submission
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newUser = {
  //     firstName: user.firstName,
  //     lastName: user.lastName,
  //     age: user.age,
  //     phone: user.phone,
  //     email: user.email,
  //     gender: user.gender,
  //     address: user.address.address,
  //   };

  //   onAddUser(newUser);
  // };
  // setUser({
  //   firstName: "",
  //   lastName: "",
  //   age: "",
  //   phone: "",
  //   email: "",
  //   gender: "",
  //   address: {
  //     address: "",
  //   },
  // });

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg space-y-6 "
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          User Information
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
            onChange={(e) => setUser({ ...user, gender: e.target.value })}
            className="px-4 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              for="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              onChange={(e) => setUser({ ...user, age: e.target.value })}
              id="age"
              name="age"
              min="0"
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
