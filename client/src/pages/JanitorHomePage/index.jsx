import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Calendar from "react-calendar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";
import Banner from "../../components/Banner";
import { HeaderOfJanitor } from "../../components/Header";
import styles from "./styles.module.scss";

const JanitorHomePage = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{ backgroundColor: "#F8F9FA", paddingBottom: "20px" }}>
      <HeaderOfJanitor />

      <Banner image={banner} alt="banner" />

      <Container className={styles.body}>
        <Row>
          <Col sm={12} className={styles.bodyTitle}>
            <h4>Nhân viên thu gom rác</h4>
          </Col>
          <Col sm={12} style={{ position: "relative", marginBottom: "40px" }}>
            <p className={styles.title}>Công việc:</p>
            <div className={styles.bodyTask}>
              <p className={styles.time}>Hôm nay 09/12/2022</p>
              <div className={styles.task}>
                <h4>Công việc 1</h4>
                <div className={styles.taskContent}>
                  <p>Khu vực: Quận 10, Tp.HCM</p>
                  <p>Thời hạn: 14:30</p>
                </div>
                <Link to="/janitor/chi-tiet-cong-viec">
                  <NavigateNextIcon />
                </Link>
              </div>
              <div className={styles.task}>
                <h4>Công việc 1</h4>
                <div className={styles.taskContent}>
                  <p>Khu vực: Quận 10, Tp.HCM</p>
                  <p>Thời hạn: 14:30</p>
                </div>
                <Link to="/janitor/chi-tiet-cong-viec">
                  <NavigateNextIcon />
                </Link>
              </div>
              <div className={styles.task}>
                <h4>Công việc 1</h4>
                <div className={styles.taskContent}>
                  <p>Khu vực: Quận 10, Tp.HCM</p>
                  <p>Thời hạn: 14:30</p>
                </div>
                <Link to="/janitor/chi-tiet-cong-viec">
                  <NavigateNextIcon />
                </Link>
              </div>
              <div className={styles.task}>
                <h4>Công việc 1</h4>
                <div className={styles.taskContent}>
                  <p>Khu vực: Quận 10, Tp.HCM</p>
                  <p>Thời hạn: 14:30</p>
                </div>
                <Link to="/janitor/chi-tiet-cong-viec">
                  <NavigateNextIcon />
                </Link>
              </div>
            </div>
          </Col>
          <div className={styles.calendar}>
            <Calendar
              onChange={onChange}
              value={value}
              minDate={new Date(2020, 0, 1)}
              maxDate={new Date(2024, 12, 0)}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default JanitorHomePage;
