import Link from "next/link";
import { LayoutSix } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { useState } from "react";
import { register } from "../../api/auth";
import { useRouter } from "next/router";

const Register = () => {
  const [formField, setFormField] = useState({
    name: "",
    email: "",
    cpassword: "",
    password: "",
  });

  const router = useRouter();
  const handleChange = ({ target }) => {
    let data = { ...formField };
    data[target.name] = target.value;
    setFormField(data);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formField);
      console.log("====================================");
      console.log(response?.data);
      console.log("====================================");
      router.push("/other/login");
    } catch (error) {
      console.log("====================================");
      console.log(error?.response?.data);
      console.log("====================================");
    }
  };
  // console.log(formField);
  return (
    <LayoutSix>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Register">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Register</li>
        </ol>
      </BreadcrumbOne>
      <div className="login-content space-pt--r100 space-pb--r100">
        <Container>
          <Row className="justify-content-center">
            <Col xl={6} md={10}>
              <div className="login-wrap">
                <div className="heading-s1 space-mb--20">
                  <h3>Create An Account</h3>
                </div>
                <div>
                  <form method="post">
                    <div className="form-group">
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        value={formField.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        value={formField.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formField.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        required
                        type="password"
                        name="cpassword"
                        placeholder="Confirm Password"
                        value={formField.cpassword}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="login-footer form-group">
                      <div className="check-form">
                        <div className="custom-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox1"
                            defaultValue
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox1"
                          >
                            <span>I agree to terms & Policy.</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-fill-out btn-block"
                        name="login"
                        onClick={handleRegister}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <div className="different-login">
                    <span> or</span>
                  </div>
                  <ul className="btn-login text-center">
                    <li>
                      <a href="#" className="btn btn-facebook">
                        <FaFacebookF />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-google">
                        <FaGooglePlusG />
                        Google
                      </a>
                    </li>
                  </ul>
                  <div className="form-note text-center space-mt--20">
                    Already have an account?{" "}
                    <Link href="/other/login">
                      <a>Log in</a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutSix>
  );
};

export default Register;
