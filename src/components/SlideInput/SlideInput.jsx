import React, { useState, useEffect } from 'react';
import './SlideInput.css';
import { Slider, InputNumber, Row, Col, Typography, Divider } from 'antd';
const { Text } = Typography;

function SlideInput(props) {

  function onChange(value) {
    props.setInputValue(value);
    localStorage.setItem(props.storage, value);
  }

  function onChangePercent(value) {
    props.setPercent(value);
    props.setInputValue(props.home * (value / 100));
    localStorage.setItem(props.storage + '_percent', value);
    localStorage.setItem(props.storage, props.home * (value / 100));
  }

  return (
    <div>
      <Row>
        <Col span={4}>
          <Text strong>{props.storage}</Text>
        </Col>
        <Col span={8}>
          <Slider
            min={props.percent ? 0 : props.min}
            max={props.percent ? 10 : props.max}
            step={props.percent ? 0.5 : props.step}
            onChange={props.percent ? onChangePercent : onChange}
            value={props.percent ? props.percent : props.inputValue}
          />
        </Col>
        <Col span={3}>
          <InputNumber
            className="inputCurrency"
            min={props.min || 0}
            max={props.max || 100}
            step={props.step || 1}
            style={{ margin: '0 16px' }}
            value={props.inputValue}
            onChange={onChange}
            formatter={cFormatter}
            parser={cParser}
            disabled={!props.boxes[0]}
          />
        </Col>
        <Col span={3}>
          {props.boxes[1] == true ? (
            <InputNumber
              min={0}
              max={10}
              step={0.5}
              style={{ margin: '0 16px' }}
              value={props.percent}
              onChange={onChangePercent}
              formatter={pFormatter}
              parser={pParser}
            />
          ) : null}
        </Col>
      </Row>
      <Divider type="horizontal" />
    </div>
  );
}

function pFormatter(value) {
  return `${value}%`;
}
function pParser(value) {
  return value.replace('%', '');
}

function cFormatter(value) {
  return `₪ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function cParser(value) {
  return value.replace(/\₪\s?|(,*)/g, '');
  //return value.replace('₪', '');
}

export default SlideInput;
