import React, { useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Product from "../pages/Product";
import CommonLayout from "../common/components/CommonLayout";
import HomePage from "../pages/HomePage";
import { useMenuItems } from "./MenuItem";
import { ROUTES } from "@constants";

const AppRoutes = () => {
  const { items } = useMenuItems();

  const location = useLocation();

  const pathName: string = location.pathname.split("/")[1];

  const selectedKeys = useMemo(() => {
    switch (pathName) {
      case ROUTES.HOME:
      case ROUTES.HOME_PAGE:
      case ROUTES.PRODUCT_PAGE:
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
          <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
          <Route path={ROUTES.PRODUCT_PAGE} element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
