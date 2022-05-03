import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "../views/Dashboard"
import Error from "../views/Error"
import Product from "../views/Product"
import ProjectList from "../views/ProjectList"

export default function DashboardRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="product/list" element={<ProjectList />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
