import React, { FC } from "react";
import useHomePage, { Props, ReceivedProps } from "./hook";
import TestReduxLayOut from "./TestRedux";

const HomePageLayout: FC<Props> = () => {
  return (
    <>
      <TestReduxLayOut />
    </>
  );
};

const HomePage: FC<ReceivedProps> = (props) => (
  <HomePageLayout {...useHomePage(props)} />
);

export default HomePage;
