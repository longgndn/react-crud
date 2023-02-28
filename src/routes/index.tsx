import React, { useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Products from "../pages/Products";
import HomePage from "../pages/HomePage";
import { useMenuItems } from "./MenuItem";
import { ROUTES } from "@constants";
import { CommonLayout } from "@common/components";

const AppRoutes = () => {
  const { items } = useMenuItems();

  const location = useLocation();

  const pathName: string = location.pathname.split("/")[1];

  const selectedKeys = useMemo(() => {
    switch (pathName) {
      case ROUTES.HOME:
      case ROUTES.HOME_PAGE:
      case ROUTES.PRODUCTS:
      case ROUTES.CATEGORIES_PAGE:
        break;

      default:
        return pathName;
    }
  }, [pathName]);
  return (
    <div>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <CommonLayout menuItems={items} selectedKeys={selectedKeys || ""} />
          }
        >
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
