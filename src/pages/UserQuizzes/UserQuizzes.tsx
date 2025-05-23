import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

export default function UserQuizzes() {
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
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>

              <span>آزمون های پیش رو</span>
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
                      {" "}
                      شروع: 26 مهر 1403 ، ساعت 1:00 | پایان: 28 مهر ، ساعت 1:00
                    </span>
                  </div>
                </div>

                <div>
                  <button className="btn btn-info fs-dominant ir-light me-2">
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
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                      />
                    </svg>

                    <span>پرداخت کنید</span>
                  </button>

                  <button className="btn btn-primary fs-dominant ir-light">
                    <span>مشاهده</span>
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
