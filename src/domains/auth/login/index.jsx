import "../authStyles.css";

import { loginImage } from "../../../assets";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <section className="_form_05">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="_form-05-box formWrapper">
              <div className="row">
                <div className="col-sm-6 _nb-pl">
                  <div className="_mn_df">
                    <div className="main-head">
                      <h2>Login to your account</h2>
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="customInput"
                        placeholder="   Enter Email"
                        required=""
                        aria-required="true"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        className="customInput"
                        placeholder="   Enter Password"
                        required=""
                        aria-required="true"
                      />
                    </div>

                    <div className="checkbox form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label className="form-check-label" htmlFor="">
                          Remember me
                        </label>
                      </div>
                      <a href="#">Forgot Password</a>
                    </div>

                    <div className="form-group">
                      <div
                        className="btn"
                        onClick={() => navigate("/dashboard")}
                      >
                        <a href="#">Login</a>
                      </div>
                    </div>

                    <div className="text-center fs-6">
                      Don`t have an account ?
                      <Link to={"/register"}>Sign up</Link>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 _lk_nb mobile_view">
                  <div className="iconWrapper">
                    <img src={loginImage} alt="" />
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

export default LoginPage;
