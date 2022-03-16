const patterns = {
  pwd: "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$",
};
const patternMsgs = {
  pwd: "密码长度最小为6，最大为20，由字母和数字组成",
};

export { patternMsgs, patterns };
