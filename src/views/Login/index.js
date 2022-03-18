import React, { Fragment, useState } from "react";
// 组件
import LoginFrom from "./LoginForm";
import RegisterForm from "../register/index";

function Login(props) {
  const [formType, setformType] = useState("login");

  /**登录注册切换 */
  const switchForm = (value) => {
    setformType(value);
  };

  return (
    <Fragment>
      {formType === "login" ? (
        <LoginFrom switchForm={switchForm.bind(this)} />
      ) : (
        <RegisterForm switchForm={switchForm.bind(this)} />
      )}
    </Fragment>
  );
}

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formType: "login",
//     };
//     this.switchForm = this.switchForm.bind(this);
//   }
//   switchForm = (value) => {
//     this.setState({
//       formType: value,
//     });
//   };

//   render() {
//     return (
//       <Fragment>
//         {this.state.formType === "login" ? (
//           <LoginFrom switchForm={this.switchForm} />
//         ) : (
//           <RegisterForm switchForm={this.switchForm} />
//         )}
//       </Fragment>
//     );
//   }
// }

export default Login;
