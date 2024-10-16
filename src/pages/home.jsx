import axios from "axios";
import { useEffect, useState } from "react";
import DefaultUserImg from "../images/default.WebP";
import { Link } from "react-router-dom";
const Home = () => {
  const ApiUsers = process.env.REACT_APP_API_URL;

  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(ApiUsers);
      setAllUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  console.log(allUsers);

  useEffect(() => {
    getAllUsers();
  }, []);

  console.log(allUsers);
  return (
    <section className="all-users">
      {allUsers.length > 0 ? (
        allUsers.map((user) => (
          <div key={user.id} className="user">
            <div className="user-img">
              <img src={DefaultUserImg} alt="user-img" />
            </div>
            <h2 className="name">{user.name.firstname}</h2>
            <p className="email">{user.email}</p>
            <strong className="phone">{user.phone}</strong>
            <button className="user-info">
              <Link to={`user-details/${user.id}`}>user info</Link>
            </button>
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </section>
  );
};

export default Home;
