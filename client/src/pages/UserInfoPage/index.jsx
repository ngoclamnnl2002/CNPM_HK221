import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Header} from "../../components/Header";
import Banner from "../../components/Banner";
import coverImage from "../../assets/userInfo/coverImage.png";
import avatarImage from "../../assets/userInfo/avatarImage.png";
import styles from "./style.module.scss";

const UserInfoPage = () => {
  return (
    <div style={{ backgroundColor: "#fff", height: '100vh' }}>
      <Header />
      <Banner image={coverImage} alt="coverImage" />
      <Container className={styles.body}>
        <Row>
          <Col lg={6} className={styles.bodyInfo}>
            <div className={styles.bodyInfoTop}>
              <div className={styles.bodyInfoTopImg}>
                <img
                  src={avatarImage}
                  alt="avatarImage"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <p>Pham Trong Son</p>
            </div>
            <div className={styles.bodyInfoBottom}>
              <p>Chức vụ: Back officer</p>
              <p>Ngày sinh: 07/07/1977</p>
              <p>Địa chỉ: 268 Lý Thường Kiệt, P14, Q10, TpHCM</p>
              <p>Số điện thoại: 0909890098</p>
              <p>Email: Sieunhangao@gmail.com</p>
              <p>Ngày vào làm: 01/01/2020</p>
            </div>
          </Col>
          <Col lg={6} className={styles.bodyHistory}>
            <Row>
              <Col lg={12}>
                <div className={styles.history}>
                  <h3>Lịch sử đăng nhập</h3>
                  <p>Đăng nhập lần cuối vào ngày 19/11/2022</p>
                </div>
              </Col>
              <Col lg={12}>
                <div className={styles.other}>
                  <h3>Thông tin khác</h3>
                  <p>Hồ sơ xin việc</p>
                  <p>Hợp đồng lao động</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserInfoPage;
