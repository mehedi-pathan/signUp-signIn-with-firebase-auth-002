import "./signUpSignIn.scss";
import { BsLockFill } from "react-icons/bs";
import LogImg from "../../assets/log.svg";
import RegisterImg from "../../assets/register.svg";
import { useState } from "react";
import {
  FaUser,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";

const SignUpSignIn = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <div className={!isActive ? "signUp_signIn" : "signUp_signIn sign_up_mode"}>
      {/* sign up and sign in form start */}
      <div className="forms_container">
        <div className="signin_signup">
          <form action="#" className="sign_in_form">
            <h2 className="title">Sign in</h2>
            <div className="input_field">
              <i>
                <FaUser />
              </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input_field">
              <i>
                <BsLockFill />
              </i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social_text">Or Sign in with social platforms</p>
            <div className="social_media">
              <a href="##" className="social_icon">
                <i>
                  <FaFacebookF />
                </i>
              </a>
              <a href="##" className="social_icon">
                <i>
                  <FaTwitter />
                </i>
              </a>
              <a href="##" className="social_icon">
                <i>
                  <FaGoogle />
                </i>
              </a>
              <a href="##" className="social_icon">
                <i>
                  <FaLinkedin />
                </i>
              </a>
            </div>
          </form>
          <form action="#" className="sign_up_form">
            <h2 className="title">Sign up</h2>
            <div className="input_field">
              <i className="fas fa_user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input_field">
              <i className="fas fa_envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input_field">
              <i className="fas fa_lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social_text">Or Sign up with social platforms</p>
            <div className="social_media">
              <a href="##" className="social_icon">
                <i className="icon">
                  <FaFacebookF />
                </i>
              </a>
              <a href="##" className="social_icon">
                <i className="icon">
                  <FaTwitter />
                </i>
              </a>
              <a href="##" className="social_icon">
                <i className="icon">
                  <FaGoogle />
                </i>
              </a>
              <a href="##" className="social_icon">
                <i className="icon">
                  <FaLinkedin />
                </i>
              </a>
            </div>
          </form>
        </div>
      </div>
      {/* sign up and sign in form end */}

      <div className="panels_container">
        <div className="panel left_panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent"
              id="sign_up_btn"
              onClick={handleClick}
            >
              Sign up
            </button>
          </div>
          <img src={LogImg} className="image" alt="" />
        </div>
        <div className="panel right_panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent"
              id="sign_in_btn"
              onClick={handleClick}
            >
              Sign in
            </button>
          </div>
          <img src={RegisterImg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUpSignIn;
