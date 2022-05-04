import { Switch, Route, Redirect } from "react-router-dom"
import React from "react"
import Dashboard from "../views/Dashboard"
import Error from "../views/Error"
import Product from "../views/Product"
import ProjectList from "../views/ProjectList"
import UserSettings from "../views/UserSettings"

const DashboardRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact children={<Dashboard />} />
      <Route path="/product/:productId" children={<Product />} />
      <Route path="/product/list" children={<ProjectList />} />
      <Route path="/settings" children={<UserSettings />} />
      <Route path="/errors/404" children={<Error />} />
      <Redirect to="/errors/404" />
    </Switch>
  )
}

export default DashboardRoutes
