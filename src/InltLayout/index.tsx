import React, { FC } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import AppLocale from "../configLocales/translation";
import { langueSelector } from "../common/components/NavBar/selector";

import useInltLayout, { Props, ReceivedProps } from "./hook";

const InltLayoutLayout: FC<Props> = ({ children }) => {
  const langue: string = useSelector(langueSelector);

  return (
    <IntlProvider
      locale={langue}
      defaultLocale={langue}
      messages={AppLocale[langue].messages}
    >
      {children}
    </IntlProvider>
  );
};

const InltLayout: FC<ReceivedProps> = (props) => (
  <InltLayoutLayout {...useInltLayout(props)} />
);

export default InltLayout;
