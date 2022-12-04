import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../components/Header";
import banner from "../../assets/banner.png";
import avatar from "../../assets/icons/avatar.png";
import Banner from "../../components/Banner";
import style from "./style.module.scss";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#F8F9FA" }}>
      <Header />
      <Banner image={banner} alt="banner"/>
      <Container className={style.body}>
        <Row>
          <Col lg={4}>
            <Row>
              <Col lg={12} className={style.bodyInfo}>
                <div className={style.bodyInfoAvatar}>
                  <img
                    src={avatar}
                    alt="avatar"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className={style.bodyInfoName}>
                  <p>Phạm Trọng Sơn</p>
                  <p>
                    <b>Chức vụ:</b> officer
                  </p>
                </div>
              </Col>
              <Col lg={12} className={style.bodyCreate}>
                <Form className={style.form}>
                  <Form.Group className={style.formItem}>
                    <Form.Control
                      className={style.formItemFill}
                      type="text"
                      placeholder="Tên nhiệm vụ"
                      name="task"
                      required
                    />
                  </Form.Group>

                  <Form.Group className={style.formItem}>
                    <Form.Select
                      lassName={style.formItemSelect}
                      name="date"
                      required
                    >
                      <option>Ngày thực hiện</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className={style.formItem}>
                    <Form.Select
                      lassName={style.formItemSelect}
                      name="nameAssign"
                      required
                    >
                      <option>Tên nhân viên khu vực</option>
                      <option value="Lam">Lam</option>
                      <option value="Son">Son</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Label>Lộ trình</Form.Label>

                  <Form.Group className={style.formItem}>
                    <Form.Control
                      className={style.formItemFill}
                      type="text"
                      placeholder="Điểm xuất phát"
                      name="startPoint"
                      required
                    />
                  </Form.Group>

                  <Form.Group className={style.formItem}>
                    <Form.Control
                      className={style.formItemFill}
                      type="text"
                      placeholder="Điểm kết thúc"
                      name="endPoint"
                      required
                    />
                  </Form.Group>

                  <Form.Group className={style.formItem}>
                    <Form.Control
                      className={style.formItemFill}
                      type="text"
                      placeholder="Thêm điểm dừng"
                      name="stopPoint"
                      required
                    />
                  </Form.Group>

                  <Form.Group className={style.formItem}>
                    <Form.Select
                      lassName={style.formItemSelect}
                      name="date"
                      required
                    >
                      <option>Phương tiện</option>
                      <option value="Lam">Lam</option>
                      <option value="Son">Son</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className={style.formItem}>
                    <Form.Control
                      className={style.formItemFill}
                      type="text"
                      placeholder="Ghi chú"
                      name="note"
                      required
                    />
                  </Form.Group>

                  <Button
                    className={style.formBtn}
                    variant="primary"
                    type="submit"
                  >
                    Tạo nhiệm vụ
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col lg={8}>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
