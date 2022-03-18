//antd
import { Layout, Avatar, Image, Menu, Dropdown, message } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
const { Header, Content, Sider, Footer } = Layout;

function MainHeader(params) {
  const navigate = useNavigate();
  const onClick = ({ key }) => {
    // message.info(`Click on item ${key}`);
    if (key == 1) {
      navigate("/");
    }
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">退出</Menu.Item>
      {/* <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item> */}
    </Menu>
  );
  return (
    <Header className="header" style={{ color: "#fff" }}>
      <div className="logo" />
      人事办公自动登录系统
      {/* <Avatar
        src={
          <Image
            src="../../../public/avatar.png"
            style={{
              width: 32,
            }}
          />
        }
      /> */}
      <div style={{ textAlign: "right", margin: " -60px 0 0 0" }}>
        <Dropdown overlay={menu}>
          <Avatar
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
            icon={<UserOutlined />}
          ></Avatar>
        </Dropdown>
      </div>
    </Header>
  );
}
export default MainHeader;
