import React, { FC } from "react";
import useHomePage, { Props, ReceivedProps } from "./hook";

const HomePageLayout: FC<Props> = () => {
  return <>123</>;
};

const HomePage: FC<ReceivedProps> = (props) => (
  <HomePageLayout {...useHomePage(props)} />
);

export default HomePage;
