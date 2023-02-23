import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Sider from "antd/lib/layout/Sider";
import Layout, { Content } from "antd/lib/layout/layout";
import { Menu } from "@common/components";

type MenuItems = {
  label: string;
  key: string;
  icon?: any;
};
type IProps = {
  menuItems: MenuItems[];
  selectedKeys: string;
};

const CommonLayout: FC<IProps> = ({ menuItems, selectedKeys }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            menuItems={menuItems}
            selectedKeys={selectedKeys}
            collapsed={collapsed}
          />
        </Sider>
        <Layout>
          <NavBar />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default CommonLayout;
