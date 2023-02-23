import { ROUTES } from "@constants";

export const useMenuItems = () => {
  const items = [
    {
      label: "HOME PAGE",
      key: ROUTES.HOME_PAGE,
      //icon: <Add strokeColor="#ffffff" />,
    },
    {
      label: "PRODUCT",
      key: ROUTES.PRODUCT_PAGE,
      // icon: <Add strokeColor="#ffffff" />,
    },
    {
      label: "CATEGORIES",
      key: ROUTES.CATEGORIES_PAGE,
      //icon: <Add strokeColor="#ffffff" />,
    },
  ];
  return { items };
};
