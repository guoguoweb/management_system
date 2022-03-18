import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// antd
import { Form, Input, Button, Row, Col, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// css
import "./index.scss";
// 验证
import { patternMsgs, patterns } from "../../utils/validator";
/* // api
import { login } from "../../api/account"; */
// axios
// import axios from "axios";

// component
import Code from "../../components/code/index";
import BeforeCodeInput from "../../components/code/input";

export default function LoginForm(props) {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  /**获取子组件传递的验证码事件 */
  const handleCode = (code) => {
    console.log("从子组件得到的验证码:", code);
    setCode(code);
    console.log(code);
  };

  /**登录跳转事件 */
  const loginJumpTo = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username !== "" && password !== "") {
      navigate("/main");
    }
  };

  /**改变父组件:formType */
  const toggleFrom = () => {
    props.switchForm("register");
  };

  return (
    <div id="login">
      <div className="form">
        <div className="form-wrap">
          <div className="form-header">
            <span>登录</span>
            <span onClick={toggleFrom}>账户注册</span>
          </div>
          <div className="form-content">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={(values) => {
                console.log("Received values of form: ", values);
              }}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "请填写用户名!" }]}
              >
                <Input
                  id="username"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username:index"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "请输入密码!" },

                  {
                    pattern: patterns.pwd,
                    message: patternMsgs.pwd,
                  },
                ]}
              >
                <Input
                  id="password"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password:index123456"
                />
              </Form.Item>

              <Row gutter={16}>
                <Col className="gutter-row" span={14}>
                  <Form.Item
                    name="code_"
                    rules={[
                      { required: true, message: "请输入验证码!" },
                      { len: 6, message: "请输入6为数验证码" },
                    ]}
                  >
                    {/* <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="123456"
                        onChange={this.verificationResult}
                      /> */}
                    <BeforeCodeInput code={code} />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={7}>
                  <Code handleCode={handleCode.bind(this)} />
                </Col>
              </Row>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                  onClick={loginJumpTo}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

//------------------------------------
//class

// import React from "react";
// import { useHistory } from "react-router-dom";

// // antd
// import { Form, Input, Button, Row, Col } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
// // css
// import "./index.scss";
// // 验证
// import { patternMsgs, patterns } from "../../utils/validator";
// /* // api
// import { login } from "../../api/account"; */
// // axios
// // import axios from "axios";

// // component
// import Code from "../../components/code/index";
// import BeforeCodeInput from "../../components/code/input";

// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       code: "",
//       /*codeDisabled: false,
//       codeLoadings: false,
//       codeText: "获取验证码", */
//     };
//     this.onFinish = this.onFinish.bind(this);
//     this.toggleForm = this.toggleForm.bind(this);
//     // this.getCode = this.getCode.bind(this);
//     // this.verificationResult = this.verificationResult.bind(this);

//   }
//   onFinish = (values) => {
//     console.log("Received values of form: ", values);
//   };

//   toggleForm = () => {
//     this.props.switchForm("register");
//   };

//   handleCode = (code) => {
//     this.setState({
//       code: code,
//     });
//   };

//   render() {
//     // const { codeDisabled, codeLoadings, codeText } = this.state;
//     return (
//       <div id="login">
//         <div className="form">
//           <div className="form-wrap">
//             <div className="form-header">
//               <span>登录</span>
//               <span onClick={this.toggleForm}>账户注册</span>
//             </div>
//             <div className="form-content">
//               <Form
//                 name="normal_login"
//                 className="login-form"
//                 initialValues={{ remember: true }}
//                 onFinish={this.onFinish}
//               >
//                 <Form.Item
//                   name="username"
//                   rules={[{ required: true, message: "请填写用户名!" }]}
//                 >
//                   <Input
//                     prefix={<UserOutlined className="site-form-item-icon" />}
//                     placeholder="Username"
//                   />
//                 </Form.Item>
//                 <Form.Item
//                   name="password"
//                   rules={[
//                     { required: true, message: "请输入密码!" },

//                     {
//                       pattern: patterns.pwd,
//                       message: patternMsgs.pwd,
//                     },
//                   ]}
//                 >
//                   <Input
//                     prefix={<LockOutlined className="site-form-item-icon" />}
//                     type="password"
//                     placeholder="Password"
//                   />
//                 </Form.Item>

//                 <Row gutter={16}>
//                   <Col className="gutter-row" span={14}>
//                     <Form.Item
//                       name="code"
//                       rules={[
//                         { required: true, message: "请输入验证码!" },
//                         { len: 6, message: "请输入6为数验证码" },
//                       ]}
//                     >
//                       {/* <Input
//                         prefix={
//                           <LockOutlined className="site-form-item-icon" />
//                         }
//                         placeholder="123456"
//                         onChange={this.verificationResult}
//                       /> */}
//                       <BeforeCodeInput {...this.state} />
//                     </Form.Item>
//                   </Col>
//                   <Col className="gutter-row" span={7}>
//                     <Code handleCode={this.handleCode.bind(this)} />
//                     {/*  <Button
//                       type="danger"
//                       disabled={codeDisabled}
//                       loading={codeLoadings}
//                       onClick={this.getCode}
//                     >
//                       {codeText}
//                     </Button> */}
//                   </Col>
//                 </Row>

//                 <Form.Item>
//                   <Button
//                     type="primary"
//                     htmlType="submit"
//                     className="login-form-button"
//                     block

//                   >
//                     登录
//                   </Button>
//                 </Form.Item>
//               </Form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default LoginForm;
