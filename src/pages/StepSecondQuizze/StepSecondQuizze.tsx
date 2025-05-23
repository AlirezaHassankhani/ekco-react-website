import { useNavigate } from "react-router-dom";

export default function StepSecondQuizze() {
  let navigation = useNavigate();

  return (
    <>
      <section>
        <div className="shadow rounded-dominant p-3">
          <div>
            <button className="btn btn-info me-2">
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

              <span className="ir-light fs-dominant">انتخاب سوال</span>
            </button>

            <button className="btn btn-primary">
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

              <span className="ir-light fs-dominant">سوالات انتخاب شده</span>
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="shadow rounded-dominant p-3 my-4">
          <div
            className="d-flex flex-wrap mt-3"
            style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
          >
            <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
              <p className="ir-light text-black fs-dominant">درس</p>

              <select className="border w-100 rounded-dominant p-2 fs-dominant"></select>
            </div>

            <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
              <p className="ir-light text-black fs-dominant">ترتیب نمایش</p>

              <select className="border w-100 rounded-dominant p-2 fs-dominant"></select>
            </div>

            <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
              <p className="ir-light text-black fs-dominant">کد سوال</p>

              <input className="border w-100 rounded-dominant p-2 fs-dominant" />
            </div>

            <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
              <p className="ir-light text-black fs-dominant">کلید واژه</p>

              <input className="border w-100 rounded-dominant p-2 fs-dominant" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="border p-3 my-4">
          <div className="border-0 border-bottom pb-2">
            <button className="btn bg-success text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 rounded-dominant"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>

            <span className="ir-light text-black fs-dominant ms-1">
              کد:130 | درس: HTML
            </span>
          </div>

          <div className="d-flex my-2">
            <div className="col-7">
              <span className="ir-light">
                تگ صحیح HTML برای زیر خط دار نمودن متن کدام است؟
              </span>

              <ol className="ir-light fs-dominant pe-1 mt-2">
                <li>سه</li>
                <li>هیچ کدام</li>
                <li>یک</li>
                <li>دو</li>
              </ol>
            </div>

            <div className="col-5">
              <img src="/image/test4.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shadow rounded-dominant p-3 mt-3">
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary ms-1 mt-2 fs-dominant"
              onClick={() => navigation("/admin-panel/create-quizze/end-step")}
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
