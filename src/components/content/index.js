import { Fragment } from "react";
// component
import { Navigate, Route, Routes } from "react-router-dom";
import User from "../../views/user/index";

// views
import NotFound from "../../views/NotFound/index";

function MainContent() {
  return <Fragment>{<div>内容区</div>}</Fragment>;
}
export default MainContent;
