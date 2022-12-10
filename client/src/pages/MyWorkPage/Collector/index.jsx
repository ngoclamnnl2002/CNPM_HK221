import "../../MyWorkPage/style.module.scss";
import style from "../../MyWorkPage/style.module.scss";
import {Header} from "../../../components/Header";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";

function MyComponent() {
  return (
    <Container className={style.buttoncontainer}>
      <Row>
        <Col className={style.button}>
          <Link to="/myworkpagecollector">
            <button className={style.activebutton}>Collector</button>
          </Link>
        </Col>
        <Col className={style.button}>
          <Link to="/myworkpagejanitor">
            <button className={style.nonactivebutton}>Janitor</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

function tasktable(taskname, time, assign) {
  return (
    <Container fluid className={style.task_container}>
      <Row className={style.task_name}>{taskname}</Row>
      <Row>
        <Col className={style.task_time}>Thời gian: {time}</Col>
        <Col className={style.task_assign}>Đã giao cho {assign}</Col>
      </Row>
    </Container>
  );
}

//endtime,area,from_location,to_location,detail
function WorkDetail(endtime, area, from_location, to_location, detail) {
  return (
    <Container className={style.workdetail}>
      <Row>Thời gian kết thúc: {endtime}</Row>
      <Row>Khu Vực: {area}</Row>
      <Row>
        <Col>Lộ Trình:</Col>
        <Col xs={8}>
          <Row>Từ MCP: {from_location}</Row>
          <Row>Đến MCP: {to_location}</Row>
        </Col>
      </Row>
      <Row>day la cai map</Row>
      <Row>Ghi chú(nếu có): {detail}</Row>
      <Row>
        <Col>
          <p className={style.quicktask}>Tao task nhanh</p>
        </Col>
        <Col className={style.button}>
          <button className={style.updatebutton}>Cập nhật</button>
        </Col>
      </Row>
    </Container>
  );
}

const MyWorkPageCollector = () => {
  return (
    <div>
      <Header />
      <Container className={style.container_body}>
        <Row>
          
          <Col sm>
            <Container className={style.task_table}>
              <Row className={style.title}>Công Việc Đã Giao</Row>
              <Row>{MyComponent()}</Row>
              <Row className={style.task_scroll}>
                {tasktable("Task 1", "11:10:2022", "Luc Gia Hung")}
                {tasktable("Task 2", "11:10:2022", "Luc Gia Hung")}
                {tasktable("Task 3", "11:10:2022", "Luc Gia Hung")}
                {tasktable("Task 1", "11:10:2022", "Luc Gia Hung")}
                {tasktable("Task 1", "11:10:2022", "Luc Gia Hung")}
                {tasktable("Task 1", "11:10:2022", "Luc Gia Hung")}
                {tasktable("Task 1", "11:10:2022", "Luc Gia Hung")}
                {tasktable("Task 1", "11:10:2022", "Luc Gia Hung")}
                {tasktable("Task 1", "11:10:2022", "Luc Gia Hung")}
                {tasktable("Task 1", "11:10:2022", "Luc Gia Hung")}
                {tasktable("Task 1", "11:10:2022", "Luc Gia Hung")}
                {tasktable("Task 1", "11:10:2022", "Luc Gia Hung")}
                {tasktable("Task 1", "11:10:2022", "Luc Gia Hung")}
                {tasktable("Task 1", "11:10:2022", "Luc Gia Hung")}
              </Row>
            </Container>
          </Col>
          <Col sm>
            <Container className={style.task_table}>
              <Row className={style.title}>Chi Tiết Công Việc</Row>
              <Row>
                {WorkDetail(
                  "11:20 23/11/2022",
                  "Quan 10",
                  "497, Hoa Hao",
                  "268 Ly Thuong Kiet",
                  "hung ko duoc boc rac ve nha` nha!"
                )}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default MyWorkPageCollector;
