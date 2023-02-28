import viMessagesCommon from "@common/locales/vi_VN.json";
import viVN from "antd/es/locale/vi_VN";

import viMessages from "../locales/vi_VN.json";
import { LOCALE } from "@common/types";

const ViLang = {
  messages: {
    ...viMessagesCommon,
    ...viMessages,
  },
  antd: viVN,
  locale: LOCALE.vi,
};

export default ViLang;
