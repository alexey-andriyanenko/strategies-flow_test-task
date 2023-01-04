import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { store } from "store";
import { routes, RouteGuard } from "routes";

import "./app.css";
import "assets/root.css";
import {} from "../routes/route-guard";

export const App: React.FC<PropsWithChildren> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, component }) => (
            <Route
              key={path}
              path={path}
              element={<RouteGuard path={path} component={component} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
