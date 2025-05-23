import { useNavigate } from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'

export default function AdminQuestions() {

    let navigation = useNavigate()

    return (
      <>
        <div className="container-md pb-2">
          <section>
            <BreadCrumb />
          </section>

          <section>
            <div className="shadow rounded-dominant my-4 p-3">
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
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>

                <span>سوالات</span>
              </div>

              <div className="my-3">
                <button
                  className="btn btn-primary ir-light fs-dominant"
                  onClick={() => navigation("/admin-panel/add-questions")}
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
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <span>سوال جدید</span>
                </button>
              </div>

              <div
                className="d-flex flex-wrap mt-3"
                style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
              >
                <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                  <span className="ir-light text-black fs-dominant d-block mb-1">
                    درس
                  </span>

                  <select className="border w-100 ir-light rounded-dominant p-2 fs-dominant">
                    <option>سینماتیک</option>
                    <option>دینامیک</option>
                  </select>
                </div>

                <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                  <span className="ir-light text-black fs-dominant d-block mb-1">
                    کد سوال
                  </span>

                  <input className="border w-100 ir-light rounded-dominant p-2 fs-dominant" />
                </div>

                <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                  <span className="ir-light text-black fs-dominant d-block mb-1">
                    کلید واژه
                  </span>

                  <input className="border w-100 ir-light rounded-dominant p-2 fs-dominant" />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4">
              <span className="ir-light fs-dominant text-black">
                تعداد سوالات: 64
              </span>
            </div>
          </section>

          <section>
            <div className="border p-3 my-4">
              <div className="border-0 border-bottom pb-2">
                <button className="btn bg-warning me-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>

                <button className="btn bg-danger text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>

                <span className="ir-light text-black fs-dominant ms-1">
                  طراح: پانیذ جلیلی | کد:130 | درس: دما گرما
                </span>
              </div>

              <div className="my-2">
                <div className="mb-4">
                  <span className="ir-light">
                    تگ صحیح HTML برای زیر خط دار نمودن متن کدام است؟
                  </span>
                </div>

                <div className="d-flex flex-wrap align-items-center">
                  <div className="col-12 col-lg-5">
                    <ol className="ir-light fs-dominant pe-1 mt-2">
                      <li>سه</li>
                      <li>هیچ کدام</li>
                      <li>یک</li>
                      <li>دو</li>
                    </ol>
                  </div>
                  
                  <div className="col-12 col-lg-7">
                    <div>
                      <img
                        src="/image/test4.jpg"
                        className="img-fluid rounded-dominant"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
}