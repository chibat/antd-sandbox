import { Button, DatePicker, version, PageHeader, Affix } from 'antd';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Affix offsetTop={0.1}>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="Title"
          subTitle="This is a subtitle"
          style={{ zIndex: 100, background: "#eeeeee" }}
        />
      </Affix>
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
