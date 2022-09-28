import React from 'react';
import { Routes, Route, BrowserRouter, redirect } from 'react-router-dom';

import routes from '@/routes'
interface IRoute {
  path: string;
  element: any;
  routes?: IRoute[];
  redirect?: string;
}
const getRoute = (RouteConfig) => {

  return RouteConfig.map((route: IRoute) => {
    const { path, routes, redirect, element } = route;
    return (
      <React.Fragment key={path}>
        <Route path={path} element={element} />
      </React.Fragment>
    )
  })


}

const App = () => {
  return (
    <Routes>
      {getRoute(routes)}
    </Routes>
  )
}
export default App;