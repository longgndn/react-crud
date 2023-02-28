import enUS from "antd/es/locale/ja_JP";

import enMessagesCommon from "@common/locales/en_US.json";
import enMessages from "../locales/en_US.json";
import { LOCALE } from "@common/types";

const EnLang = {
  messages: {
    ...enMessagesCommon,
    ...enMessages,
  },
  antd: enUS,
  locale: LOCALE.en,
};

export default EnLang;
