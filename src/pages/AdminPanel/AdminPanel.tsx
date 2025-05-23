import { useState, useEffect, useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

export default function AdminPanel() {

    let authContext = useContext(AuthContext)
    let navigation = useNavigate()

    useEffect(() => {
        navigation('admin-dashboard')
    }, [])

    let [statusOfMenu, setStatusOfMenu] = useState(false)

    return (
      <>
        <header className="header-panel fixed-top" style={{ zIndex: "99" }}>
          <div className="shadow d-flex">
            <div className="d-none d-lg-inline col-lg-3 bg-primary">
              <svg
                className="d-block m-auto"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="90pt"
                height="60pt"
                viewBox="0 0 450.000000 307.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,307.000000) scale(0.100000,-0.100000)"
                  fill="#5ef2ad"
                  stroke="none"
                >
                  <path d="M3500 2157 c-3 -2 -35 -7 -71 -11 -220 -20 -408 -177 -473 -394 -18 -59 -19 -65 -3 -90 13 -23 22 -27 63 -27 l48 0 24 60 c56 137 80 173 161 232 75 55 155 76 279 71 94 -3 115 -7 172 -34 115 -54 187 -137 223 -255 20 -67 37 -83 84 -83 95 0 91 111 -9 270 -81 130 -237 231 -378 247 -25 3 -61 8 -80 12 -19 3 -37 4 -40 2z m192 -68 c187 -62 312 -202 353 -397 l7 -33 -43 3 c-42 3 -43 3 -54 53 -51 229 -308 370 -564 310 -167 -40 -292 -159 -332 -319 -11 -45 -12 -46 -50 -46 -46 0 -47 3 -19 92 37 121 142 248 250 303 47 24 131 50 185 59 61 9 206 -4 267 -25z" />
                  <path d="M2425 2132 c-195 -41 -350 -192 -400 -389 -15 -57 -15 -64 1 -88 13 -19 25 -25 53 -25 51 1 68 18 92 91 37 112 125 211 219 244 25 9 53 20 62 26 10 5 64 9 120 8 144 0 219 -32 189 -78 -8 -12 -18 -12 -70 -1 -180 38 -342 -33 -409 -179 -23 -51 -24 -56 -9 -80 12 -21 25 -27 60 -29 42 -3 45 -1 79 47 57 82 80 95 170 100 58 2 85 -1 110 -14 18 -9 50 -23 72 -31 37 -13 39 -13 65 15 35 37 121 211 121 244 0 24 -49 77 -71 77 -5 0 -27 11 -48 25 -22 13 -52 27 -68 30 -148 30 -221 31 -338 7z m255 -23 c72 -11 132 -35 202 -80 l48 -31 -59 -114 c-33 -63 -61 -120 -63 -126 -3 -9 -24 -2 -68 21 -141 75 -293 43 -350 -74 -20 -42 -24 -45 -61 -45 -45 0 -47 7 -20 66 71 157 262 217 443 140 13 -6 23 4 43 45 l27 52 -23 18 c-36 27 -116 50 -194 56 -136 10 -287 -47 -370 -139 -52 -58 -95 -140 -102 -197 -6 -41 -6 -41 -49 -41 -50 0 -48 -3 -30 65 74 280 324 433 626 384z" />
                  <path d="M342 2123 c-42 -8 -47 -35 -47 -248 0 -185 1 -202 20 -222 24 -28 75 -31 98 -5 13 14 16 45 18 170 0 84 5 155 10 158 12 7 411 5 418 -2 15 -15 -37 -22 -168 -23 -145 -1 -146 -2 -169 -28 -22 -25 -23 -32 -20 -138 4 -163 -7 -155 234 -155 186 0 194 1 214 22 25 27 25 66 1 96 -18 21 -27 22 -141 22 -116 0 -167 10 -155 31 4 5 74 9 160 9 l154 0 21 27 c20 25 21 37 18 140 -2 92 -6 116 -21 130 -16 16 -44 18 -320 19 -166 1 -312 0 -325 -3z m638 -155 l0 -128 -185 0 -185 0 0 -50 0 -50 165 0 165 0 0 -40 0 -40 -205 0 -205 0 0 130 0 130 185 0 185 0 0 48 0 47 -251 0 -251 0 4 -178 3 -177 -42 0 -43 0 0 218 0 217 330 0 330 0 0 -127z" />
                  <path d="M1166 2109 l-26 -20 0 -200 c0 -238 6 -259 70 -259 62 0 70 19 70 181 0 76 3 144 6 153 4 10 18 16 35 16 l29 0 0 -145 c0 -190 6 -205 88 -205 53 0 61 3 88 33 17 17 41 48 54 67 86 128 176 241 196 246 51 13 50 1 -8 -82 -154 -221 -152 -218 -122 -248 9 -10 33 -16 58 -16 50 0 69 17 157 143 30 43 63 90 74 105 128 174 141 200 120 228 -12 17 -31 19 -175 22 -129 3 -166 0 -184 -11 -23 -16 -146 -171 -146 -185 0 -5 -11 -19 -24 -31 -21 -19 -24 -20 -30 -6 -3 9 -6 56 -6 105 0 84 -1 90 -26 109 -24 19 -40 21 -149 21 -109 0 -125 -2 -149 -21z m296 -181 l3 -168 113 160 c63 88 118 162 122 165 8 5 350 12 350 8 0 -1 -48 -69 -107 -150 -60 -82 -128 -179 -153 -216 l-45 -66 -52 -1 -53 0 130 180 129 181 -76 -3 -77 -3 -126 -177 -125 -177 -57 0 -58 -1 0 179 0 179 -65 0 -65 0 0 -179 0 -179 -40 0 -40 0 0 218 0 217 145 0 145 0 2 -167z" />
                  <path d="M3460 1928 c-73 -11 -128 -39 -182 -93 -46 -45 -88 -119 -88 -154 0 -30 28 -51 69 -51 43 0 60 11 89 60 34 58 78 84 148 88 83 6 121 -14 175 -89 26 -35 52 -60 64 -61 38 -3 59 3 78 19 58 54 -80 242 -198 269 -66 15 -109 19 -155 12z m184 -62 c65 -32 115 -87 144 -156 l21 -50 -42 0 c-40 1 -43 3 -72 53 -84 145 -305 140 -378 -9 -20 -42 -23 -44 -63 -44 l-43 0 11 31 c29 84 120 173 202 199 55 17 160 6 220 -24z" />
                  <path d="M320 1528 c-28 -31 -32 -62 -28 -260 3 -162 5 -179 23 -198 19 -19 34 -20 335 -20 l315 -1 23 26 c20 23 22 37 22 123 0 53 -3 107 -6 120 -11 41 -48 50 -173 45 -129 -5 -181 1 -181 22 0 12 23 15 135 15 130 0 135 1 160 25 31 32 32 70 3 101 -23 23 -26 24 -210 24 l-187 0 -26 -25 c-24 -25 -25 -31 -25 -141 0 -109 1 -116 25 -139 24 -24 28 -25 180 -25 97 0 155 -4 155 -10 0 -10 -21 -11 -285 -14 l-140 -1 -3 155 c-3 136 -6 158 -22 175 -26 28 -65 29 -90 3z m81 -190 l-2 -178 250 0 251 0 0 48 0 47 -185 -3 -185 -3 0 133 0 133 205 0 205 0 0 -41 0 -42 -165 4 -165 4 0 -55 0 -56 183 1 182 2 3 -126 3 -126 -331 0 -330 0 0 221 0 220 42 -3 42 -3 -3 -177z" />
                  <path d="M1166 1529 l-26 -20 0 -208 c0 -171 3 -210 16 -229 14 -21 22 -22 158 -22 179 0 176 -2 176 131 0 52 4 99 8 106 4 7 27 -16 62 -63 30 -41 70 -94 88 -118 19 -25 45 -47 60 -51 32 -8 305 -7 327 1 44 17 -2 24 -158 24 l-173 0 -85 117 c-46 64 -101 142 -121 173 l-38 55 0 -172 0 -173 -145 0 -145 0 0 220 0 220 40 0 40 0 0 -180 0 -180 65 0 65 0 0 179 0 178 56 -1 55 0 127 -178 126 -178 79 0 78 0 -34 43 c-18 23 -73 97 -121 164 -95 133 -116 156 -116 128 0 -17 82 -141 152 -229 44 -56 44 -73 3 -68 -33 4 -33 5 -115 122 -120 170 -136 191 -165 210 -41 27 -106 26 -131 -1 -16 -18 -20 -42 -24 -177 l-5 -157 -25 0 c-14 0 -28 5 -32 10 -4 6 -8 76 -8 156 0 139 -1 146 -23 167 -29 28 -57 28 -91 1z" />
                  <path d="M1650 1535 c-11 -13 -8 -15 21 -16 19 -1 41 -1 50 0 10 1 56 -55 124 -151 154 -217 207 -288 217 -288 25 0 2 36 -200 319 -19 25 -43 60 -54 78 -38 62 -128 94 -158 58z" />
                  <path d="M2030 1525 l-23 -25 21 -76 c54 -195 202 -336 405 -384 110 -25 179 -25 286 0 128 31 231 96 231 147 0 25 -39 108 -97 206 -40 66 -51 69 -131 31 -65 -31 -142 -40 -199 -25 -43 12 -61 27 -115 101 -42 56 -89 66 -127 26 l-23 -25 18 -50 c39 -110 155 -198 276 -209 33 -3 91 1 130 8 60 12 71 11 79 -1 13 -21 6 -32 -33 -52 -80 -40 -262 -31 -357 17 -98 50 -181 156 -206 261 -18 73 -89 99 -135 50z m102 -51 c10 -63 61 -156 115 -209 29 -29 77 -62 121 -83 65 -31 86 -36 172 -40 60 -3 118 0 147 7 56 14 133 51 133 63 0 5 -11 30 -25 57 l-26 49 -52 -20 c-74 -28 -188 -28 -253 1 -61 27 -118 82 -150 143 -34 66 -32 76 16 74 35 -1 41 -4 56 -39 19 -42 72 -93 113 -109 14 -5 57 -10 95 -10 60 0 79 5 138 35 l68 35 65 -126 c73 -142 75 -127 -26 -181 -78 -43 -159 -61 -264 -61 -278 0 -477 160 -530 427 l-6 31 43 -1 c42 -2 43 -3 50 -43z" />
                  <path d="M2962 1527 c-21 -23 -22 -27 -6 -102 26 -122 138 -264 264 -332 89 -48 226 -78 321 -70 247 21 420 140 505 347 48 118 34 180 -41 180 -39 0 -67 -29 -85 -90 -51 -166 -188 -271 -373 -286 -142 -12 -262 31 -356 126 -47 47 -61 71 -85 138 -15 44 -36 88 -45 96 -26 23 -74 20 -99 -7z m103 -75 c21 -75 80 -169 135 -212 21 -16 69 -44 106 -62 60 -28 81 -32 175 -36 89 -4 119 -1 176 16 164 51 272 167 307 332 4 22 11 25 46 26 l40 1 -6 -36 c-36 -200 -200 -367 -402 -410 -68 -14 -196 -14 -264 0 -187 39 -335 178 -392 368 -22 76 -22 79 23 77 l39 -1 17 -63z" />
                  <path d="M3212 1534 c-28 -19 -28 -53 -1 -105 55 -109 160 -178 284 -187 60 -4 79 0 135 23 76 31 141 90 176 157 30 59 30 79 1 106 -33 31 -77 28 -110 -6 -15 -15 -27 -33 -27 -39 0 -6 -18 -27 -41 -46 -48 -41 -105 -53 -173 -36 -45 11 -68 31 -134 118 -27 35 -72 42 -110 15z m97 -51 c28 -77 153 -145 233 -128 76 17 148 74 170 135 7 22 15 25 48 25 47 0 49 -8 16 -73 -116 -227 -439 -218 -542 15 -13 29 -24 55 -24 57 0 1 20 2 44 2 40 -1 45 -4 55 -33z" />
                </g>
              </svg>
            </div>

            <div className="col-12 col-lg-9 py-2 py-lg-0 bg-white d-flex justify-content-between align-items-center container-md">
              <button
                className="btn d-inline d-lg-none"
                onClick={() => setStatusOfMenu(true)}
              >
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              <div className="header-panel__icons d-none d-lg-inline fs-4">
                <a href="#" className="me-3 rounded-circle text-black">
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
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </a>

                <a href="#" className="p-1 rounded-circle text-black">
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
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                </a>
              </div>

              <div className="d-flex">
                <div>
                  <img
                    src="/image/profile.jpg"
                    className="rounded-circle"
                    width="50"
                  />
                </div>

                <div className="d-flex align-items-center">
                  {/* <span className="ir-light ms-3">{`${authContext.userInfo.firstname} ${authContext.userInfo.lastname}`}</span> */}
                </div>
              </div>
            </div>
          </div>
        </header>

        {statusOfMenu && (
          <div
            className="position-fixed top-0 bottom-0 start-0 end-0 d-flex"
            style={{ zIndex: "999" }}
          >
            <div className="sidebar-panel top-0" style={{ zIndex: "9999" }}>
              <div
                className="sidebar-top d-flex align-items-center p-1 my-2"
                style={{ width: "250px" }}
              >
                <img
                  src="/image/profile.jpg"
                  width="80px"
                  className="rounded-circle"
                />

                <span className="text-white ir-light fs-dominant ms-2">
                  {/* {authContext.userInfo.firstname} */}
                  <br />
                  <span className="text-soft">
                    {/* {authContext.userInfo.lastname} */}
                  </span>
                </span>
              </div>

              <div className="sidebar-menu">
                <ul className="list-unstyled p-2">
                  <li>
                    <Link
                      to="admin-dashboard"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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
                          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>

                      <span className="ir-light fs-dominant">پیشخوان</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="admin-questions"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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
                          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                        />
                      </svg>

                      <span className="ir-light fs-dominant">سوالات</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="admin-quizzes"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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

                      <span className="ir-light fs-dominant">آزمون ها</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="admin-users-handle"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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

                      <span className="ir-light fs-dominant">کاربران سایت</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="admin-edit-profile"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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

                      <span className="ir-light fs-dominant">
                        ویرایش پروفایل
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="admin-change-pass"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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
                          d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                        />
                      </svg>

                      <span className="ir-light fs-dominant">
                        تغییر رمز عبور
                      </span>
                    </Link>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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
                          d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                        />
                      </svg>

                      <span className="ir-light fs-dominant">خروج</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-12 bg-dark opacity-25"
              onClick={() => setStatusOfMenu(false)}
            ></div>
          </div>
        )}

        <div className="wrapper-panel d-flex">
          <div className="d-none d-lg-inline col-lg-3">
            <div className="sidebar-panel w-25">
              <div className="sidebar-top d-flex align-items-center p-1 my-2">
                <img
                  src="/image/profile.jpg"
                  width="80px"
                  className="rounded-circle"
                />

                <span className="text-white ir-light fs-dominant ms-2">
                  {/* {authContext.userInfo.firstname} */}
                  <br />
                  <span className="text-soft">
                    {/* {authContext.userInfo.lastname} */}
                  </span>
                </span>
              </div>

              <div className="sidebar-menu">
                <ul className="list-unstyled p-2">
                  <li>
                    <Link
                      to="admin-dashboard"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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
                          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>

                      <span className="ir-light fs-dominant">پیشخوان</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="admin-questions"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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
                          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>

                      <span className="ir-light fs-dominant">سوالات</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="admin-quizzes"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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

                      <span className="ir-light fs-dominant">آزمون ها</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="admin-users-handle"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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

                      <span className="ir-light fs-dominant">کاربران سایت</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="admin-edit-profile"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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

                      <span className="ir-light fs-dominant">
                        ویرایش پروفایل
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="admin-change-pass"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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
                          d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                        />
                      </svg>

                      <span className="ir-light fs-dominant">
                        تغییر رمز عبور
                      </span>
                    </Link>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="sidebar-menu__list text-soft d-flex mb-2 p-3"
                    >
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
                          d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                        />
                      </svg>

                      <span className="ir-light fs-dominant">خروج</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-9">
            <main className="main-panel">
              <Outlet />
            </main>
          </div>
        </div>
      </>
    );
}