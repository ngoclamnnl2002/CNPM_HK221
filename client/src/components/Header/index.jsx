import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import messageIcon from "../../assets/icons/message.png";
import ringIcon from "../../assets/icons/ring.png";
import avatar from "../../assets/icons/avatar.png";
import menuIcon from "../../assets/icons/menu.png";
import style from "./style.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <Container>
        <Row>
          <Col lg={8}>
            <ul className={style.headerList}>
              <li>
                <div className={style.headerListLogo}>
                  <img
                    src={logo}
                    alt="logo"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </li>
              <li>
                <Link className={style.headerListLink}>Trang chủ</Link>
              </li>
              <li>
                <Link className={style.headerListLink}>Trang của tôi</Link>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <ul className={style.headerListIcon}>
              <li>
                <div className={style.headerListIconItem}>
                  <img
                    src={messageIcon}
                    alt="Icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </li>
              <li>
                <div className={style.headerListIconItem}>
                  <img
                    src={ringIcon}
                    alt="Icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </li>
              <li>
                <div className={style.headerListIconItem}>
                  <img
                    src={avatar}
                    alt="Icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </li>
              <Dropdown>
                <Dropdown.Toggle
                  align="start"
                  as="div"
                  bsPrefix="dropdownButton"
                  value="transparent"
                  id="dropdown-basic-button"
                >
                  <div style={{ width: "27.63px", height: "32.61px" }}>
                    <img
                      src={menuIcon}
                      alt="Icon"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className={style.menuDropdown}>
                  <Dropdown.Item href="#">Thông tin cá nhân</Dropdown.Item>
                  <Dropdown.Item href="#">Chat</Dropdown.Item>
                  <Dropdown.Item href="#">Thông báo</Dropdown.Item>
                  <Dropdown.Item href="#">Công việc của tôi</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Đăng xuất</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Header;
