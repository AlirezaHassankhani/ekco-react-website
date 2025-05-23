import "./UserDashboard.css";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

//Import Recharts
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import type IProps from "./type";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: IProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function UserDashboard() {
  return (
    <>
      <div className="container-md pb-2">
        <section>
          <BreadCrumb />
        </section>

        <section>
          <div className="shadow rounded-dominant p-3 my-4">
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <span>آزمون های جاری</span>
            </div>

            <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-between mt-4">
              <div className="d-flex d-md-inline flex-column mb-3 mb-md-0">
                <span className="text-dark ir-bold me-1 mb-3 mb-md-0">
                  آزمون جامع سینماتیک
                </span>

                <button className="fs-dominant ir-light btn btn-primary">
                  مشاهده آزمون
                </button>
              </div>

              <div className="d-flex flex-column">
                <span
                  className="ir-light text-black"
                  style={{ fontSize: "12px" }}
                >
                  زمان باقی مانده تا پایان آزمون
                </span>

                <span className="ir-bold fs-dominant mt-1">
                  27 مهر 1403 ساعت 01:00
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className="d-flex flex-wrap my-4"
            style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
          >
            <div className="col-12 col-md-6 p-1 mb-4 mb-md-0">
              <div className="shadow rounded-dominant">
                <Link
                  to="/user-panel/user-result"
                  className="d-flex justify-content-between align-items-center p-3"
                >
                  <span className="ir-light text-black">
                    نتایج آزمون ها
                    <br />
                    مشاهده
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 user-dashdord__icon text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 p-1 mb-4 mb-md-0">
              <div className="shadow rounded-dominant">
                <Link
                  to="/user-panel/user-quizzes"
                  className="d-flex justify-content-between align-items-center p-3"
                >
                  <span className="ir-light text-black">
                    آزمون های پیش رو
                    <br />
                    مشاهده
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 user-dashdord__icon text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className="d-flex flex-wrap"
            style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
          >
            <div className="col-12 col-lg-6 p-1 mb-3 mb-lg-0">
              <div className="shadow rounded-dominant p-3">
                <div className="ir-light text-black pb-2 border-0 border-bottom">
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
                      d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                    />
                  </svg>

                  <span>آخرین نتیجه</span>
                </div>

                <a
                  href="#"
                  className="ir-bold fs-dominant text-dark d-block mt-3"
                >
                  آزمون جامع دما گرما
                  <span className="ir-light ms-1">(مشاهده)</span>
                </a>

                <div className="d-flex border my-3 rounded-dominant">
                  <div className="col-2">
                    <div className="ir fs-dominant border-0 border-end text-center">
                      <p>رتبه</p>
                      <span className="text-black">3</span>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="ir fs-dominant border-0 border-end text-center">
                      <p>درصد</p>
                      <span className="text-black">70.05</span>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="ir fs-dominant border-0 border-end text-center">
                      <p>تراز</p>
                      <span className="text-black">9532</span>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="ir fs-dominant border-0 border-end text-center">
                      <p>صحیح</p>
                      <span className="text-black">40</span>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="ir fs-dominant border-0 border-end text-center">
                      <p>غلط</p>
                      <span className="text-black">3</span>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="ir fs-dominant border-0 text-center">
                      <p>بی پاسخ</p>
                      <span className="text-black">1</span>
                    </div>
                  </div>
                </div>

                <ResponsiveContainer>
                  <PieChart width={400} height={400}>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="col-12 col-lg-6 p-1">
              <div className="shadow rounded-dominant p-3">
                <div className="ir-light text-black pb-2 border-0 border-bottom">
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

                  <span>نتایج آزمون های اخیر</span>
                </div>

                <table className="table my-3 fs-dominant">
                  <thead className="ir-bold">
                    <tr>
                      <th>عنوان آزمون</th>
                      <th>رتبه</th>
                      <th>درصد</th>
                      <th>تراز</th>
                    </tr>
                  </thead>

                  <tbody className="ir-light text-black">
                    <tr>
                      <td>آزمون جامع دما گرما</td>
                      <td>3</td>
                      <td>84.02</td>
                      <td>9943</td>
                    </tr>
                    <tr>
                      <td>آزمون جامع دهم</td>
                      <td>21</td>
                      <td>54.02</td>
                      <td>7763</td>
                    </tr>
                    <tr>
                      <td>آزمون سینماتیک</td>
                      <td>19</td>
                      <td>63.02</td>
                      <td>8243</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
