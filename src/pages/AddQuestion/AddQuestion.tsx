import { Alert } from 'react-bootstrap';

import './AddQuestion.css'

export default function AddQuestion() {

    return (
      <>
        <div className="container-md pb-2">
          <section>
            <div className="shadow rounded-dominant my-4 p-3">
              <div className="ir-light text-black border-0 border-bottom pb-2">
                <i className="fa-light fa-circle-plus me-1"></i>
                <span>سوال جدید</span>
              </div>

              <div
                className="d-flex flex-wrap"
                style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
              >
                <div className="col-12 col-md-4 p-1">
                  <div className="ir-light fs-dominant text-black ">
                    <span className="d-block mb-1">
                      درس<span className="text-danger">*</span>
                    </span>
                    <select className="border rounded-dominant w-100 p-1">
                      <option>همه</option>
                      <option>پیش رو</option>
                      <option>در حال بار گزاری</option>
                      <option>تمام شده</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-md-4 p-1">
                  <div className="ir-light fs-dominant text-black ">
                    <span className="d-block mb-1">
                      کد سوال<span className="text-danger">*</span>
                    </span>
                    <input className="border rounded-dominant w-100 p-1" />
                  </div>
                </div>
                <div className="col-12 col-md-4 p-1">
                  <div className="ir-light fs-dominant text-black ">
                    <span className="d-block mb-1">کلید واژه</span>
                    <input className="border rounded-dominant w-100 p-1" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="shadow rounded-dominant my-4 p-3">
              <div className="ir-light text-black border-0 border-bottom pb-2">
                <i className="fa-light fa-circle-question me-1"></i>
                <span>متن سوال</span>
              </div>

              <div id="editor" className="my-4">
                {/* <FroalaEditor
                                config={{
                                    placeholderText: "متن سوال را وارد کنید",
                                    direction: "rtl"
                                }}
                                tag='textarea'
                            /> */}
              </div>

              <Alert variant="info" className="ir-light fs-dominant">
                در صورت نیاز به عکس برای سوالات لطفا از بخش پایین اقدام به
                بارگذاری عکس های مد نظر کنید.
              </Alert>

              <div className="d-flex">
                <div className="col-12 col-md-6">
                  <input type="file" className="w-100 form-control" multiple />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="shadow rounded-dominant my-4 p-3">
              <div className="ir-light text-black border-0 border-bottom pb-2">
                <i className="fa-light fa-circle-check me-1"></i>
                <span>گزینه</span>
              </div>

              <div className="mt-3">
                <div className="form-check ir-light fs-domiannt">
                  <label htmlFor="radioFirst">این گزینه صحیح است</label>
                  <input
                    type="radio"
                    name="score"
                    className="form-check-input"
                    id="radioFirst"
                  />
                </div>
              </div>

              <div id="editor" className="my-4">
                {/* <FroalaEditor
                                config={{
                                    placeholderText: "گزینه را وارد کنید",
                                    direction: "rtl"
                                }}
                                tag='textarea'
                            /> */}
              </div>

              <Alert variant="info" className="ir-light fs-dominant">
                در صورت نیاز به عکس برای گزینه ها لطفا از بخش پایین اقدام به
                بارگذاری عکس های مد نظر کنید.
              </Alert>

              <div className="d-flex">
                <div className="col-12 col-md-6">
                  <input type="file" className="w-100 form-control" multiple />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="shadow rounded-dominant my-4 p-3">
              <div className="ir-light text-black border-0 border-bottom pb-2">
                <i className="fa-light fa-circle-check me-1"></i>
                <span>گزینه</span>
              </div>

              <div className="mt-3">
                <div className="form-check ir-light fs-domiannt">
                  <label htmlFor="radioSecond">این گزینه صحیح است</label>
                  <input
                    type="radio"
                    name="score"
                    className="form-check-input"
                    id="radioSecond"
                  />
                </div>
              </div>

              <div id="editor" className="my-4">
                {/* <FroalaEditor
                                config={{
                                    placeholderText: "گرینه را وارد کنید",
                                    direction: "rtl"
                                }}
                                tag='textarea'
                            /> */}
              </div>

              <Alert variant="info" className="ir-light fs-dominant">
                در صورت نیاز به عکس برای گزینه ها لطفا از بخش پایین اقدام به
                بارگذاری عکس های مد نظر کنید.
              </Alert>

              <div className="d-flex">
                <div className="col-12 col-md-6">
                  <input type="file" className="w-100 form-control" multiple />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="shadow rounded-dominant my-4 p-3">
              <div className="ir-light text-black border-0 border-bottom pb-2">
                <i className="fa-light fa-circle-check me-1"></i>
                <span>گزینه</span>
              </div>

              <div className="mt-3">
                <div className="form-check ir-light fs-domiannt">
                  <label htmlFor="radioThird">این گزینه صحیح است</label>
                  <input
                    type="radio"
                    name="score"
                    className="form-check-input"
                    id="radioThird"
                  />
                </div>
              </div>

              <div id="editor" className="my-4">
                {/* <FroalaEditor
                  config={{
                    placeholderText: "گزینه را وارد کنید",
                    direction: "rtl",
                  }}
                  tag="textarea"
                /> */}
              </div>

              <Alert variant="info" className="ir-light fs-dominant">
                در صورت نیاز به عکس برای گزینه ها لطفا از بخش پایین اقدام به
                بارگذاری عکس های مد نظر کنید.
              </Alert>

              <div className="d-flex">
                <div className="col-12 col-md-6">
                  <input type="file" className="w-100 form-control" multiple />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="shadow rounded-dominant my-4 p-3">
              <div className="ir-light text-black border-0 border-bottom pb-2">
                <i className="fa-light fa-circle-check me-1"></i>
                <span>گزینه</span>
              </div>

              <div className="mt-3">
                <div className="form-check ir-light fs-domiannt">
                  <label htmlFor="radioFourth">این گزینه صحیح است</label>
                  <input
                    type="radio"
                    name="score"
                    className="form-check-input"
                    id="radioFourth"
                  />
                </div>
              </div>

              <div id="editor" className="my-4">
                {/* <FroalaEditor
                  config={{
                    placeholderText: "گزینه را وارد کنید",
                    direction: "rtl",
                  }}
                  tag="textarea"
                /> */}
              </div>

              <Alert variant="info" className="ir-light fs-dominant">
                در صورت نیاز به عکس برای گزینه ها لطفا از بخش پایین اقدام به
                بارگذاری عکس های مد نظر کنید.
              </Alert>

              <div className="d-flex">
                <div className="col-12 col-md-6">
                  <input type="file" className="w-100 form-control" multiple />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="shadow rounded-dominant p-3 mt-3">
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary ms-1 mt-2 fs-dominant">
                  <i className="fa-thin fa-circle-check me-1"></i>
                  <span className="ir-light">ذخیره</span>
                </button>
                <button className="btn btn-warning ms-1 mt-2 fs-dominant">
                  <i className="fa-thin fa-circle-xmark me-1"></i>
                  <span className="ir-light">بازگشت</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </>
    );
}