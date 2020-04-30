import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col, Divider, Statistic } from 'antd';
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
  const [downpayment, setDownpayment] = useState(localStorage.getItem('downpayment') || 0);
  const [mortgage, setMortgage] = useState(localStorage.getItem('mortgage') || 0);
  const [rate, setRate] = useState(localStorage.getItem('rate') || 0);
  const [years, setYears] = useState(localStorage.getItem('years') || 0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);


  useEffect(() => {
    calculateMortgague(mortgage,rate,years);
  }, []);


function homeChanged(value){
  setHome(value);
  setTax(value * (tax_percent / 100))
  setAgent(value * (agent_percent / 100))
  setLawyer(value * (lawyer_percent / 100))
}

function mortgageChanged(value){
  setMortgage(value);
  calculateMortgague(value,rate,years);
}

function rateChanged(value){
  setRate(value);
  calculateMortgague(mortgage,value,years)
}

function yearsChanged(value){
  setYears(value);
  calculateMortgague(mortgage,rate,value)
}

function calculateMortgague(mortgage,rate,years){
  var r = rate / 12 / 100;
  var n = years * 12;
  var M = mortgage * ((r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1));
  setMonthlyPayment(M)
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
        title={'Home Price'}
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
        title={'Purchase Tax'}
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
        title={'Agent'}
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
        title={'Lawyer'}
      />
      <SlideInput
        boxes={[true, false]}
        inputValue={other}
        setInputValue={setOther}
        min={0}
        max={200000}
        step={1000}
        storage={'other'}
        title={'Other'}
      />
      <Statistic title="Total Home Cost" value={getTotal(home,tax,lawyer,agent,other)} prefix={"₪"} />
      <Divider type="horizontal" />
      <SlideInput
        boxes={[true, false]}
        inputValue={downpayment}
        setInputValue={setDownpayment}
        min={0}
        max={4000000}
        step={10000}
        storage={'downpayment'}
        title={'Down Payment'}
      />
        <SlideInput
        boxes={[true, false]}
        inputValue={mortgage}
        setInputValue={mortgageChanged}
        min={0}
        max={3000000}
        step={10000}
        storage={'mortgage'}
        title={'Mortgage Amount'}
      />
      <SlideInput
        boxes={[false, true]}
        inputValue={rate}
        setInputValue={rateChanged}
        percent={rate}
        setPercent={rateChanged}
        min={0}
        max={7}
        step={0.1}
        storage={'rate'}
        percentOnly={true}
        title={'Mortgage Interest Rate'}
      />
      <SlideInput
        boxes={[true, false]}
        inputValue={years}
        setInputValue={yearsChanged}
        min={0}
        max={40}
        step={1}
        storage={'years'}
        title={'Loan Term'}
      />
      
      <Row>
        <Col span={6}>
        <Statistic title="Monthly Payment" value={Math.round(monthlyPayment)} prefix={"₪"} />
        </Col>
        <Col span={6}>
        <Statistic title="Annual Payment" value={Math.round(monthlyPayment * 12)} prefix={"₪"} />

        </Col>
        <Col span={6}>
        <Statistic title="Total Interest Paid" value={Math.round((monthlyPayment * years * 12) - mortgage)} prefix={"₪"} />

        </Col>
        <Col span={6}>
        <Statistic title="Total Paid" value={Math.round(monthlyPayment * years * 12)} prefix={"₪"} />

        </Col>
      </Row>
      <Divider type="horizontal" />
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
