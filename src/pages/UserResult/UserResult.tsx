import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

export default function UserResult() {
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
                className="size-6 me-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <span>نتایج آزمون ها</span>
            </div>

            <div className="row mt-3 fs-dominant">
              <div className="col-12 col-md-3 mb-2 mb-md-0">
                <div className="ir-light text-black">
                  <p>گروه(کلاس)</p>

                  <select className="rounded-dominant w-100 border p-1">
                    <option>همه</option>
                    <option>دهم</option>
                    <option>یازدهم</option>
                    <option>دوازدهم</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-5">
                <div className="ir-light text-black">
                  <p>عنوان</p>

                  <input className="rounded-dominant w-100 border p-1" />
                </div>
              </div>
            </div>

            <div className="flex flex-column mt-4">
              <div className="shadow rounded-dominant d-flex flex-column flex-md-row justify-content-between align-items-center p-3">
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
                      شروع: 20 مهر 1403 ، ساعت 8:00
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

                    <span>کارنامه</span>
                  </button>

                  <button className="btn btn-info fs-dominant ir-light">
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
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>

                    <span>پاسخنامه</span>
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
