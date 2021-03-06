import React, { useState } from 'react';
import './App.css';

// component manages itself without external API
// not useful for real applications,
// but just for the sake of demonstrating uncontrolled/controlled components

import StandaloneTextInput from './components/Controlled/StandaloneTextInput';

// components managed from outside (e.g. App component)

import TextInput from './components/Controlled/TextInput';
import Select from './components/Controlled/Select';
import NumberInput from './components/Controlled/NumberInput';
import Checkbox from './components/Controlled/Checkbox';
import Radio from './components/Controlled/Radio';

const App2 = () => {
  const [textInputValue, setTextInputValue] = useState('Hello World');
  const [selectValue, setSelectValue] = useState('grapefruit');
  const [numberInputValue, setNumberInputValue] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [radioValue, setRadioValue] = useState('small');

  const handleTextInputChange = value => {
    setTextInputValue(value);
  };

  const handleSelectChange = value => {
    setSelectValue(value);
  };

  const handleNumberInputChange = value => {
    setNumberInputValue(value);
  };

  const handleCheckboxChange = value => {
    setCheckboxValue(value);
  };

  const handleRadioChange = value => {
    setRadioValue(value);
  };

  return (
    <div>
      {/* Uncontrolled and Controlled Input Example, State/Functions managed within Component */}
      <div>
        <StandaloneTextInput />
      </div>

      <hr />

      {/* Different Controlled Inputs, State/Callbacks managed in App Components */}
      <div>
        <TextInput
          value={textInputValue}
          onTextInputChange={handleTextInputChange}
        >
          Type a text
        </TextInput>
        <p>
          <strong>Result:</strong> {textInputValue}
        </p>
      </div>

      <hr />

      <div>
        <Select
          value={selectValue}
          onSelectChange={handleSelectChange}
        >
          Choose a fruit
        </Select>
        <p>
          <strong>Result:</strong> {selectValue}
        </p>
      </div>

      <hr />

      <div>
        <NumberInput
          value={numberInputValue}
          onNumberInputChange={handleNumberInputChange}
          min={-1}
          max={3}
        >
          Choose a number
        </NumberInput>
        <p>
          <strong>Result:</strong> {numberInputValue}
        </p>
      </div>

      <hr />

      <div>
        <Checkbox
          value={checkboxValue}
          onCheckboxChange={handleCheckboxChange}
        >
          Check the box
        </Checkbox>
        <p>
          <strong>Result:</strong> {checkboxValue.toString()}
        </p>
      </div>

      <hr />

      <div>
        <Radio value={radioValue} onRadioChange={handleRadioChange}>
          Choose a size
        </Radio>
        <p>
          <strong>Result:</strong> {radioValue}
        </p>
      </div>
    </div>
  );
};

export default App2;


