import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import SlideInput from './components/SlideInput/SlideInput'
function App() {
  return (
    <div className="App">
      <SlideInput />

    </div>
  );
}

export default App;
