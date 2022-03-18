import { Fragment } from "react";
import { Route, HashRouter, Routes, Navigate } from "react-router-dom";
// antd
import "antd/dist/antd.css";

// 引用组件
import Login from "./views/Login/index";
import Main from "./views/main/index";
import NotFound from "./views/NotFound/index";

// import FadingRoute from "./components/privateRouter/index";

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Routes>
          <Route exact element={<Login />} path="/" />
          <Route exact element={<Main />} path="/main/*" />

          <Route path="*" element={<NotFound />} />

          {/* <Route element={<FadingRoute />} path="/main" /> */}
        </Routes>
      </HashRouter>
    </Fragment>
  );
}

export default App;
