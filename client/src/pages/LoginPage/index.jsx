import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../../assets/logo.png";
import backgroundImage from "../../assets/background-image.png";
import style from "./style.module.scss";

const LoginPage = () => {
  return (
    <div
      className={style.login}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={style.loginLogo}>
        <img src={logo} alt="logo" style={{ width: "100%", height: "100%" }} />
      </div>

      <h1 className={style.loginTitle}>Đăng nhập</h1>

      <Form className={style.loginForm}>
        <Form.Group className={style.loginFormItem} style={{marginBottom: "67px"}}>
          <Form.Control
            className={style.loginFormItemFill}
            type="text"
            placeholder="Tên đăng nhập"
            name="username"
            required
          />
        </Form.Group>
        <Form.Group className={style.loginFormItem} style={{marginBottom: "19px"}}>
          <Form.Control
            className={style.loginFormItemFill}
            type="password"
            placeholder="Mật khẩu"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className={style.loginFormForgot}>
            <Form.Label style={{marginRight: "30px"}}>Quên mật khẩu</Form.Label>
            <Form.Label style={{marginRight: "10px"}}>Tạo tài khoản</Form.Label>
        </Form.Group>
        <Form.Group className={style.loginFormCheck}>
          <Form.Check type="checkbox" label="Duy trì đăng nhập cho lần sau" />
        </Form.Group>
        <Button className={style.loginFormBtn} variant="primary" type="submit">
          Đăng nhập
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
