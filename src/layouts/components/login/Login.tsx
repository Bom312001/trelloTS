import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginSocialGoogle } from "reactjs-social-login";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../../redux-saga/actions/actions";
import routes from "../../../config/routes";

import { titleFooter } from "../../../assets/data/TitleFooter";
import image from "../../../assets/images/anh1.jpg";
import {
  IconApple,
  IconGG,
  IconMicro,
  IconSlack,
} from "../../../assets/images/icon";
import { dataOption } from "../../../assets/data/DataOption";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>(
    localStorage.getItem("email") || ""
  );
  const [password, setPassword] = useState<string>(
    localStorage.getItem("pass") || ""
  );

  const handleLogin = (data: { email: string; password: string }) => {
    // debugger
    dispatch(login(data));
    navigate(routes.home);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
  };

  return (
    <div className=" relative flex flex-col justify-between min-h-screen">
      {/* form */}
      <div className="block">
        <img
          className="block h-11 mx-auto my-10 "
          src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
          alt="trello"
        />
        <section className="w-full p-0 mb-1 overflow-visible">
          <div className={cx("section-wrapper", "max-w-[400px]", "mx-auto")}>
            <div className="bg-white rounded-sm px-6 py-10 shadow ">
              <h1 className="text-center font-semibold text-current text-base tracking-tight leading-7 mt-2 mb-6">
                {" "}
                Log in to Trello
              </h1>
              <div>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .required("Email is required")
                      .email("Email is invalid"),
                    password: Yup.string()
                      .required("Password is required")
                      .min(8, "Password must have min 8 characters"),
                  })}
                  onSubmit={(values) => {
                    handleLogin(values);
                  }}
                >
                  {(props) => (
                    <form onSubmit={props.handleSubmit}>
                      <div>
                        {/* <span className="">Email</span> */}
                        <input
                          className="w-full max-w-[400px] bg-[#EDEFF0] p-2 mb-2 focus:outline-none rounded-sm"
                          type="email"
                          name="email"
                          placeholder="email..."
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.email}
                        />
                        {props.errors.email && props.touched.email && (
                          <div className="input-feedback">
                            {props.errors.email}
                          </div>
                        )}
                      </div>
                      <div>
                        {/* <span className="">Password</span> */}
                        <input
                          className="w-full max-w-[400px] bg-[#EDEFF0] mt-2 p-2 mb-2 focus:outline-none rounded-sm"
                          type="password"
                          name="password"
                          placeholder="password..."
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.password}
                        />
                        {props.errors.password && props.touched.password && (
                          <div className="input-feedback">
                            {props.errors.password}
                          </div>
                        )}
                      </div>
                      <div>
                        <input
                          className={cx(
                            "form__submit",
                            "bg-green-700",
                            "w-full",
                            "text-white",
                            "cursor-pointer",
                            "font-bold",
                            "mt-2",
                            "py-2",
                            "rounded"
                          )}
                          type="submit"
                          value="Continue"
                        />
                      </div>
                    </form>
                  )}
                </Formik>

                {/* Mang xa hoi */}
                <div>
                  <p className="text-center my-4 text-base">Or</p>
                  <div>
                    <LoginSocialGoogle
                      client_id={
                        "704184612315-oud7er664ft6k70hs8eaqcdlhjvj1kg0.apps.googleusercontent.com"
                      }
                      scope="openid profile email"
                      discoveryDocs="claims supported"
                      access_type="offline"
                      onResolve={({ provider, data }) => {
                        console.log(provider, data);
                      }}
                      onReject={(err) => {
                        console.log(err);
                      }}
                    >
                      <div className={cx("btn-icon", "bg-white")}>
                        <span
                          className={cx(
                            "btn-text",
                            "flex",
                            "justify-center",
                            "items-center"
                          )}
                        >
                          <IconGG />
                          <span className="ml-2">Continue with Google</span>
                        </span>
                      </div>
                    </LoginSocialGoogle>
                  </div>

                  {/* Microsoft */}
                  <div>
                    <div className={cx("btn-icon", "bg-white")}>
                      <span
                        className={cx(
                          "btn-text",
                          "flex",
                          "justify-center",
                          "items-center"
                        )}
                      >
                        <IconMicro />
                        <span className="ml-2">Continue with Microsoft</span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className={cx("btn-icon", "bg-white")}>
                      <span
                        className={cx(
                          "btn-text",
                          "flex",
                          "justify-center",
                          "items-center"
                        )}
                      >
                        <IconApple />
                        <span className="ml-2">Continue with Apple</span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className={cx("btn-icon", "bg-white")}>
                      <span
                        className={cx(
                          "btn-text",
                          "flex",
                          "justify-center",
                          "items-center"
                        )}
                      >
                        <IconSlack />
                        <span className="ml-2">Continue with Slack</span>
                      </span>
                    </div>
                  </div>
                </div>
                <hr className={cx("hr")} />
              </div>

              <ul className={cx("link-sign")}>
                <li className={cx("link-sign_li")}>
                  <a className={cx("forgotLink")} href="/">
                    Can't log in?
                  </a>
                </li>
                <li className={cx("link-sign_li", "ml-3")}>
                  <a className={cx("signupLink")} href="/">
                    Sign up for an account
                  </a>
                </li>
              </ul>
            </div>

            <ul className={cx("link-sign", "text-xs", "py-4")}>
              <li className={cx("link-sign_li")}>
                <a className={cx("forgotLink")} href="/">
                  Privacy Policy
                </a>
              </li>
              <li className={cx("link-sign_li", "ml-3")}>
                <a className={cx("signupLink")} href="/">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* footer */}
      <footer
        className={cx(
          "global-footer",
          "mt-3",
          "text-sm",
          "mb-6",
          "text-center"
        )}
      >
        <div className={cx("select-container")}>
          <select
            className={cx("selection-option")}
            name="language-picker"
            id="language-picker"
            aria-label="Select your language…"
          >
            <option value="choose-one" id="choose" disabled>
              Select your language…
            </option>
            {dataOption.map((dataOp) => (
              <option
                key={dataOp.id.toString()}
                value={dataOp.ac.toString()}
                data-url={dataOp.route}
              >
                {dataOp.title}
              </option>
            ))}
          </select>
          <FontAwesomeIcon
            className={cx("selection__icon")}
            icon={faChevronDown as IconProp}
          />
        </div>

        {/* imgage footer */}
        <div className={cx("footer__logo", "text-center", "mt-4")}>
          <img
            className={cx(
              "atlassian-logo",
              "w-36",
              "inline-block",
              "mt-[1px]",
              "mb-3"
            )}
            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg"
            alt=""
          />
        </div>

        <ul className={cx("global-footer-list")}>
          {titleFooter.map((link) => (
            <li
              key={link.id.toString()}
              className={cx("global-footer-list-item")}
            >
              <a
                className={cx("global-footer-list-item-link")}
                href={link.route.toString()}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </footer>

      {/* background */}
      <div className="fixed -z-50 h-full w-full top-0 left-0 overflow-hidden ">
        <div className="absolute w-96  bottom-0 left-0 z-10 max-w-[30%]">
          <img src={image} alt="Hình ảnh không tồn tại" />
        </div>
        <div className="absolute w-96 bottom-0 right-0 z-10 max-w-[30%]">
          <img src={image} alt="Hình ảnh không tồn tại" />
        </div>
      </div>
    </div>
  );
}

export default Login;
