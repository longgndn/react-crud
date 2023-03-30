import { Button } from "antd";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useTest, { ReceivedProps } from "./hook";
import { countsSelector } from "./selector";
import { khiembamcong, down, clear } from "./slice";

const TestReduxLayOut = () => {
  const [clearSave, setClearSave] = useState("");

  const dispath = useDispatch();
  const count = useSelector(countsSelector);

  const up = () => {
    dispath(khiembamcong());
  };

  const downbtn = () => {
    dispath(down());
  };

  const downAll = (e: any) => {
    e.preventDefault();
    dispath(clear(clearSave));
  };
  return (
    <>
      {count}
      <Button onClick={up}>up</Button>
      <Button onClick={downbtn}>down</Button>
      <form onSubmit={downAll}>
        <input type="text" onChange={(e) => setClearSave(e.target.value)} />
        <button type="submit">tru</button>
      </form>
    </>
  );
};

const TestRedux: FC<ReceivedProps> = (props) => (
  <TestReduxLayOut {...useTest(props)} />
);
export default TestRedux;
