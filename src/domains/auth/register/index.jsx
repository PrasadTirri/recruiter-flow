import "../authStyles.css";
import { registerImage } from "../../../assets";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <section className="_form_05">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <div className="_form-05-box formWrapper">
              <div className="row">
                <div className="col-sm-5 _lk_nb mobile_view">
                  <div className="iconWrapper">
                    <img src={registerImage} alt="" />
                  </div>
                </div>
                <div className="col-sm-7 _nb-pl">
                  <div className="_mn_df">
                    <div className="main-head">
                      <h2>Join Us</h2>
                    </div>

                    <div className="registerForm">
                      <div className="form-group d-flex">
                        <input
                          name="email"
                          className="customInput"
                          type="text"
                          placeholder="First Name"
                          required=""
                          aria-required="true"
                        />
                        <input
                          name="email"
                          className="customInput"
                          type="text"
                          placeholder="Last Name"
                          required=""
                          aria-required="true"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          name="password"
                          className="customInput"
                          type="email"
                          placeholder="Enter Your Email"
                          required=""
                          aria-required="true"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          className="customInput"
                          placeholder="Enter Password"
                          required=""
                          aria-required="true"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          className="customInput"
                          placeholder="Confirm Password"
                          required=""
                          aria-required="true"
                        />
                      </div>

                      <div className="form-group">
                        <div
                          className="btn"
                          onClick={() => navigate("/dashboard")}
                        >
                          <a href="#">Sign up</a>
                        </div>
                      </div>
                    </div>

                    <div className="text-center fs-6">
                      Already have an account ?<Link to={"/login"}>Login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
