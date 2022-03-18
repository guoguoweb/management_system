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
  SettingOutlined,
  UnorderedListOutlined,
  CiCircleOutlined,
  CiOutlined,
} from "@ant-design/icons";
const router = [
  {
    title: "控制台",
    icon: <SettingOutlined />,
    key: "/main",
  },
  {
    title: "用户管理",
    icon: <UserAddOutlined />,
    key: "/main/user",
    children: [
      {
        key: "/main/user/list",
        title: "用户列表",
        icon: <UnorderedListOutlined />,
      },
      {
        key: "/main/user/add",
        title: "添加用户",
        icon: <UserAddOutlined />,
      },
    ],
  },
  {
    title: "部门管理",
    icon: <TeamOutlined />,
    key: "/main/navigation",
    children: [
      {
        key: "/main/navigation/list",
        title: "部门列表",
        icon: <UnorderedListOutlined />,
      },
      {
        key: "/main/navigation/menu",
        title: "部门添加",
        icon: <UserAddOutlined />,
      },
    ],
  },
  {
    title: "职位管理",
    icon: <UsergroupAddOutlined />,
    key: "/main/entry",
  },
  {
    title: "员工管理",
    icon: <UserSwitchOutlined />,
    key: "/main/staff",
  },
  {
    title: "公共管理",
    icon: <DeploymentUnitOutlined />,
    key: "/main/common",
  },
  {
    title: "下载中心",
    icon: <CloudDownloadOutlined />,
    key: "/main/download",
  },
  {
    title: "考勤",
    icon: <CreditCardOutlined />,
    key: "/main/attendance",
    children: [
      {
        key: "/main/attendance/leave",
        title: "请假",
        icon: <CiCircleOutlined />,
      },
      { key: "/main/attendance/overtime", title: "加班", icon: <CiOutlined /> },
    ],
  },
];

export default router;
