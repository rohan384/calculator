import React from 'react';

const Keypad = ({
  setCurrentOperand,
  setPreviousOperand,
  setOperation,
  operation,
  currentOperand,
  previousOperand,
}) => {
  const handleNumberClick = (number) => {
    if (operation === null) {
      setCurrentOperand(currentOperand + number);
    } else {
      setPreviousOperand(currentOperand);
      setCurrentOperand(number);
      setOperation(null);
    }
  };

  const handleOperationClick = (operation) => {
    if (currentOperand === '') return;
    if (previousOperand !== '') calculateResult();
    setOperation(operation);
  };

  const handleClearClick = () => {
    setCurrentOperand('');
    setPreviousOperand('');
    setOperation(null);
  };

  const handleEqualsClick = () => {
    calculateResult();
  };

  const calculateResult = () => {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case '+':
        setCurrentOperand(prev + current);
        break;
      case '-':
        setCurrentOperand(prev - current);
        break;
      case '*':
        setCurrentOperand(prev * current);
        break;
      case '/':
        setCurrentOperand(prev / current);
        break;
      default:
        break;
    }
    setPreviousOperand('');
    setOperation(null);
  };

  return (
    <div className="keypad">
      <button onClick={() => handleClearClick()}>C</button>
      <button onClick={() => handleNumberClick('7')}>7</button>
      <button onClick={() => handleNumberClick('8')}>8</button>
      <button onClick={() => handleNumberClick('9')}>9</button>
      <button onClick={() => handleOperationClick('+')}>+</button>
      <button onClick={() => handleNumberClick('4')}>4</button>
      <button onClick={() => handleNumberClick('5')}>5</button>
      <button onClick={() => handleNumberClick('6')}>6</button>
      <button onClick={() => handleOperationClick('-')}>-</button>
      <button onClick={() => handleNumberClick('1')}>1</button>
      <button onClick={() => handleNumberClick('2')}>2</button>
      <button onClick={() => handleNumberClick('3')}>3</button>
      <button onClick={() => handleOperationClick('*')}>*</button>
      <button onClick={() => handleNumberClick('0')}>0</button>
      <button onClick={() => handleClearClick()}>.</button>
      <button onClick={() => handleEqualsClick()}>=</button>
      <button onClick={() => handleOperationClick('/')}>/</button>
    </div>
  );
};

export default Keypad;