import React from "react"
import DashboardRoutes from "../../layouts/DashboardRoutes"
import SideBar from "../navbar/SideBar"
import { BrowserRouter } from "react-router-dom"

export default function Dashboard() {
  return (
    <BrowserRouter>
      <div className="flex flex-row h-full">
        <SideBar />
        <div className="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen">
          <DashboardRoutes />
        </div>
      </div>
    </BrowserRouter>
  )
}
