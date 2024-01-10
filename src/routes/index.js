import React from "react";
import { Routes, Route } from "react-router-dom";
import allRoute from "./route";

const RoutesDom = () => {
  const renderRoute = (route, index) => {
    return (
      <Route
        key={"route" + index + route.path}
        index={route.index ? true : false}
        path={route.path}
        element={route.element}
      >
        {route.sub && renderRoute(route.sub)}
      </Route>
    );
  };

  return <Routes>{allRoute.map((item) => renderRoute(item))}</Routes>;
};

export default RoutesDom;
