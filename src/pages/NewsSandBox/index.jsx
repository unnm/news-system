import React from "react";
import "./index.css";
import SideMenu from "../../components/SideMenu";
import TopHeader from "../../components/TopHeader";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import UserList from "./UserManage/UserList";
import RoleList from "./RightManage/RoleList";
import RightList from "./RightManage/RightList";
import NoPermission from "./NoPermission/NoPermission";
import { Layout } from "antd";

const { Content } = Layout;

export default function NewsSandBox() {
  return (
    <Layout>
      <SideMenu />
      <Layout className="site-layout">
        <TopHeader />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/user-manage/list" component={UserList} />
            <Route path="/right-manage/role/list" component={RoleList} />
            <Route path="/right-manage/right/list" component={RightList} />
            <Redirect exact from="/" to="/home" />
            <Route path="*" component={NoPermission} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
