import React from "react";

import { CreateStrategyPage, MainPage, SelectStrategyPage } from "pages";

export type RouteType = {
  path: string;
  component: React.FC;
};

export const CreateStrategyPageRoute: RouteType = {
  path: "/strategy/create",
  component: CreateStrategyPage,
};

export const MainPageRoute: RouteType = {
  path: "/",
  component: MainPage,
};

export const SelectStrategyPageRoute: RouteType = {
  path: "/strategy/select",
  component: SelectStrategyPage,
};

export const routes: RouteType[] = [
  CreateStrategyPageRoute,
  MainPageRoute,
  SelectStrategyPageRoute,
];
