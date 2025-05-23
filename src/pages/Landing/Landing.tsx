import "./Landing.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TestCard from "../../components/TestCard/TestCard";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <Header />

      <main className="main my-5">
        <div className="container-md">
          <section>
            <div className="text-center mb-4">
              <h1 className="ir-bold">آکادمی آموزشی اکو</h1>

              <p className="ir mt-3">
                با آکادمی خصوصی اکو، فیزیکت رو با خیال راحت یاد بگیر و پیشرفت کن
              </p>
            </div>
          </section>

          <section>
            <div
              className="d-flex flex-wrap"
              style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
            >
              <div className="col-12 col-md-6 flex-md-grow-1 flex-lg-grow-0 col-lg-4 p-1">
                <div className="card card-box">
                  <div className="card-header d-flex flex-column align-items-center py-3">
                    <div className="card-header__icon text-primary bg-purple my-3">
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
                          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                        />
                      </svg>
                    </div>

                    <span className="ir-bold text-dark">کاربردی و هوشمند</span>
                  </div>

                  <div className="card-body">
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 card-body__icon text-white bg-success rounded-circle me-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>

                        <span className="ir card-body__text text-black">
                          قدرتمند اما ساده
                        </span>
                      </li>

                      <li className="mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 card-body__icon text-white bg-success rounded-circle me-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>

                        <span className="ir card-body__text text-black">
                          کاربر پسند بودن
                        </span>
                      </li>

                      <li className="mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 card-body__icon text-white bg-success rounded-circle me-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>

                        <span className="ir card-body__text text-black">
                          دسترسی آسان به سوالات
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 flex-md-grow-1 flex-lg-grow-0 col-lg-4 p-1">
                <div className="card card-box">
                  <div className="card-header d-flex flex-column align-items-center py-3">
                    <div className="card-header__icon text-primary bg-purple my-3">
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
                          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                        />
                      </svg>
                    </div>

                    <span className="ir-bold text-dark">سلامت و امنیت</span>
                  </div>

                  <div className="card-body">
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 card-body__icon text-white bg-success rounded-circle me-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>

                        <span className="ir card-body__text text-black">
                          سوالات مفهومی
                        </span>
                      </li>

                      <li className="mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 card-body__icon text-white bg-success rounded-circle me-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>

                        <span className="ir card-body__text text-black">
                          منطبق با کنکور های اخیر
                        </span>
                      </li>

                      <li className="mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 card-body__icon text-white bg-success rounded-circle me-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>

                        <span className="ir card-body__text text-black">
                          استاندارد بودن سوالات
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 flex-md-grow-1 flex-lg-grow-0 col-lg-4 p-1">
                <div className="card card-box">
                  <div className="card-header d-flex flex-column align-items-center py-3">
                    <div className="card-header__icon text-primary bg-purple my-3">
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
                          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                        />
                      </svg>
                    </div>

                    <span className="ir-bold text-dark">سکوی موفقیت</span>
                  </div>

                  <div className="card-body">
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 card-body__icon text-white bg-success rounded-circle me-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>

                        <span className="ir card-body__text text-black">
                          پنل پیشرفت و مدیریت
                        </span>
                      </li>

                      <li className="mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 card-body__icon text-white bg-success rounded-circle me-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>

                        <span className="ir card-body__text text-black">
                          بررسی نقاط ضعف
                        </span>
                      </li>

                      <li className="mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 card-body__icon text-white bg-success rounded-circle me-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>

                        <span className="ir card-body__text text-black">
                          پشتیبانی سریع
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="my-5">
              <div className="header-text-box d-flex flex-column flex-lg-row justify-content-between align-items-center mb-3">
                <div>
                  <h2 className="ir">آزمون های جامع اکو</h2>

                  <p className="ir-light text-black text-center text-lg-start">
                    سکوی پرتاب شما به موفقیت
                  </p>
                </div>

                <div className="header-text-box__link d-flex align-items-center">
                  <Link to="/exams" className="ir text-primary">
                    مشاهده همه آزمون ها
                  </Link>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-primary ms-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                    />
                  </svg>
                </div>
              </div>

              <div
                className="d-flex flex-wrap"
                style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
              >
                <TestCard name="آزمون جامع دوازدهم" img="/image/test1.webp" />
                <TestCard name="آزمون جامع یازدهم" img="/image/test2.webp" />
                <TestCard name="آزمون جامع دهم" img="/image/test3.webp" />
                <TestCard name="آزمون جامع کل" img="/image/test3.webp" />
                <TestCard name="آزمون جامع کل" img="/image/test3.webp" />
              </div>
            </div>
          </section>

          <section>
            <div className="my-5">
              <div className="header-text-box d-flex flex-column flex-lg-row justify-content-between align-items-center mb-3">
                <div>
                  <h2 className="ir">آزمون های فصل به فصل</h2>

                  <p className="ir-light text-black text-center text-lg-start">
                    سکوی پرتاب شما به موفقیت
                  </p>
                </div>

                <div className="header-text-box__link d-flex align-items-center">
                  <Link to="/exams" className="ir text-primary">
                    مشاهده همه آزمون ها
                  </Link>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-primary ms-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                    />
                  </svg>
                </div>
              </div>

              <div
                className="d-flex flex-wrap justify-content-between"
                style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
              >
                <TestCard name="آزمون نوسان و موج" img="/image/test1.webp" />
                <TestCard name="آزمون دینامیک" img="/image/test2.webp" />
                <TestCard name="آزمون سینماتیک" img="/image/test3.webp" />
              </div>
            </div>
          </section>
        </div>

        <section>
          <div className="bg-soft mb-5 py-5">
            <div className="container-md">
              <div className="d-flex flex-wrap justify-content-between">
                <div className="d-flex col-6 col-lg-3 flex-column align-items-center text-center">
                  <div>
                    <img src="./image/main-ques.svg" width="120" />
                  </div>
                  <div>
                    <h6 className="ir my-3">آزمون های پویا</h6>
                    <p
                      className="ir-light text-black"
                      style={{ fontSize: "14px" }}
                    >
                      امکان برگزاری انواع آزمون های دمو، رایگان و هزینه دار
                    </p>
                  </div>
                </div>

                <div className="d-flex col-6 col-lg-3 flex-column align-items-center text-center">
                  <div>
                    <img src="./image/main-info.svg" width="120" />
                  </div>
                  <div>
                    <h6 className="ir my-3">گزارشات پیشرفته</h6>
                    <p
                      className="ir-light text-black"
                      style={{ fontSize: "14px" }}
                    >
                      امکان برگزاری انواع آزمون های دمو، رایگان و هزینه دار
                    </p>
                  </div>
                </div>

                <div className="d-flex col-6 col-lg-3 flex-column align-items-center text-center">
                  <div>
                    <img src="./image/main-price.svg" width="120" />
                  </div>
                  <div>
                    <h6 className="ir my-3">قیمت مناسب</h6>
                    <p
                      className="ir-light text-black"
                      style={{ fontSize: "14px" }}
                    >
                      امکان برگزاری انواع آزمون های دمو، رایگان و هزینه دار
                    </p>
                  </div>
                </div>

                <div className="d-flex col-6 col-lg-3 flex-column align-items-center text-center">
                  <div>
                    <img src="./image/main-type.svg" width="120" />
                  </div>
                  <div>
                    <h6 className="ir my-3">استاندار سازی</h6>
                    <p
                      className="ir-light text-black"
                      style={{ fontSize: "14px" }}
                    >
                      امکان برگزاری انواع آزمون های دمو، رایگان و هزینه دار
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-md">
          <section>
            <div className="d-flex flex-column flex-lg-row align-items-center pb-5">
              <div className="col-12 col-lg-6">
                <img
                  src="/image/footer-quis.png"
                  className="d-block m-auto"
                  width="300"
                />
              </div>

              <div className="col-12 col-lg-6">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="ir-bold">
                      با موبایل و تبلت هم می تونیم توی آزمون ها شرکت کنیم؟ با
                      آیفون هم سازگار هست؟
                    </Accordion.Header>
                    <Accordion.Body className="ir-light text-black">
                      بله در تمامی گوشی ها و تبلت های اندروید و ios قابلیت آزمون
                      دادن دارید.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="ir-bold">
                      خدمات پشتیبانی هم دارید؟ چه مدت؟
                    </Accordion.Header>
                    <Accordion.Body className="ir-light text-black">
                      بله پشتیبانی 6 ماهه بر روی تمامی خدمات ما وجود داره و از
                      این جهت جای نگرانی وجود نداره.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="ir-bold">
                      آیا امکان پرداخت آنلاین وجود دارد یا فقط حضوری؟
                    </Accordion.Header>
                    <Accordion.Body className="ir-light text-black">
                      بله سامانه ما از پرداخت آنلاین تحت بستر زرین پال پشتیبانی
                      می کند، که می توانید توسط تمامی کارت های عضو شبکه شتاب
                      خرید آنلاین خود را کامل کنید.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
