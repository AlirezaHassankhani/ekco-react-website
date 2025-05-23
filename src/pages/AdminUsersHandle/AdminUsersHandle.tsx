import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'

export default function AdminUsersHandle() {
    return (
      <>
        <div className="container-md">
          <section>
            <BreadCrumb />
          </section>

          <section>
            <div className="shadow rounded-dominant p-3 mt-4">
              <div className="ir-light border-0 border-bottom pb-2">
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
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <span>اعضای سایت</span>
              </div>

              <div className="my-2">
                <span className="ir-light text-black fs-dominant me-1">
                  جستجو:
                </span>
                
                <input className="border rounded-dominant p-1" />
              </div>

              <table className="table border table-striped">
                <thead className="ir-bold fs-dominant">
                  <tr>
                    <th>#</th>
                    <th>نام</th>
                    <th>نام خانوادگی</th>
                    <th>نام کاربری</th>
                  </tr>
                </thead>

                <tbody className="ir-light fs-dominant">
                  <tr>
                    <td>1</td>
                    <td>علی</td>
                    <td>کرمی</td>
                    <td>09123654321</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>محمد</td>
                    <td>سعیدی</td>
                    <td>09223454321</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </>
    );
}