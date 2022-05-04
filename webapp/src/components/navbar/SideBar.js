import React from "react"
import { Link } from "react-router-dom"

export default function SideBar() {
  return (
    <nav className="bg-blue-500 w-20  justify-between flex flex-col">
      <div className="mt-10 mb-10 pt-10">
        <Link to="/">
          <img
            src="https://randomuser.me/api/portraits/women/76.jpg"
            className="rounded-full w-10 h-10 mb-3 mx-auto"
            alt=""
          />
        </Link>
        <div className="mt-10">
          <ul>
            <li className="mb-6">
              <Link to="/">
                <span>
                  {/* <svg
                    className="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                          4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                          9v2h-4v-2h4m2-2h-8v6h8v-6z"
                    ></path>
                  </svg> */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-5 w-5 text-gray-100 mx-auto hover:text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </span>
              </Link>
            </li>

            <li className="mb-6">
              <Link to="/product">
                <span>
                  <svg
                    className="fill-current h-5 w-5 text-gray-100 mx-auto hover:text-orange-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                          4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                          9v2h-4v-2h4m2-2h-8v6h8v-6z"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
            <li className="mb-6">
              <Link to="/settings">
                <span>
                  <svg
                    className="fill-current h-5 w-5 mx-auto text-gray-100 hover:text-orange-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                          014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                          8-4z"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-4">
        <Link to="#">
          <span>
            <svg
              className="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z"
                fill="currentColor"
              />
              <path
                d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </Link>
      </div>
    </nav>
  )
}
