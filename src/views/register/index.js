import React, { useState } from "react";

// antd
import { Form, Input, Button, Row, Col, Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// css
import "../Login/index.scss";
// component
import Code from "../../components/code/index";
import BeforeCodeInput from "../../components/code/input";
import { useNavigate } from "react-router";

const { Option } = Select;
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);

function RegisterForm(props) {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const toggleFrom = () => {
    props.switchForm("login");
  };
  const handleCode = (code) => {
    setCode(code);
  };
  /**注册跳转 */
  const registerJumpTo = () => {
    let username = document.getElementsByTagName("username").value;
    let password = document.getElementsByTagName("password").value;
    let phoneNumber = document.getElementsByTagName("phoneNumber").value;
    if (username !== "" && password !== "" && phoneNumber !== "") {
      navigate("/main");
    }
  };

  return (
    <div id="login">
      <div className="form">
        <div className="form-wrap">
          <div className="form-header">
            <span>注册</span>
            <span onClick={toggleFrom}>登录</span>
          </div>
          <div className="form-content">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true, prefix: "86" }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "请填写用户名!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username:index"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "请输入密码!" },
                  // {
                  //   pattern: /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/,
                  //   message: "可输入字母和数字，最小长度为6，最大长度为20",
                  // },
                  // { max: 20, message: "可输入最大字符长度为20" },
                  // { min: 6, message: "可输入最小字符长度为6" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password:123456"
                />
              </Form.Item>
              <Form.Item
                name="repeatPassword"
                rules={[
                  {
                    required: true,
                    message: "请再次输入密码!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error("两次输入的密码不一致!"));
                    },
                  }),
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="password:123456"
                />
              </Form.Item>

              <Form.Item
                name="phoneNumber"
                rules={[
                  {
                    pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
                    message: "请填入正确的号码，可输入字符的最大长度为11",
                  },
                  {
                    required: true,
                    message: "请输入手机号码!",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                  placeholder="13111111111"
                />
              </Form.Item>

              <Row gutter={16}>
                <Col className="gutter-row" span={14}>
                  <Form.Item
                    name="code"
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
                  {/*  <Button
                    type="danger"
                    disabled={codeDisabled}
                    loading={codeLoadings}
                    onClick={this.getCode}
                  >
                    {codeText}
                  </Button> */}
                </Col>
              </Row>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                  onClick={registerJumpTo}
                >
                  注册
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
// class RegisterForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       code: "",
//     };
//     this.onFinish = this.onFinish.bind(this);
//     this.toggleFrom = this.toggleFrom.bind(this);
//   }
//   onFinish = (values) => {
//     console.log("Received values of form: ", values);
//   };
//   toggleFrom = () => {
//     this.props.switchForm("login");
//   };
//   handleCode = (code) => {
//     this.setState({
//       code: code,
//     });
//   };

//   render() {
//     return (
//       <div id="login">
//         <div className="form">
//           <div className="form-wrap">
//             <div className="form-header">
//               <span>注册</span>
//               <span onClick={this.toggleFrom}>登录</span>
//             </div>
//             <div className="form-content">
//               <Form
//                 name="normal_login"
//                 className="login-form"
//                 initialValues={{ remember: true, prefix: "86" }}
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
//                     // {
//                     //   pattern: /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/,
//                     //   message: "可输入字母和数字，最小长度为6，最大长度为20",
//                     // },
//                     // { max: 20, message: "可输入最大字符长度为20" },
//                     // { min: 6, message: "可输入最小字符长度为6" },
//                   ]}
//                 >
//                   <Input
//                     prefix={<LockOutlined className="site-form-item-icon" />}
//                     type="password"
//                     placeholder="Password"
//                   />
//                 </Form.Item>
//                 <Form.Item
//                   name="repeatPassword"
//                   rules={[
//                     {
//                       required: true,
//                       message: "请再次输入密码!",
//                     },
//                     ({ getFieldValue }) => ({
//                       validator(_, value) {
//                         if (!value || getFieldValue("password") === value) {
//                           return Promise.resolve();
//                         }

//                         return Promise.reject(
//                           new Error("两次输入的密码不一致!")
//                         );
//                       },
//                     }),
//                   ]}
//                 >
//                   <Input
//                     prefix={<LockOutlined className="site-form-item-icon" />}
//                     type="password"
//                     placeholder="repeatPassword"
//                   />
//                 </Form.Item>

//                 <Form.Item
//                   name="phoneNumber"
//                   rules={[
//                     {
//                       pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
//                       message: "请填入正确的号码，可输入字符的最大长度为11",
//                     },
//                     {
//                       required: true,
//                       message: "请输入手机号码!",
//                     },
//                   ]}
//                 >
//                   <Input
//                     addonBefore={prefixSelector}
//                     style={{
//                       width: "100%",
//                     }}
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
//                     注册
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
export default RegisterForm;
