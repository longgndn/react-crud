import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ConfigProvider } from "antd";
import viVN from "antd/es/locale/vi_VN";
import InltLayout from "./InltLayout";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConfigProvider locale={viVN}>
          <InltLayout>
            <Router>
              <AppRoutes />
            </Router>
          </InltLayout>
        </ConfigProvider>
      </Provider>
    </div>
  );
}

export default App;
