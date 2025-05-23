import { useNavigate } from "react-router-dom"

export default function StepFirstQuizze() {

    let navigation = useNavigate()

    return (
      <>
        <section>
          <div className="shadow rounded-dominant p-3">
            <div className="ir-light text-black border-0 border-bottom pb-2">
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
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <span>ایجاد آزمون</span>
            </div>

            <div
              className="d-flex flex-wrap mt-3"
              style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
            >
              <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                <p className="ir-light text-black fs-dominant">
                  عنوان <span className="text-danger">*</span>
                </p>
                
                <input className="border w-100 rounded-dominant p-2 fs-dominant" />
              </div>

              <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                <p className="ir-light text-black fs-dominant">
                  تصویر<span className="text-danger">*</span>
                </p>

                <input
                  type="file"
                  className="form-control w-100 rounded-dominant p-2 fs-dominant"
                />
              </div>

              <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                <p className="ir-light text-black fs-dominant">
                  زمان نمایش کارنامه
                </p>

                <select className="border w-100 ir-light rounded-dominant p-2 fs-dominant">
                  <option>بعد از زمان پایان آزمون</option>
                  <option>به محض اتمام آزمون توسظ کاربر</option>
                </select>
              </div>

              <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                <p className="ir-light text-black fs-dominant">
                  زمان نمایش پاسخنامه
                </p>

                <select className="border w-100 ir-light rounded-dominant p-2 fs-dominant">
                  <option>بعد از زمان پایان آزمون</option>
                  <option>به محض اتمام آزمون توسظ کاربر</option>
                </select>
              </div>

              <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                <p className="ir-light text-black fs-dominant">
                  توضیحات<span className="text-danger">*</span>
                </p>
                
                <textarea className="border w-100 ir-light rounded-dominant p-2 fs-dominant"></textarea>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="shadow rounded-dominant p-3 mt-3">
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-primary ms-1 mt-2 fs-dominant"
                onClick={() =>
                  navigation("/admin-panel/create-quizze/second-step")
                }
              >
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
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span className="ir-light">ذخیره</span>
              </button>

              <button className="btn btn-warning ms-1 mt-2 fs-dominant">
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
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span className="ir-light">بازگشت</span>
              </button>
            </div>
          </div>
        </section>
      </>
    );
}