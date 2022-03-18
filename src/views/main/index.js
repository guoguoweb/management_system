import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
// antd
import { Layout, Menu } from "antd";
import {
  // UserOutlined,
  // LaptopOutlined,
  // NotificationOutlined,
  CreditCardOutlined,
  CloudDownloadOutlined,
  UserAddOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  UserSwitchOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";

// css
import "./index.scss";
// component
import Aside from "../../components/aside/index";
import MainContent from "../../components/content/index";
import User from "../user/index";
import MainHeader from "../../components/header/index";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
function Main(props) {
  return (
    <Fragment>
      <Layout>
        <MainHeader />

        <Content style={{ padding: "0 50px" }}>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            {/* 侧边栏 */}
            <Aside />
            {/* 内容区 */}
            <Content
              style={{
                padding: "0 24px",
                margin: "0 24px",
                minHeight: 280,
              }}
            >
              <MainContent />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          xxxx.xxxx ©2022 Created by 前端小白熊
        </Footer>
      </Layout>
    </Fragment>
    // <Fragment>
    //   <Layout className="main_layout">
    //     <Header
    //       className="header"
    //       style={{
    //         color: "#fff",
    //       }}
    //     >
    //       <div className="logo" />
    //       人事办公自动登录系统
    //     </Header>
    //     <Content style={{ padding: "0 50px" }}>
    //       <Layout
    //         className="site-layout-background"
    //         style={{ padding: "24px 0" }}
    //       >
    //         <Sider
    //           className="site-layout-background"
    //           width={260}
    //           style={{ height: "65vh" }}
    //         >
    //           <Menu
    //             mode="inline"
    //             defaultSelectedKeys={["1"]}
    //             defaultOpenKeys={["sub1"]}
    //             style={{ height: "100%" }}
    //           >
    //             <SubMenu key="sub1" icon={<UserAddOutlined />} title="用户管理">
    //               {/*  <Menu.Item key="1">option1</Menu.Item>
    //               <Menu.Item key="2">option2</Menu.Item>
    //               <Menu.Item key="3">option3</Menu.Item>
    //               <Menu.Item key="4">option4</Menu.Item> */}
    //             </SubMenu>
    //             <SubMenu key="sub2" icon={<TeamOutlined />} title="部门管理">
    //               {/* <Menu.Item key="5">option5</Menu.Item>
    //               <Menu.Item key="6">option6</Menu.Item>
    //               <Menu.Item key="7">option7</Menu.Item>
    //               <Menu.Item key="8">option8</Menu.Item> */}
    //             </SubMenu>
    //             <SubMenu
    //               key="sub3"
    //               icon={<UsergroupAddOutlined />}
    //               title="职位管理"
    //             >
    //               {/*  <Menu.Item key="9">option9</Menu.Item>
    //               <Menu.Item key="10">option10</Menu.Item>
    //               <Menu.Item key="11">option11</Menu.Item>
    //               <Menu.Item key="12">option12</Menu.Item> */}
    //             </SubMenu>
    //             <SubMenu
    //               key="sub4"
    //               icon={<UserSwitchOutlined />}
    //               title="员工管理"
    //             >
    //               {/*  <Menu.Item key="9">option9</Menu.Item>
    //               <Menu.Item key="10">option10</Menu.Item>
    //               <Menu.Item key="11">option11</Menu.Item>
    //               <Menu.Item key="12">option12</Menu.Item> */}
    //             </SubMenu>
    //             <SubMenu
    //               key="sub5"
    //               icon={<DeploymentUnitOutlined />}
    //               title="公共管理"
    //             >
    //               {/*  <Menu.Item key="9">option9</Menu.Item>
    //               <Menu.Item key="10">option10</Menu.Item>
    //               <Menu.Item key="11">option11</Menu.Item>
    //               <Menu.Item key="12">option12</Menu.Item> */}
    //             </SubMenu>
    //             <SubMenu
    //               key="sub6"
    //               icon={<CloudDownloadOutlined />}
    //               title="下载中心"
    //             >
    //               {/*  <Menu.Item key="9">option9</Menu.Item>
    //               <Menu.Item key="10">option10</Menu.Item>
    //               <Menu.Item key="11">option11</Menu.Item>
    //               <Menu.Item key="12">option12</Menu.Item> */}
    //             </SubMenu>
    //             <SubMenu key="sub7" icon={<CreditCardOutlined />} title="考勤">
    //               <Menu.Item key="100">请假</Menu.Item>
    //               <Menu.Item key="101">加班</Menu.Item>
    //             </SubMenu>
    //           </Menu>
    //         </Sider>
    //         <Content style={{ padding: "0 24px", minHeight: 280 }}>
    //           Content
    //         </Content>
    //       </Layout>
    //     </Content>
    //     <Footer style={{ textAlign: "center" }}>
    //       xxxx ©2022 Created by 前端小白熊
    //     </Footer>
    //   </Layout>
    // </Fragment>
  );
}

export default Main;
