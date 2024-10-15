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
  console.log(id);
  const fetchUserData = async () => {
    const { data } = await axios(ApiUsers);

    const findUserDetails = await data.find((user) => {
      return user.id === Number(id);
    });
    const user = await findUserDetails;
    return setUserDetails(user);
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
