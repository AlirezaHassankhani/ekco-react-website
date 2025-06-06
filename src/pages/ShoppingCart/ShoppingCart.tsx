import './ShoppingCart.css'
import Navbar from '../../components/Navbar/Navbar'
import FrameContainer from '../../components/FrameContainer/FrameContainer'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'

export default function ShoppingCart() {

    let [count, setCount] = useState(false)

    return (
      <>
        <Navbar />

        <main className="main my-5">
          <div className="container-md">
            <FrameContainer
              title="سبد خرید"
              icon="fa-sharp fa-solid fa-basket-shopping"
            >
              {count ? (
                <div
                  className="cart-box d-flex flex-wrap my-4"
                  style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
                >
                  <div className="col-12 col-lg-8">
                    <div className="cart-box__right m-1 p-3">
                      <h6 className="ir">سبد خرید شما</h6>

                      <p className="ir text-black mb-4 fs-dominant">1 آزمون</p>

                      <div className="d-flex align-items-center product-box">
                        <div className="col-3 product-box__image">
                          <img src="/image/test4.jpg" className="img-fluid" />
                        </div>

                        <div className="d-flex flex-column col-9 px-2">
                          <span className="ir text-lb mb-1 fs-dominant">
                            آزمون جامع سینماتیک
                          </span>
                          <span className="product-box__offprice ir text-success mb-1">
                            80,000 تخفیف
                          </span>
                          <span className="ir-bold text-lb mb-1 fs-dominant">
                            220,000 تومان
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-4">
                    <div className="cart-box__left d-flex flex-column m-1 p-3">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="ir fs-dominant">قیمت کالاها</span>
                        <span className="ir fs-dominant">300,000 تومان</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="ir fs-dominant">جمع سبد خرید</span>
                        <span className="ir fs-dominant">220,000 تومان</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2 text-success">
                        <span className="ir fs-dominant">سود شما از خرید</span>
                        <span className="ir fs-dominant">80,000 تومان</span>
                      </div>

                      <button className="btn btn-success ir mt-3">
                        ثبت سفارش
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="cart-box d-flex flex-wrap my-4"
                  style={{ marginLeft: "-0.25rem", marginRight: "-0.25rem" }}
                >
                  <div className="col-12 col-lg-8">
                    <div className="cart-box__right text-center m-1">
                      <svg
                        width="200"
                        height="150"
                        viewBox="0 0 200 150"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_f)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M140 136L133 138H61.3407H23L61.3407 136H140Z"
                            fill="url(#paint0_linear)"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M121.8 59.7999C121.8 57.646 123.546 55.8999 125.7 55.8999H158.2C160.354 55.8999 162.1 57.646 162.1 59.7999C162.1 61.9538 160.354 63.6999 158.2 63.6999H125.7C123.546 63.6999 121.8 61.9538 121.8 59.7999Z"
                          fill="url(#paint1_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M147.8 52H76.2998L80.6572 101.021C81.1342 106.387 85.6295 110.5 91.0164 110.5H133.083C138.47 110.5 142.965 106.387 143.442 101.021L147.8 52ZM91.8998 95.225V68.9C91.8998 66.7461 93.6459 65 95.7998 65C97.9537 65 99.6998 66.7461 99.6998 68.9V95.225C99.6998 97.3789 97.9537 99.125 95.7998 99.125C93.6459 99.125 91.8998 97.3789 91.8998 95.225ZM108.8 68.9V95.225C108.8 97.3789 110.546 99.125 112.7 99.125C114.854 99.125 116.6 97.3789 116.6 95.225V68.9C116.6 66.7461 114.854 65 112.7 65C110.546 65 108.8 66.7461 108.8 68.9ZM125.7 95.225V68.9C125.7 66.7461 127.446 65 129.6 65C131.754 65 133.5 66.7461 133.5 68.9V95.225C133.5 97.3789 131.754 99.125 129.6 99.125C127.446 99.125 125.7 97.3789 125.7 95.225Z"
                          fill="url(#paint2_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M42.5 52H88L95.8 110.5H58.3084C53.0091 110.5 48.5573 106.515 47.9721 101.248L42.5 52ZM77.5447 94.8956L74.9447 68.2456C74.5833 66.1222 72.569 64.6939 70.4456 65.0553C68.3222 65.4167 66.8939 67.431 67.2553 69.5544L69.8553 96.2044C70.2167 98.3278 72.231 99.7561 74.3544 99.3947C76.4778 99.0333 77.9061 97.019 77.5447 94.8956ZM59.3447 68.2456L61.9447 94.8956C62.3061 97.019 60.8778 99.0333 58.7544 99.3947C56.631 99.7561 54.6167 98.3278 54.2553 96.2044L51.6553 69.5544C51.2939 67.431 52.7222 65.4167 54.8456 65.0553C56.969 64.6939 58.9833 66.1222 59.3447 68.2456Z"
                          fill="url(#paint3_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M39.9004 52H85.4004L93.2004 110.5H55.7088C50.4095 110.5 45.9577 106.515 45.3724 101.248L39.9004 52ZM74.9451 94.8956L72.3451 68.2456C71.9837 66.1222 69.9693 64.6939 67.846 65.0553C65.7226 65.4167 64.2943 67.431 64.6557 69.5544L67.2557 96.2044C67.6171 98.3278 69.6314 99.7561 71.7548 99.3947C73.8782 99.0333 75.3065 97.019 74.9451 94.8956ZM56.7451 68.2456L59.3451 94.8956C59.7065 97.019 58.2782 99.0333 56.1548 99.3947C54.0314 99.7561 52.0171 98.3278 51.6557 96.2044L49.0557 69.5544C48.6943 67.431 50.1226 65.4167 52.246 65.0553C54.3693 64.6939 56.3837 66.1222 56.7451 68.2456Z"
                          fill="url(#paint4_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M150.4 52H78.9004L83.2578 101.021C83.7348 106.387 88.23 110.5 93.617 110.5H135.684C141.071 110.5 145.566 106.387 146.043 101.021L150.4 52ZM94.5004 95.225V68.9C94.5004 66.7461 96.2465 65 98.4004 65C100.554 65 102.3 66.7461 102.3 68.9V95.225C102.3 97.3789 100.554 99.125 98.4004 99.125C96.2465 99.125 94.5004 97.3789 94.5004 95.225ZM111.4 68.9V95.225C111.4 97.3789 113.146 99.125 115.3 99.125C117.454 99.125 119.2 97.3789 119.2 95.225V68.9C119.2 66.7461 117.454 65 115.3 65C113.146 65 111.4 66.7461 111.4 68.9ZM128.3 95.225V68.9C128.3 66.7461 130.046 65 132.2 65C134.354 65 136.1 66.7461 136.1 68.9V95.225C136.1 97.3789 134.354 99.125 132.2 99.125C130.046 99.125 128.3 97.3789 128.3 95.225Z"
                          fill="url(#paint5_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M36 44.2C36 41.3281 38.3281 39 41.2 39H77.6C80.4719 39 82.8 41.3281 82.8 44.2V53.3C82.8 56.1719 80.4719 58.5 77.6 58.5H41.2C38.3281 58.5 36 56.1719 36 53.3V44.2Z"
                          fill="url(#paint6_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M36 44.2C36 41.3281 38.3281 39 41.2 39H77.6C80.4719 39 82.8 41.3281 82.8 44.2V53.3C82.8 56.1719 80.4719 58.5 77.6 58.5H41.2C38.3281 58.5 36 56.1719 36 53.3V44.2Z"
                          fill="url(#paint7_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M74.3496 44.2C74.3496 41.3281 76.6777 39 79.5496 39H149.75C152.621 39 154.95 41.3281 154.95 44.2V53.3C154.95 56.1719 152.621 58.5 149.75 58.5H79.5496C76.6777 58.5 74.3496 56.1719 74.3496 53.3V44.2Z"
                          fill="url(#paint8_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M74.3496 44.2C74.3496 41.3281 76.6777 39 79.5496 39H149.75C152.621 39 154.95 41.3281 154.95 44.2V53.3C154.95 56.1719 152.621 58.5 149.75 58.5H79.5496C76.6777 58.5 74.3496 56.1719 74.3496 53.3V44.2Z"
                          fill="url(#paint9_linear)"
                        />
                        <path
                          d="M159.5 59.9324L116.6 48.75"
                          stroke="url(#paint10_linear)"
                          strokeWidth="7.54"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="116.925"
                          cy="48.6851"
                          r="1.625"
                          fill="#424750"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M148 78H76.5L80.8574 127.021C81.3344 132.387 85.8297 136.5 91.2166 136.5H133.283C138.67 136.5 143.166 132.387 143.643 127.021L148 78ZM92.1 121.225V94.9C92.1 92.7461 93.8461 91 96 91C98.1539 91 99.9 92.7461 99.9 94.9V121.225C99.9 123.379 98.1539 125.125 96 125.125C93.8461 125.125 92.1 123.379 92.1 121.225ZM109 94.9V121.225C109 123.379 110.746 125.125 112.9 125.125C115.054 125.125 116.8 123.379 116.8 121.225V94.9C116.8 92.7461 115.054 91 112.9 91C110.746 91 109 92.7461 109 94.9ZM125.9 121.225V94.9C125.9 92.7461 127.646 91 129.8 91C131.954 91 133.7 92.7461 133.7 94.9V121.225C133.7 123.379 131.954 125.125 129.8 125.125C127.646 125.125 125.9 123.379 125.9 121.225Z"
                          fill="url(#paint11_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M42.7002 78H88.2002L96.0002 136.5H58.5086C53.2093 136.5 48.7575 132.515 48.1722 127.248L42.7002 78ZM77.7449 120.896L75.1449 94.2456C74.7835 92.1222 72.7691 90.6939 70.6458 91.0553C68.5224 91.4167 67.0941 93.431 67.4555 95.5544L70.0555 122.204C70.4169 124.328 72.4312 125.756 74.5546 125.395C76.678 125.033 78.1063 123.019 77.7449 120.896ZM59.5449 94.2456L62.1449 120.896C62.5063 123.019 61.078 125.033 58.9546 125.395C56.8312 125.756 54.8169 124.328 54.4555 122.204L51.8555 95.5544C51.4941 93.431 52.9224 91.4167 55.0458 91.0553C57.1691 90.6939 59.1835 92.1222 59.5449 94.2456Z"
                          fill="url(#paint12_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M40.0996 78H85.5996L93.3996 136.5H55.908C50.6087 136.5 46.1569 132.515 45.5717 127.248L40.0996 78ZM75.1443 120.896L72.5443 94.2456C72.1829 92.1222 70.1686 90.6939 68.0452 91.0553C65.9218 91.4167 64.4935 93.431 64.8549 95.5544L67.4549 122.204C67.8163 124.328 69.8307 125.756 71.954 125.395C74.0774 125.033 75.5057 123.019 75.1443 120.896ZM56.9443 94.2456L59.5443 120.896C59.9057 123.019 58.4774 125.033 56.354 125.395C54.2307 125.756 52.2163 124.328 51.8549 122.204L49.2549 95.5544C48.8935 93.431 50.3218 91.4167 52.4452 91.0553C54.5686 90.6939 56.5829 92.1222 56.9443 94.2456Z"
                          fill="url(#paint13_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M150.6 78H79.0996L83.457 127.021C83.934 132.387 88.4293 136.5 93.8162 136.5H135.883C141.27 136.5 145.765 132.387 146.242 127.021L150.6 78ZM94.6996 121.225V94.9C94.6996 92.7461 96.4457 91 98.5996 91C100.754 91 102.5 92.7461 102.5 94.9V121.225C102.5 123.379 100.754 125.125 98.5996 125.125C96.4457 125.125 94.6996 123.379 94.6996 121.225ZM111.6 94.9V121.225C111.6 123.379 113.346 125.125 115.5 125.125C117.654 125.125 119.4 123.379 119.4 121.225V94.9C119.4 92.7461 117.654 91 115.5 91C113.346 91 111.6 92.7461 111.6 94.9ZM128.5 121.225V94.9C128.5 92.7461 130.246 91 132.4 91C134.554 91 136.3 92.7461 136.3 94.9V121.225C136.3 123.379 134.554 125.125 132.4 125.125C130.246 125.125 128.5 123.379 128.5 121.225Z"
                          fill="url(#paint14_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M36.2002 70.2C36.2002 67.3281 38.5283 65 41.4002 65H77.8002C80.6721 65 83.0002 67.3281 83.0002 70.2V79.3C83.0002 82.1719 80.6721 84.5 77.8002 84.5H41.4002C38.5283 84.5 36.2002 82.1719 36.2002 79.3V70.2Z"
                          fill="url(#paint15_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M36.2002 70.2C36.2002 67.3281 38.5283 65 41.4002 65H77.8002C80.6721 65 83.0002 67.3281 83.0002 70.2V79.3C83.0002 82.1719 80.6721 84.5 77.8002 84.5H41.4002C38.5283 84.5 36.2002 82.1719 36.2002 79.3V70.2Z"
                          fill="url(#paint16_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M74.5498 70.2C74.5498 67.3281 76.8779 65 79.7498 65H149.95C152.822 65 155.15 67.3281 155.15 70.2V79.3C155.15 82.1719 152.822 84.5 149.95 84.5H79.7498C76.8779 84.5 74.5498 82.1719 74.5498 79.3V70.2Z"
                          fill="url(#paint17_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M74.5498 70.2C74.5498 67.3281 76.8779 65 79.7498 65H149.95C152.822 65 155.15 67.3281 155.15 70.2V79.3C155.15 82.1719 152.822 84.5 149.95 84.5H79.7498C76.8779 84.5 74.5498 82.1719 74.5498 79.3V70.2Z"
                          fill="url(#paint18_linear)"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M31 89.7C31 87.5461 32.7461 85.8 34.9 85.8H71.3V93.6H34.9C32.7461 93.6 31 91.854 31 89.7Z"
                          fill="url(#paint19_linear)"
                        />
                        <path
                          d="M71.2998 89.7L116.8 74.75"
                          stroke="url(#paint20_linear)"
                          strokeWidth="7.54"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="117.125"
                          cy="74.6851"
                          r="1.625"
                          fill="#424750"
                        />
                        <defs>
                          <filter
                            id="filter0_f"
                            x="20.2817"
                            y="133.282"
                            width="122.437"
                            height="7.43656"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="1.35914"
                              result="effect1_foregroundBlur"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear"
                            x1="72.6759"
                            y1="135.42"
                            x2="72.6178"
                            y2="138.842"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#A1A3A8" />
                            <stop offset="1" stopColor="#C1C3C7" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear"
                            x1="121.8"
                            y1="55.8999"
                            x2="121.8"
                            y2="63.6999"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#62666D" />
                            <stop offset="1" stopColor="#030A16" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear"
                            x1="83.3142"
                            y1="63.478"
                            x2="83.3142"
                            y2="110.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6E7681" />
                            <stop offset="1" stopColor="#B0B6BD" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear"
                            x1="47.7289"
                            y1="63.478"
                            x2="47.7289"
                            y2="110.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6E7681" />
                            <stop offset="1" stopColor="#B0B6BD" />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear"
                            x1="46.847"
                            y1="61.7952"
                            x2="46.847"
                            y2="110.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#92959A" />
                            <stop offset="0.901139" stopColor="#CACCD1" />
                            <stop offset="1" stopColor="#B7BCC6" />
                          </linearGradient>
                          <linearGradient
                            id="paint5_linear"
                            x1="111.97"
                            y1="38.693"
                            x2="70.6935"
                            y2="93.015"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#DDDEE0" />
                            <stop offset="1" stopColor="#CACCD0" />
                          </linearGradient>
                          <linearGradient
                            id="paint6_linear"
                            x1="75.827"
                            y1="43.9936"
                            x2="40.6313"
                            y2="43.9936"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#B9BCC1" />
                            <stop offset="1" stopColor="#A7AAB2" />
                          </linearGradient>
                          <linearGradient
                            id="paint7_linear"
                            x1="36"
                            y1="39"
                            x2="36"
                            y2="58.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FEFEFE" stopOpacity="0.578316" />
                            <stop
                              offset="0.163444"
                              stopColor="white"
                              stopOpacity="0.2"
                            />
                            <stop
                              offset="0.840292"
                              stopColor="white"
                              stopOpacity="0.01"
                            />
                            <stop offset="1" stopOpacity="0.1" />
                          </linearGradient>
                          <linearGradient
                            id="paint8_linear"
                            x1="142.941"
                            y1="43.9936"
                            x2="82.3257"
                            y2="43.9936"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#DCDDE0" />
                            <stop offset="1" stopColor="#CECFD4" />
                          </linearGradient>
                          <linearGradient
                            id="paint9_linear"
                            x1="74.3496"
                            y1="39"
                            x2="74.3496"
                            y2="58.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FEFEFE" stopOpacity="0.578316" />
                            <stop
                              offset="0.163444"
                              stopColor="white"
                              stopOpacity="0.2"
                            />
                            <stop
                              offset="0.840292"
                              stopColor="white"
                              stopOpacity="0.01"
                            />
                            <stop offset="1" stopOpacity="0.05" />
                          </linearGradient>
                          <linearGradient
                            id="paint10_linear"
                            x1="180.95"
                            y1="54.4571"
                            x2="175.7"
                            y2="33.891"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#030A16" />
                            <stop offset="1" stopColor="#62666D" />
                          </linearGradient>
                          <linearGradient
                            id="paint11_linear"
                            x1="83.5144"
                            y1="89.478"
                            x2="83.5144"
                            y2="136.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6E7681" />
                            <stop offset="1" stopColor="#B0B6BD" />
                          </linearGradient>
                          <linearGradient
                            id="paint12_linear"
                            x1="47.9291"
                            y1="89.478"
                            x2="47.9291"
                            y2="136.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#6E7681" />
                            <stop offset="1" stopColor="#B0B6BD" />
                          </linearGradient>
                          <linearGradient
                            id="paint13_linear"
                            x1="47.0463"
                            y1="87.7952"
                            x2="47.0463"
                            y2="136.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#92959A" />
                            <stop offset="0.901139" stopColor="#CACCD1" />
                            <stop offset="1" stopColor="#B7BCC6" />
                          </linearGradient>
                          <linearGradient
                            id="paint14_linear"
                            x1="112.169"
                            y1="64.693"
                            x2="70.8927"
                            y2="119.015"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#DDDEE0" />
                            <stop offset="1" stopColor="#CACCD0" />
                          </linearGradient>
                          <linearGradient
                            id="paint15_linear"
                            x1="76.0272"
                            y1="69.9936"
                            x2="40.8315"
                            y2="69.9936"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#B9BCC1" />
                            <stop offset="1" stopColor="#A7AAB2" />
                          </linearGradient>
                          <linearGradient
                            id="paint16_linear"
                            x1="36.2002"
                            y1="65"
                            x2="36.2002"
                            y2="84.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FEFEFE" stopOpacity="0.578316" />
                            <stop
                              offset="0.163444"
                              stopColor="white"
                              stopOpacity="0.2"
                            />
                            <stop
                              offset="0.840292"
                              stopColor="white"
                              stopOpacity="0.01"
                            />
                            <stop offset="1" stopOpacity="0.1" />
                          </linearGradient>
                          <linearGradient
                            id="paint17_linear"
                            x1="143.141"
                            y1="69.9936"
                            x2="82.5259"
                            y2="69.9936"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#DCDDE0" />
                            <stop offset="1" stopColor="#CECFD4" />
                          </linearGradient>
                          <linearGradient
                            id="paint18_linear"
                            x1="74.5498"
                            y1="65"
                            x2="74.5498"
                            y2="84.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FEFEFE" stopOpacity="0.578316" />
                            <stop
                              offset="0.163444"
                              stopColor="white"
                              stopOpacity="0.2"
                            />
                            <stop
                              offset="0.840292"
                              stopColor="white"
                              stopOpacity="0.01"
                            />
                            <stop offset="1" stopOpacity="0.05" />
                          </linearGradient>
                          <linearGradient
                            id="paint19_linear"
                            x1="31"
                            y1="85.8"
                            x2="31"
                            y2="93.6"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#62666D" />
                            <stop offset="1" stopColor="#030A16" />
                          </linearGradient>
                          <linearGradient
                            id="paint20_linear"
                            x1="94.0498"
                            y1="67.4837"
                            x2="85.6224"
                            y2="93.8689"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#62666D" />
                            <stop offset="1" stopColor="#030A16" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <h5 className="ir my-3 text-lb">
                        سبد خرید شما خالی است!
                      </h5>

                      <p className="ir-light fs-dominant text-black">
                        می‌توانید از قسمت آزمون ها محصول مورد نظر خود را اضافه
                        کنید.
                      </p>
                    </div>
                  </div>

                  <div className="col-12 col-lg-4">
                    <div className="cart-box__left m-1 p-2">
                      <div className="d-flex justify-content-between align-items-center my-2 text-lb">
                        <div className="d-flex align-items-center">
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
                              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                            />
                          </svg>

                          <span className="ir fs-dominant">
                            ورود به حساب کاربری
                          </span>
                        </div>

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
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                          />
                        </svg>
                      </div>

                      <p className="ir-light text-black fs-dominant w-75 ms-1">
                        برای مشاهده محصولاتی که پیشتر به سبد خرید اضافه کرده اید
                        وارد شوید.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </FrameContainer>
          </div>
        </main>
        
        <Footer />
      </>
    );
}