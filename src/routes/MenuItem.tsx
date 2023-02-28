import { ROUTES } from "@constants";
import { useIntl } from "react-intl";

export const useMenuItems = () => {
  const { formatMessage } = useIntl();
  const items = [
    {
      label: formatMessage({ id: "menu.homepage" }),
      key: ROUTES.HOME,
      //icon: <Add strokeColor="#ffffff" />,
    },
    {
      label: formatMessage({ id: "menu.products" }),
      key: ROUTES.PRODUCTS,
      // icon: <Add strokeColor="#ffffff" />,
    },
    // {
    //   label: "CATEGORIES",
    //   key: ROUTES.CATEGORIES_PAGE,
    //   icon: <Add strokeColor="#ffffff" />,
    // },
  ];
  return { items };
};
