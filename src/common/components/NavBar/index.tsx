import { Layout } from "antd";
import React from "react";

const NavBar = () => {
  const { Header } = Layout;
  return (
    <div>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0, background: "#ffffff" }}
      />
    </div>
  );
};

export default NavBar;
