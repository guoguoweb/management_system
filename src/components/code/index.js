import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";

// antd
import { Button } from "antd";
let timer = null;

export default function Code(props, ref) {
  const [code, setCode] = useState("");
  const [codeDisabled, setcodeDisabled] = useState(false);
  const [codeLoadings, setcodeLoadings] = useState(false);
  const [codeText, setcodeText] = useState("获取验证码");

  /**  开启倒计时,60s */
  const countDown = () => {
    let sec = 60; //倒计时时间
    // 改变状态
    setcodeDisabled(true);
    setcodeText(`${sec}s`);

    timer = setInterval(() => {
      sec--;
      setcodeText(`${sec}s`);

      if (sec === 0) {
        clearInterval(timer);
        setcodeDisabled(false);
        setcodeLoadings(false);
        setcodeText(`重新获取`);
      }
    }, 1000);
  };

  /**
   * 获取验证码事件
   */
  const getCode = () => {
    // 点击验证码按钮之后，禁用按钮
    setcodeText("发送中");
    setcodeLoadings(true);

    // 开启60s倒计时事件
    countDown();

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
    // this.setState({
    //   code: code,
    // });
    // 把改变后的code传给父组件
    console.log(props);
    props.handleCode(code);
  };

  // useImperativeHandle(ref, () => {
  //   code: getCode();
  // });

  return (
    <Button
      type="danger"
      disabled={codeDisabled}
      loading={codeLoadings}
      onClick={getCode}
    >
      {codeText}
    </Button>
  );
}

// Code = forwardRef(Code);

// class Code extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     code: "",
//   //     codeDisabled: false,
//   //     codeLoadings: false,
//   //     codeText: "",
//   //   };
//   // }

//   /**
//    * 获取验证码事件
//    */
//   getCode = () => {
//     // 点击验证码按钮之后，禁用按钮
//     this.setState({
//       codeText: "发送中",
//       codeLoadings: true,
//     });
//     // 开启60s倒计时事件
//     this.countDown();

//     /*  // 1.axios
//     axios({
//       method: "post",
//       ull: "xxxxxx",
//       data: {},
//     })
//       .then()
//       .catch((rea) => {
//         // code 401-未授权，请登录,403-拒绝访问,404-请求地址出错,500-服务器内部错误,504-网关超时,505-HTTP版本不受支持,
//       }); */
//     // 2.本地自动生成6位数字
//     let code = "";
//     for (let i = 0; i < 6; i++) {
//       code += Math.floor(Math.random() * 10); //随机生成6为数字
//     }
//     console.log(`验证码如下：${code}`);
//     // this.setState({
//     //   code: code,
//     // });
//     // 把改变后的code传给父组件
//     this.props.handleCode(code);
//   };

//   /**  开启倒计时,60s */
//   countDown = () => {
//     let sec = 60; //倒计时时间
//     // 改变状态
//     this.setState({
//       codeDisabled: true,
//       codeText: `${sec}s`,
//     });

//     timer = setInterval(() => {
//       sec--;
//       this.setState({
//         codeText: `${sec}s`,
//       });
//       if (sec === 0) {
//         clearInterval(timer);
//         this.setState({
//           codeDisabled: false,
//           codeLoadings: false,
//           codeText: "重新获取",
//         });
//       }
//     }, 1000);
//   };

//   //   卸载
//   componentWillUnmount() {
//     clearInterval(timer);
//   }

//   render() {
//     const { codeDisabled, codeLoadings, codeText } = this.state;
//     return (
//       <Button
//         type="danger"
//         disabled={codeDisabled}
//         loading={codeLoadings}
//         onClick={this.getCode}
//       >
//         {codeText}
//       </Button>
//     );
//   }
// }

// export default Code;
