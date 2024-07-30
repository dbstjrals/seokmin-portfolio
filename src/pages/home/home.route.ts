import { pathKeys } from "../../shared/libs/react-router";
import { createElement } from "react";
import { RouteObject } from "react-router-dom";
import { HomePage } from "./home.ui";

export const homePageRoute: RouteObject = {
  path: pathKeys.home(),
  element: createElement(HomePage),
}