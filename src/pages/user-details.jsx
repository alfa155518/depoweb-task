import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DefaultUserImg from "../images/default.WebP";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const UserDetails = () => {
  const ApiUsers = process.env.REACT_APP_API_URL;

  const [userDetails, setUserDetails] = useState([]);

  const { id } = useParams();

  const fetchUserData = async () => {
    try {
      const { data } = await axios(ApiUsers);
      const findUserDetails = data.find((user) => user.id === Number(id));

      // Check if user details were found
      if (findUserDetails) {
        setUserDetails(findUserDetails);
      } else {
        console.error("User not found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

  console.log(userDetails);
  return (
    <section className="user-details">
      <div className="user-img">
        <img src={DefaultUserImg} alt="user-img" />
      </div>
      <h3 className="name">
        Name: <span> {userDetails.name?.firstname}</span>
      </h3>
      <p className="email">
        Email: <span>{userDetails.email}</span>
      </p>
      <strong className="phone">
        Phone: <span>{userDetails.phone}</span>
      </strong>
      <p className="city">
        City: <span>{userDetails.address?.city}</span>
      </p>
      <button className="btn-back">
        <Link to={"/"}>
          <FaArrowAltCircleLeft className="arrow" />
        </Link>
      </button>
    </section>
  );
};

export default UserDetails;
