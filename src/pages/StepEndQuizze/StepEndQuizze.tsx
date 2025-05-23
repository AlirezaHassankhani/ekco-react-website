import { useNavigate } from "react-router-dom"

export default function StepEndQuizze() {

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
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <span>زمان آزمون</span>
            </div>

            <div
              className="d-flex flex-wrap mt-3"
              style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
            >
              <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                <p className="ir-light text-black fs-dominant">
                  تاریخ شروع <span className="text-danger">*</span>
                </p>

                <input className="border w-100 rounded-dominant p-2 fs-dominant" />
              </div>

              <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                <p className="ir-light text-black fs-dominant">
                  ساعت شروع<span className="text-danger">*</span>
                </p>

                <input className="border w-100 rounded-dominant p-2 fs-dominant" />
              </div>

              <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                <p className="ir-light text-black fs-dominant">
                  تاریخ پایان<span className="text-danger">*</span>
                </p>

                <input className="border w-100 rounded-dominant p-2 fs-dominant" />
              </div>

              <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                <p className="ir-light text-black fs-dominant">
                  ساعت پایان<span className="text-danger">*</span>
                </p>

                <input className="border w-100 rounded-dominant p-2 fs-dominant" />
              </div>

              <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                <p className="ir-light text-black fs-dominant">
                  مهلت پاسخگویی (دقیقه)<span className="text-danger">*</span>
                </p>
                
                <input className="border w-100 rounded-dominant p-2 fs-dominant" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="shadow rounded-dominant p-3 mt-3">
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-primary ms-1 mt-2 fs-dominant"
                onClick={() => navigation("")}
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