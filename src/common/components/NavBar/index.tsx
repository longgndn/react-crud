import { Layout, Select } from "antd";
import { useDispatch } from "react-redux";
import { langueChange } from "./slice";

const NavBar = () => {
  const { Header } = Layout;

  const { Option } = Select;

  const dispatch = useDispatch();

  const changeLangue = (e: any) => {
    dispatch(langueChange(e));
  };

  const option = [
    { value: "vi", label: "vietnamese" },
    { value: "en", label: "English" },
  ];

  return (
    <div>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0, background: "#ffffff" }}
      >
        <>
          <Select
            style={{ width: 120 }}
            onChange={changeLangue}
            placeholder="Langue"
          >
            {option.map((item) => {
              return (
                <Option value={item.value} key={item.value}>
                  {item.label}
                </Option>
              );
            })}
          </Select>
        </>
      </Header>
    </div>
  );
};

export default NavBar;
