import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./CreateQuizze.css";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

export default function CreateQuizze() {
  let navigation = useNavigate();

  useEffect(() => {
    navigation("first-step");
  }, []);

  return (
    <>
      <div className="container-md">
        <section>
          <BreadCrumb />
        </section>

        <section>
          <div className="px-4 my-4">
            <div className="d-flex">
              <div className="col-4">
                <div>
                  <span className="ir-light fs-dominant">مرحله اول</span>

                  <div className="d-flex align-items-center">
                    <div
                      className="bg-success rounded-circle"
                      style={{ width: "15px", height: "15px" }}
                    ></div>
                    <div
                      className="bg-success w-100"
                      style={{ height: "1px" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div>
                  <span className="ir-light fs-dominant">مرحله دوم</span>
                  <div className="d-flex align-items-center">
                    <div
                      className="bg-gary rounded-circle"
                      style={{ width: "15px", height: "15px" }}
                    ></div>
                    <div
                      className="bg-gary w-100"
                      style={{ height: "1px" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div>
                  <span className="ir-light fs-dominant">مرحله سوم</span>
                  <div className="d-flex align-items-center">
                    <div
                      className="bg-gary rounded-circle"
                      style={{ width: "15px", height: "15px" }}
                    ></div>
                    <div
                      className="bg-gary w-100"
                      style={{ height: "1px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Outlet />
      </div>
    </>
  );
}
