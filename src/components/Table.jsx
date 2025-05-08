import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

export default function Table() {
  const userData = useLoaderData();

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:8000/users/${userId}`)
      .then((response) => {
        console.log("User deleted successfully:", response.data);
        // Redirect to the home page after successful submission
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-3xl mb-2 ">List of Users</h1>
      <button className="text-2xl mb-2 ml-2 bg-blue-500 w-20 h-10 rounded-2xl flex items-center justify-center ">
        <Link to="/add">Add</Link>
      </button>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr
              key={user.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.first_name} {user.last_name}
              </th>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.gender}</td>
              <td className="px-6 py-4">{user.Age}</td>
              <td className="px-6 py-4">{user.phone_number}</td>
              <td className="px-6 py-4">{user.address}</td>
              <td className="px-6 py-4 flex flex-col gap-2">
                <Link
                  to={`edit/${user.id}`}
                  // onClick={() => handleEdit(user)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <a
                  onClick={() => handleDelete(user.id)}
                  className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
