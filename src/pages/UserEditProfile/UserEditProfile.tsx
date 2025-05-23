import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'

export default function UserEditProfile() {
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>

                <span>ویرایش پروفایل</span>
              </div>

              <div className="my-3">
                <div className="d-flex">
                  <div className="col-6">
                    <div className="ir-light text-black fs-dominant">
                      <p>نام کاربری(شماره همراه)</p>

                      <input
                        className="w-100 border-0 bg-gary rounded-dominant p-2 text-end"
                        value="09220987643"
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="d-flex flex-wrap mt-3"
                  style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
                >
                  <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                    <p className="ir-light text-black fs-dominant">نام</p>
                    <input className="border w-100 rounded-dominant p-2 fs-dominant" />
                  </div>

                  <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                    <p className="ir-light text-black fs-dominant">
                      نام خانوادگی
                    </p>
                    <input className="border w-100 rounded-dominant p-2 fs-dominant" />
                  </div>

                  <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                    <p className="ir-light text-black fs-dominant">ایمیل</p>
                    <input className="border w-100 rounded-dominant p-2 fs-dominant" />
                  </div>

                  <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                    <p className="ir-light text-black fs-dominant">کد ملی</p>
                    <input className="border w-100 rounded-dominant p-2 fs-dominant" />
                  </div>

                  <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                    <p className="ir-light text-black fs-dominant">تلفن</p>
                    <input className="border w-100 rounded-dominant p-2 fs-dominant" />
                  </div>

                  <div className="col-12 col-md-6 p-1 mb-1 mb-md-0">
                    <p className="ir-light text-black fs-dominant">تصویر</p>
                    <input
                      type="file"
                      className="form-control w-100 rounded-dominant p-2 fs-dominant"
                    />
                  </div>

                  <button className="btn btn-primary ms-1 mt-2 fs-dominant">
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
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
}