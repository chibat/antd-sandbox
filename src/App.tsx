import { Button, DatePicker, version, PageHeader, Affix, Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          Content

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
          aaa<br />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

function Home() {
  return (
    <>
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>

      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
