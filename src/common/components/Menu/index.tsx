import { FC } from "react";
import { Menu } from "antd";
import useMenu, { Props, ReceivedProps } from "./hook";
import { MenuContainerWrapper } from "./styled";

const MenuLayout: FC<Props> = ({
  menuItems,
  selectedKeys,
  onClick,
  collapsed,
}) => {
  return (
    <MenuContainerWrapper>
      <div className="logo" />

      <Menu
        className={`menu ${collapsed ? "menu-open" : "menu-close"}`}
        //className={`menu ${collapsed ? "menu--collapsed" : "menu--open"}`}
        onClick={onClick}
        defaultSelectedKeys={[selectedKeys]}
        selectedKeys={[selectedKeys]}
        //mode="inline"
        items={menuItems}
        //expandIcon={() => <Add />}
      />
    </MenuContainerWrapper>
  );
};

const MenuView: FC<ReceivedProps> = (props) => (
  <MenuLayout {...useMenu(props)} />
);

export default MenuView;
