import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SpinBox, SpinBoxProps } from './stories/SpinBox';
import { Button } from './stories/Button';


function App() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState<SpinBoxProps["size"]>('small');

  const onPlusClick = () => {
    setCount(count + 1);
  }

  const onMinusClick = () => {
    setCount(count - 1);
  }

  const onSmallClick = () => {
    setSize('small');
  }

  const onMediumClick = () => {
    setSize('medium');
  }

  const onLargeClick = () => {
    setSize('large');
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <label>SpinBox</label>
      <div>
        <Button label='small' onClick={onSmallClick}></Button>
        <Button label='medium' onClick={onMediumClick}></Button>
        <Button label='large' onClick={onLargeClick}></Button>
        <SpinBox value={count} onPlusClick={onPlusClick} onMinusClick={onMinusClick} size={size}></SpinBox>
      </div>
    </div>
  );
}

export default App;
