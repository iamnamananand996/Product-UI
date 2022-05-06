import React, { useContext } from "react"
import DashboardRoutes from "../../layouts/DashboardRoutes"
import SideBar from "../navbar/SideBar"
import { BrowserRouter } from "react-router-dom"
import UserContext from "../../context/UserContext"

export default function Dashboard() {
  const { user } = useContext(UserContext)
  return (
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <div
          className="basic-full absolute z-10 h-10"
          style={{ width: "99%", backgroundColor: `${user?.mainColor}` }}
        >
          {/* <img
            className="h-fit w-40 pt-3 pl-4"
            src={`${user?.logo}`}
            alt=""
            // srcSet=""
          /> */}
        </div>
        <div className="basic-full h-10/12">
          <div className="flex flex-row">
            <SideBar />
            <div className="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen overflow-auto">
              <DashboardRoutes />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
