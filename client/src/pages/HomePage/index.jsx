import { useSelector } from "react-redux";
import { Header, HeaderOfJanitor } from "../../components/Header";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import EmployeeBody from "../../components/EmployeeBody";
import OfficerBody from "../../components/OfficerBody";
import banner from "../../assets/banner.png";
import Banner from "../../components/Banner";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/");
    }
  });

  const checkTypeAccount = useSelector(
    (state) => state.login.login?.currentUser.user.typeAccount
  );

  return (
    <div style={{ backgroundColor: "#F8F9FA", paddingBottom: "20px" }}>
      {checkTypeAccount === 0 ? <Header /> : <HeaderOfJanitor />}

      <Banner image={banner} alt="banner" />

      {checkTypeAccount === 0 ? <OfficerBody /> : <EmployeeBody />}
    </div>
  );
};

export default HomePage;
