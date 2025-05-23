import './TestCard.css'
import type IProps from './type'

export default function TestCard({ name, img }: IProps) {
    return (
      <div className="col-12 col-md-6 flex-md-grow-1 flex-lg-grow-0 col-lg-4 p-1">
        <div className="card test-card">
          <img className="img-top" src="/image/test4.jpg" />
          <div className="card-body">
            <h5 className="card-title ir">{name}</h5>
            
            <p className="card-text pb-4 test-card__text ir-light text-black">
              آزمون جامع سینماتیک برای دانش آموزانی که قصد محک زدن خود را در یکی
              از فصل های دشوار ...
            </p>
          </div>

          <div className="card-footer">
            <div className="d-flex justify-content-between align-items-center">
              <span className="ir text-black test-card__price">
                220,000 تومان
              </span>

              <button className="btn btn-primary">
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
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}