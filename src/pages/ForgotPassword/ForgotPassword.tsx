import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <>
      <div className="container-md my-5">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column col-12 col-md-8 col-lg-6 col-xl-5">
            <form className="shadow rounded-dominant bg-secondary p-4">
              <h5 className="ir-bold my-4 text-center">بازیابی رمز عبور</h5>

              <div className="pt-4">
                <div
                  className="text-lb overflow-hidden rounded-dominant position-relative bg-white mb-3 p-2"
                  style={{ fontSize: "13px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 mx-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>

                  <input
                    id="phone"
                    className="login-form__input ir-light rounded-dominant bg-transparent p-1"
                    placeholder="نام کاربری (شماره همراه)"
                  />
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

                  <span>بازیابی رمز عبور</span>
                </button>
              </div>
            </form>

            <div className="d-flex justify-content-between mt-4 ir-light fs-dominant">
              <Link to="/login" className="text-black">
                ورود به سیستم
              </Link>

              <Link to="/sign-up" className="text-black">
                ثبت نام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
