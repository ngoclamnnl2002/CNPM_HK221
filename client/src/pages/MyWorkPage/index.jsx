import React, { useState } from "react";
import Calendar from "react-calendar";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "./styles.module.scss";
import {Header} from "../../components/Header";

const MyWorkPage = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Header />
      <Container style={{ marginTop: "80px" }}>
        <Row>
          <Col lg={4}>
            <div className={styles.bodyCreate}>
              <div className={styles.bodyCreateTitle}>Công Việc Đã Giao</div>
              <Tabs
                defaultActiveKey="collector"
                id="uncontrolled-tab-example"
                className="mb-3"
                justify
              >
                <Tab eventKey="collector" title="Collector">
                  {/* <FormOfCollector /> */}
                </Tab>
                <Tab eventKey="janitor" title="Janitor">
                  {/* <FormOfJanitor /> */}
                </Tab>
              </Tabs>
            </div>
          </Col>
          <Col lg={4}>lam</Col>
          <Col lg={4}>
            <Calendar
              onChange={onChange}
              value={value}
              minDate={new Date(2020, 0, 1)}
              maxDate={new Date(2024, 12, 0)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyWorkPage;
