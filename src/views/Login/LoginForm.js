import React from "react";

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

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      codeDisabled: false,
      codeLoadings: false,
      codeText: "获取验证码",
    };
    this.onFinish = this.onFinish.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.getCode = this.getCode.bind(this);
    this.verificationResult = this.verificationResult.bind(this);
  }
  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  toggleForm = () => {
    this.props.switchForm("register");
  };
  /**
   * 获取验证码事件
   */
  getCode = () => {
    // 点击验证码按钮之后，禁用按钮
    this.setState({
      codeText: "发送中",
      codeLoadings: true,
    });
    // 开启60s倒计时事件
    this.countDown();

    /*  // 1.axios
    axios({
      method: "post",
      ull: "xxxxxx",
      data: {},
    })
      .then()
      .catch((rea) => {
        // code 401-未授权，请登录,403-拒绝访问,404-请求地址出错,500-服务器内部错误,504-网关超时,505-HTTP版本不受支持,
      }); */
    // 2.本地自动生成6位数字
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += Math.floor(Math.random() * 10); //随机生成6为数字
    }
    console.log(`验证码如下：${code}`);
    this.setState({
      code: code,
    });
  };

  /**  开启倒计时,60s */
  countDown = () => {
    // 定时器
    let timer = null;
    let sec = 60; //倒计时时间
    // 改变状态
    this.setState({
      codeDisabled: true,
      codeText: `${sec}s`,
    });

    timer = setInterval(() => {
      sec--;
      this.setState({
        codeText: `${sec}s`,
      });
      if (sec === 0) {
        clearInterval(timer);
        this.setState({
          codeDisabled: false,
          codeLoadings: false,
          codeText: "重新获取",
        });
      }
    }, 1000);
  };

  /**
   * 判断输入的验证码是否与生成的验证码是否相同事件
   * @param {*} e
   * @returns
   */
  verificationResult = (e) => {
    // console.log(e.target);
    let code = e.target.value;
    if (code.length === 6) {
      //输入字符长度为6时，开始判断
      if (code === this.state.code) {
        setTimeout(() => {
          return message.success("输入正确", 0.5, () => {
            console.log("ok");
          });
        }, 100);
        return;
      } else {
        return message.error("您输入的验证码有误", 0.5, () => {
          e.target.value = "";
        });
      }
    }
  };

  // 卸载事件
  componentWillUnmount() {
    this.countDown();
  }
  render() {
    const { codeDisabled, codeLoadings, codeText } = this.state;
    return (
      <div id="login">
        <div className="form">
          <div className="form-wrap">
            <div className="form-header">
              <span>登录</span>
              <span onClick={this.toggleForm}>账户注册</span>
            </div>
            <div className="form-content">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: "请填写用户名!" }]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
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
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
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
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="123456"
                        onChange={this.verificationResult}
                      />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row" span={7}>
                    <Button
                      type="danger"
                      disabled={codeDisabled}
                      loading={codeLoadings}
                      onClick={this.getCode}
                    >
                      {codeText}
                    </Button>
                  </Col>
                </Row>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    block
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
}
export default LoginForm;
