import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Route } from "react-router-dom";

import { ReducersType, StrategiesStateType } from "store";
import { MainPageRoute, RouteType } from "routes";

export const RouteGuard: React.FC<RouteType> = ({ path, component: Component }) => {
  const strategies = useSelector<ReducersType, StrategiesStateType>(({ strategies }) => strategies);

  if (path !== MainPageRoute.path && strategies.list.length === 0) {
    return <Navigate to={MainPageRoute.path} />;
  }

  return <Component />;
};
