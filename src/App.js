import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker, Divider, Statistic } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import SlideInput from './components/SlideInput/SlideInput';
function App() {

  const [home, setHome] = useState(localStorage.getItem('home') || 0);
  const [tax, setTax] = useState(localStorage.getItem('tax') || 0);
  const [tax_percent, setTax_percent] = useState(localStorage.getItem('tax_percent') || 0)
  const [agent, setAgent] = useState(localStorage.getItem('agent') || 0);
  const [agent_percent, setAgent_percent] = useState(localStorage.getItem('agent_percent') || 0);
  const [lawyer, setLawyer] = useState(localStorage.getItem('lawyer') || 0);
  const [lawyer_percent, setLawyer_percent] = useState(localStorage.getItem('lawyer_percent') || 0);
  const [other, setOther] = useState(localStorage.getItem('other') || 0);

  const [downpayment, setDownpayment] = useState(
    localStorage.getItem('downpayment') || 1
  );
  const [mortgage, setMortgage] = useState(
    localStorage.getItem('mortgage') || 1
  );
  const [rate, setRate] = useState(localStorage.getItem('rate') || 1);
  const [years, setYears] = useState(localStorage.getItem('years') || 1);

function homeChanged(value){
  setHome(value);
  setTax(value * (tax_percent / 100))
  setAgent(value * (agent_percent / 100))
  setLawyer(value * (lawyer_percent / 100))
}

  return (
    <div className="App">
      <Divider type="horizontal" />
      <SlideInput
        boxes={[true, false]}
        inputValue={home}
        setInputValue={homeChanged}
        min={1500000}
        max={4000000}
        step={50000}
        storage={'home'}
      />

      <SlideInput
        home={home}
        boxes={[false, true]}
        inputValue={tax}
        setInputValue={setTax}
        min={0}
        max={4000000}
        step={0.5}
        storage={'tax'}
        percent={tax_percent}
        setPercent={setTax_percent}
      />
      <SlideInput
        home={home}
        boxes={[false, true]}
        inputValue={agent}
        setInputValue={setAgent}
        min={0}
        max={4000000}
        step={0.5}
        storage={'agent'}
        percent={agent_percent}
        setPercent={setAgent_percent}
      />
      <SlideInput
        home={home}
        boxes={[false, true]}
        inputValue={lawyer}
        setInputValue={setLawyer}
        min={0}
        max={4000000}
        step={0.5}
        storage={'lawyer'}
        percent={lawyer_percent}
        setPercent={setLawyer_percent}
      />
      <SlideInput
        boxes={[true, false]}
        inputValue={other}
        setInputValue={setOther}
        min={0}
        max={200000}
        step={1000}
        storage={'other'}
      />
      <Statistic title="Total" value={getTotal(home,tax,lawyer,agent,other)} prefix={"$"} />

    </div>
  );
}


function getTotal(home,tax,lawyer,agent,other){
  var res = 0 ;
  try {
    res = parseInt(home) + parseInt(tax) + parseInt(lawyer) + parseInt(agent) + parseInt(other)
  } catch(e){

  }
return res;
}
export default App;

//https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
