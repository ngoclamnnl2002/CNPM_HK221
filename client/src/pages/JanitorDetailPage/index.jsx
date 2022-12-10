import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Calendar from "react-calendar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";
import Banner from "../../components/Banner";
import { HeaderOfJanitor } from "../../components/Header";
import styles from "./styles.module.scss";

const JanitorDetailPage = () => {
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
              <div className={styles.task}>
                <h4>Công việc 1</h4>
                <div className={styles.taskContent}>
                  <p>Thời hạn: 14:30 ngày 07/12/2022</p>
                  <p>Khu vực: Quận 10, Tp.HCM</p>
                  <p>Địa điểm thu gom: 256 Sư Vạn Hạnh, phường 10</p>
                  <p>Ghi chú: Không có</p>
                </div>
              </div>
              <Link to="/janitor/trang-chu" className={styles.footer}>
                <ChevronLeftIcon sx={{ fontSize: 40 }} />
                <p>Trở lại</p>
              </Link>
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

export default JanitorDetailPage;
