import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Phone from "@mui/icons-material/Phone";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {Header} from "../../components/Header";
import Contacts from "../../components/Contacts";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

//Generate my message
function myMessage(messages = []) {
  return (
    <Container className={[styles.clusterMessage, styles.myMessage].join(" ")}>
      <Row>
        <Col sm="auto" className={styles.cluster}>
          {messages.map((message) => (
            <Row>
              <Col sm="auto" className={styles.message}>
                {message}
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

//Generate contacts message
function contactMessage(urlAvatar, messages = []) {
  return (
    <Container className={styles.clusterMessage}>
      <Row>
        <Col sm="auto" className={styles.avatar}></Col>
        <Col sm="auto" className={styles.cluster}>
          {messages.map((message) => (
            <Row>
              <Col sm="auto" className={styles.message}>
                {message}
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

//Create time line
function timeLine(time) {
  return <Row className={styles.timeLine}>{time}</Row>;
}

//main message page
const MessagePage = () => {
  return (
    <div>
      <Header />
      <Container
        fluid
        style={{ marginTop: "60px" }}
        className={styles.desktopMes}
      >
        <div className={styles.title}>Chat</div>
        <Row>
          <Col
            lg={3}
            className="border-end border-1 border-dark"
            style={{ backgroundColor: "#F8F9FA" }}
          >
            <Form.Control
              placeholder="Tìm kiếm"
              className={[styles.searchInput, "mb-3"]}
            />
            {/* Prefab for Contacts */}
            <div className={styles.listContacts}>
              <Contacts
                urlAvatar="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                name="Nguyen Thanh Vin"
                lastMessage="aaaaaa"
                time="5"
              />
              <Contacts
                urlAvatar="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                name="Nguyen Thanh Vin"
                lastMessage="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                time="5"
              />
              <Contacts
                urlAvatar="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                name="Nguyen Thanh Vin"
                lastMessage="aaaaaa"
                time="5"
              />
              <Contacts
                urlAvatar="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                name="Nguyen Thanh Vin"
                lastMessage="aaaaaa"
                time="5"
              />
              <Contacts
                urlAvatar="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                name="Nguyen Thanh Vin"
                lastMessage="aaaaaa"
                time="5"
              />
              <Contacts
                urlAvatar="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                name="Nguyen Thanh Vin"
                lastMessage="aaaaaa"
                time="5"
              />
              <Contacts
                urlAvatar="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                name="Nguyen Thanh Vin"
                lastMessage="aaaaaa"
                time="5"
              />
              <Contacts
                urlAvatar="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                name="Nguyen Thanh Vin"
                lastMessage="aaaaaa"
                time="5"
              />
              <Contacts
                urlAvatar="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                name="Nguyen Thanh Vin"
                lastMessage="aaaaaa"
                time="5"
              />
              <Contacts
                urlAvatar="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                name="Nguyen Thanh Vin"
                lastMessage="aaaaaa"
                time="5"
              />
            </div>
            {/* Prefab for Contacts */}
          </Col>

          <Col lg={9}>
            <Row className={styles.currentContact}>
              <Col sm={1}>
                <div className={styles.avatar}>
                  <img
                    src="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                    alt=""
                    style={{
                      borderRadius: "50%",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </Col>
              <Col sm={5} className={styles.name}>
                Pham Thanh Vinh
              </Col>
              <Col className={"d-flex justify-content-end " + styles.icon}>
                <Phone sx={{ fontSize: 40 }} />
                <VideoCameraFrontIcon sx={{ fontSize: 40 }} />
              </Col>
            </Row>
            <Container className={styles.mainChat}>
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {timeLine("18:30")}
              {myMessage([
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaa",
                "aaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage(["aaaaa", "aaaaa"])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage([
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaa",
                "aaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage(["aaaaa", "aaaaa"])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage([
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaa",
                "aaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage(["aaaaa", "aaaaa"])}
              {timeLine("20:00")}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage([
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaa",
                "aaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage(["aaaaa", "aaaaa"])}
            </Container>
            <Row className={styles.functionBar}>
              <Col lg={2} className={styles.icon}>
                <AddCircleSharpIcon sx={{ fontSize: 40 }} />
                <ImageOutlinedIcon sx={{ fontSize: 40 }} />
                <InsertDriveFileIcon sx={{ fontSize: 40 }} />
              </Col>
              <Col lg={10}>
                <Form.Group>
                  <Row>
                    <Col>
                      <Form.Control placeholder="Enter message"></Form.Control>
                    </Col>
                    <Col lg={1}>
                      <PlayCircleIcon
                        sx={{ fontSize: 40 }}
                        type="submit"
                        className={styles.formButton}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{ marginTop: "60px" }}
        className={styles.mobileMes}
      >
        <Row>
          <Col
            lg={12}
            className="border-end border-1 border-dark"
            style={{ backgroundColor: "#F8F9FA" }}
          >
            <Form.Control
              placeholder="Tìm kiếm"
              className={[styles.searchInput, "mb-3"]}
            />
            {/* Prefab for Contacts */}
            <div className={styles.listContacts}>
              <Link to={`/tin-nhan/Nguyen-Thanh-Vin`} style={{textDecoration: 'none', color: 'black'}}>
                <Contacts
                  urlAvatar="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                  name="Nguyen Thanh Vin"
                  lastMessage="aaaaaa"
                  time="5"
                />
              </Link>
              <Link to={`/tin-nhan/Nguyen-Thanh-Vin`} style={{textDecoration: 'none', color: 'black'}}>
                <Contacts
                  urlAvatar="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                  name="Nguyen Thanh Vin"
                  lastMessage="aaaaaa"
                  time="5"
                />
              </Link><Link to={`/tin-nhan/Nguyen-Thanh-Vin`} style={{textDecoration: 'none', color: 'black'}}>
                <Contacts
                  urlAvatar="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                  name="Nguyen Thanh Vin"
                  lastMessage="aaaaaa"
                  time="5"
                />
              </Link>
            </div>
            {/* Prefab for Contacts */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MessagePage;
