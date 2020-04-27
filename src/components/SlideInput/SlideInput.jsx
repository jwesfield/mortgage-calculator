import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

function SlideInput() {
    
    const [inputValue, setInputValue] = useState(1);

    function onChange(value){
        setInputValue(value);
    }


  return (
    <div>
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  );
}

export default SlideInput;