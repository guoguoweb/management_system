import React, { Fragment } from "react";
// 组件
import LoginFrom from "./LoginForm";
import RegisterForm from "../register/index";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "login",
    };
    this.switchForm = this.switchForm.bind(this);
  }
  switchForm = (value) => {
    this.setState({
      formType: value,
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.formType === "login" ? (
          <LoginFrom switchForm={this.switchForm} />
        ) : (
          <RegisterForm switchForm={this.switchForm} />
        )}
      </Fragment>
    );
  }
}

export default Login;
