import React from "react"
import DashboardRoutes from "../layouts/DashboardRoutes"
import SideBar from "../navbar/SideBar"

export default function Dashboard() {
  return (
    <div class="flex flex-row h-full">
      <SideBar />
      <div class="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen">
        <DashboardRoutes />
      </div>
    </div>
  )
}
