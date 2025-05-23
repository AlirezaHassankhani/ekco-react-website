import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./SignUp.css";

export default function SignUp() {
  const authContext = useContext(AuthContext);

  let navigation = useNavigate();

  return (
    <>
      <div className="container-md my-5">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column col-12 col-md-8 col-lg-6 col-xl-5">
            <form className="shadow rounded-dominant bg-secondary p-4">
              <h5 className="ir-bold my-4 text-center">ثبت نام</h5>

              <div className="pt-4">
                <div className="sign-form__box-input d-flex flex-wrap align-items-center mb-3 fs-dominant">
                  <div className="col-12 col-lg-4 mb-2 mb-lg-0 ir-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 me-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>

                    <span>نام کاربری</span>
                    <span className="text-danger">*</span>
                  </div>

                  <div className="col-12 col-lg-8" style={{ fontSize: "12px" }}>
                    <input
                      id="username"
                      className="rounded-dominant ir-light w-100 p-2"
                      placeholder="نام کاربری (شماره همراه)"
                    />
                  </div>
                </div>

                <div className="sign-form__box-input d-flex flex-wrap align-items-center mb-3 fs-dominant">
                  <div className="col-12 col-lg-4 mb-2 mb-lg-0 ir-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 me-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                      />
                    </svg>

                    <span>رمز عبور</span>
                    <span className="text-danger">*</span>
                  </div>

                  <div className="col-12 col-lg-8" style={{ fontSize: "12px" }}>
                    <input
                      id="password"
                      className="rounded-dominant ir-light w-100 p-2"
                      placeholder="نام کاربری (شماره همراه)"
                    />
                  </div>
                </div>

                <div className="sign-form__box-input d-flex flex-wrap align-items-center mb-3 fs-dominant">
                  <div className="col-12 col-lg-4 mb-2 mb-lg-0 ir-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 me-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>

                    <span>
                      نام<span className="text-danger">*</span>
                    </span>
                  </div>
                  <div className="col-12 col-lg-8" style={{ fontSize: "12px" }}>
                    <input
                      id="name"
                      className="rounded-dominant ir-light w-100 p-2"
                      placeholder="نام کاربری (شماره همراه)"
                    />
                  </div>
                </div>

                <div className="sign-form__box-input d-flex flex-wrap align-items-center mb-3 fs-dominant">
                  <div className="col-12 col-lg-4 mb-2 mb-lg-0 ir-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 me-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>

                    <span>
                      نام خانوادگی<span className="text-danger">*</span>
                    </span>
                  </div>
                  <div className="col-12 col-lg-8" style={{ fontSize: "12px" }}>
                    <input
                      id="familyname"
                      className="rounded-dominant ir-light w-100 p-2"
                      placeholder="نام کاربری (شماره همراه)"
                    />
                  </div>
                </div>

                <button className="btn btn-special ir-light text-white d-block m-auto my-4 fs-dominant">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 me-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>

                  <span>ثبت نام</span>
                </button>
              </div>
            </form>

            <div className="d-flex justify-content-between mt-4 ir-light fs-dominant">
              <Link to="/login" className="text-black">
                ورود به سیستم
              </Link>

              <Link to="/forgot-password" className="text-black">
                بازیابی رمز عبور
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
