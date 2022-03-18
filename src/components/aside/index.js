// 路由
import Router from "../../router/index";
import { Link, useNavigate } from "react-router-dom";
// antd
import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
const { SubMenu } = Menu;
const { Sider } = Layout;

function Aside(props) {
  const [SelectedKeys, setSelectedKeys] = useState(["/main/user/list"]); //默认选中
  const [OpenKey, setOpenKey] = useState(["/main/user"]); //默认打开

  /**菜单栏点击事件 */
  const menuClick = ({ item, key, keyPath, domEvent }) => {
    console.log(key, keyPath);
    menuHighLight(keyPath); //菜单栏高光
  };
  /**菜单高光事件 */
  const menuHighLight = (keyPath) => {
    let arr = [];
    setSelectedKeys(arr.push(keyPath[0]));
    setOpenKey(arr.push(keyPath[1]));
  };
  /**只展开当前父级菜单事件 */

  // const onOpenChange = (keys) => {
  //   console.log(123);
  //   // console.log(keys);
  //   // const latestOpenKey = keys.key;
  //   // console.log(latestOpenKey);
  //   // if (rootSubmenuKeys === latestOpenKey) {
  //   //   setOpenKey(keys);
  //   // } else {
  //   //   setOpenKey(latestOpenKey ? [latestOpenKey] : []);
  //   // }
  // };
  /**无子集菜单事件 */
  const routerMenu = (item) => {
    // console.log(item);
    const { key, icon, title } = item;

    return (
      <Menu.Item key={key} icon={icon}>
        <Link to={key}>{title}</Link>
      </Menu.Item>
    );
  };

  /**子级菜单事件 */
  const routerSubMenu = (item) => {
    // console.log(item);
    const { key, icon, title, children } = item;

    return (
      <SubMenu key={key} icon={icon} title={title}>
        {children &&
          children.map((childrenItem) => {
            // console.log(childrenItem);
            return childrenItem.children && childrenItem.children > 0
              ? routerSubMenu(childrenItem)
              : routerMenu(childrenItem);
          })}
      </SubMenu>
    );
  };

  useEffect(() => {});

  return (
    <Sider className="site-layout-background" width={200}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={SelectedKeys}
        defaultOpenKeys={OpenKey}
        style={{ height: "100%" }}
        onClick={menuClick}
        // onOpenChange={onOpenChange}
      >
        {Router &&
          Router.map((item) => {
            return item.children && item.children.length > 0
              ? routerSubMenu(item)
              : routerMenu(item);
          })}
      </Menu>
    </Sider>
  );
}
export default Aside;
