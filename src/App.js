import "antd/dist/antd.css";
import { Fragment } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
// 引用组件
import Login from "./views/Login/index";

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Routes>
          <Route exact element={<Login />} path="/" />
        </Routes>
      </HashRouter>
    </Fragment>
  );
}

export default App;
