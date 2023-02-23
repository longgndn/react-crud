import { useNavigate } from "react-router-dom";

type MenuItems = {
  label: string;
  key: string;
  icon?: any;
};

export type ReceivedProps = {
  menuItems: MenuItems[];
  selectedKeys: string;
  collapsed: boolean;
};

const useMenu = (props: ReceivedProps) => {
  const navigate = useNavigate();
  const onClick = (e: any) => {
    navigate(e.key);
  };

  return {
    onClick,
    ...props,
  };
};
export type Props = ReturnType<typeof useMenu>;

export default useMenu;
