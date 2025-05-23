import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

export default function AdminQuizzes() {
  let navigation = useNavigate();

  return (
    <>
      <div className="container-md">
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
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>

              <span>آزمون ها</span>
            </div>

            <div className="my-3 d-flex flex-column d-md-block">
              <button
                className="btn btn-primary ir-light me-1 mb-1 mb-md-0"
                style={{ fontSize: "12px" }}
              >
                آزمون جدید مبتنی بر عکس
              </button>

              <button
                className="btn btn-info ir-light"
                style={{ fontSize: "12px" }}
                onClick={() => navigation("/admin-panel/create-quizze")}
              >
                آزمون جدید مبتنی بر سوالات تایپ شده
              </button>
            </div>

            <div
              className="d-none d-lg-flex"
              style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
            >
              <div className="col-3 p-1">
                <div className="ir-light fs-dominant text-black ">
                  <span className="d-block mb-1">وضعیت</span>

                  <select className="border rounded-dominant w-100 p-1">
                    <option>همه</option>
                    <option>پیش رو</option>
                    <option>در حال بار گزاری</option>
                    <option>تمام شده</option>
                  </select>
                </div>
              </div>

              <div className="col-3 p-1">
                <div className="ir-light fs-dominant text-black ">
                  <span className="d-block mb-1">عنوان</span>

                  <input className="border rounded-dominant w-100 p-1" />
                </div>
              </div>

              <div className="col-3 p-1">
                <div className="ir-light fs-dominant text-black ">
                  <span className="d-block mb-1">دوره زمانی</span>

                  <select className="border rounded-dominant w-100 p-1">
                    <option>همه</option>
                    <option>پیش رو</option>
                    <option>در حال بار گزاری</option>
                    <option>تمام شده</option>
                  </select>
                </div>
              </div>

              <div className="col-3 p-1">
                <div className="ir-light fs-dominant text-black ">
                  <span className="d-block mb-1">به ترتیب</span>

                  <select className="border rounded-dominant w-100 p-1">
                    <option>جدیدترین</option>
                    <option>پیش رو</option>
                    <option>در حال بار گزاری</option>
                    <option>تمام شده</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-column mt-4">
              <div className="shadow rounded-dominant d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 p-3">
                <div className=" mb-3 mb-md-0">
                  <span className="ir-bold d-block text-center text-md-start mb-2">
                    آزمون جامع سینماتیک
                  </span>

                  <div className="fs-dominant">
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

                    <span className="ir-light text-black">
                      {" "}
                      شروع: 26 مهر 1403 ، ساعت 1:00 / پایان: 28 مهر ، ساعت 1:00
                    </span>
                  </div>
                </div>

                <div>
                  <button className="btn btn-primary fs-dominant ir-light me-2">
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

                    <span>نتایج</span>
                  </button>

                  <button className="btn bg-gary fs-dominant ir-light">
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>

                    <span>...</span>
                  </button>
                </div>
              </div>
              
              <div className="shadow rounded-dominant d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 p-3">
                <div className=" mb-3 mb-md-0">
                  <span className="ir-bold d-block text-center text-md-start mb-2">
                    آزمون جامع سینماتیک
                  </span>

                  <div className="fs-dominant">
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

                    <span className="ir-light text-black">
                      {" "}
                      شروع: 26 مهر 1403 ، ساعت 1:00 / پایان: 28 مهر ، ساعت 1:00
                    </span>
                  </div>
                </div>

                <div>
                  <button className="btn btn-warning fs-dominant ir-light me-2">
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

                    <span>ویرایش</span>
                  </button>

                  <button className="btn bg-gary fs-dominant ir-light">
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>

                    <span>...</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
