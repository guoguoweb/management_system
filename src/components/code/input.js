import React, { useState, useEffect } from "react";

// antd
import { Input, message } from "antd";
import { LockOutlined } from "@ant-design/icons";

function BeforeCodeInput(props) {
  // const [code, setCode] = useState("");
  /**
   * 判断输入的验证码是否与生成的验证码是否相同事件
   * @param {*} e
   * @returns
   */
  const verificationResult = (e) => {
    console.log(props);
    // console.log(e.target);
    // debugger;
    let enteredCode = e.target.value;
    console.log("已输入的验证码:", enteredCode);
    if (enteredCode.length === 6) {
      //输入字符长度为6时，开始判断
      let { code } = props;
      if (enteredCode === code) {
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
  return (
    <Input
      prefix={<LockOutlined className="site-form-item-icon" />}
      placeholder="123456"
      onChange={verificationResult}
    />
  );
}

// class BeforeCodeInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       code: "",
//     };
//   }
//   /**
//    * 判断输入的验证码是否与生成的验证码是否相同事件
//    * @param {*} e
//    * @returns
//    */
//   verificationResult = (e) => {
//     // console.log(e.target);
//     // debugger;
//     let enteredCode = e.target.value;
//     console.log("已输入的验证码:", enteredCode);
//     if (enteredCode.length === 6) {
//       //输入字符长度为6时，开始判断
//       let { code } = this.props;
//       if (enteredCode === code) {
//         setTimeout(() => {
//           return message.success("输入正确", 0.5, () => {
//             console.log("ok");
//           });
//         }, 100);
//         return;
//       } else {
//         return message.error("您输入的验证码有误", 0.5, () => {
//           e.target.value = "";
//         });
//       }
//     }
//   };

//   render() {
//     return (
//       <Input
//         prefix={<LockOutlined className="site-form-item-icon" />}
//         placeholder="123456"
//         onChange={this.verificationResult}
//       />
//     );
//   }
// }

export default BeforeCodeInput;
