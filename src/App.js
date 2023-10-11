import React, { useState } from 'react';
import  * as math  from 'mathjs';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {

  const [text,setText] = useState('');
  const [result,setResult] = useState('');

  const addToText = (val) => {
    setText([...text, val ])
    console.log(val)
  }

  const resetInput = () => {
    setText('')
    setResult('')
  }

  const calculateResult = () => {
    const input = text.join('') //remove comma

    setResult(math.evaluate(input));
  }
  
  const buttonColor = "#f2a33c";
  return (
    <React.Fragment>
      <div className='App'>
        <div className="d-flex justify-content-center align-items-center">
          <div className='calc-wrapper mt-2'>
            <Input text={text} result={result}/>
              <div className='row'>
                <Button symbol='7' handleClick={addToText}/>
                <Button symbol="8" handleClick={addToText}/>
                <Button symbol="9" handleClick={addToText}/>
                <Button symbol="/" color={buttonColor} handleClick={addToText}/>
              </div>
              <div className='row'>
                <Button symbol="4" handleClick={addToText}/>
                <Button symbol="5" handleClick={addToText}/>
                <Button symbol="6" handleClick={addToText}/>
                <Button symbol="*" color={buttonColor} handleClick={addToText}/>
              </div>
              <div className='row'>
                <Button symbol="1" handleClick={addToText}/>
                <Button symbol="2" handleClick={addToText}/>
                <Button symbol="3" handleClick={addToText}/>
                <Button symbol="+" color={buttonColor} handleClick={addToText}/>
              </div>
              <div className='row'>
                <Button symbol="0" handleClick={addToText}/>
                <Button symbol="." handleClick={addToText}/>
                <Button symbol="=" handleClick={calculateResult}/>
                <Button symbol="-" color={buttonColor} handleClick={addToText}/>
              </div>
                <Button symbol="clear" color="red" handleClick={resetInput}/>
          </div>
        
        </div>
      </div>
      
    </React.Fragment>
    
  );
}

export default App;
