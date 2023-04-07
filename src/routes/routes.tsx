import config from "../config";

//layout
import HeaderOnly from "../layouts/HeaderOnly/HeaderOnly";

// page
import Boards from "../pages/Boards/Boards";
import Templates from "../pages/Templates/Templates";
import HomeTable from "../pages/HomeTable/HomeTable";
import Home from "../pages/Home/Home";
import { FC } from "react";
import { DefaultLayoutProps } from "../layouts/DefaultLayout/DefaultLayout";
import Work from "../pages/Work/Work";
import View from "../pages/View/View";

export interface RouteItem {
  path: string;
  component: React.ComponentType<any>;
  layout?: FC<DefaultLayoutProps>;
}

// public routes
const publicRoutes: RouteItem[] = [
  { path: config.routes.home, component: Home },
  { path: config.routes.homeTable, component: HomeTable },
  { path: config.routes.boards, component: Boards },
  { path: config.routes.templates, component: Templates },
  { path: config.routes.works, component: Work, layout: HeaderOnly },
  { path: config.routes.view, component: View, layout: HeaderOnly },
];

export { publicRoutes };
