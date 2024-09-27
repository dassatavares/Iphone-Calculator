import React, { MouseEvent, useState, useRef } from 'react';
import Image from 'next/image';


import style from './Calculator.module.css';

import phone from '../../../../images/iPhone.png';

export default function Calculator() {

  const [input, setInput] = useState("");
  const [count, setCount] = useState("");

  const inputBottom = useRef<HTMLInputElement>(null); 

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const inputValue = (e.target as HTMLButtonElement).name;
    
    if (input.length < 15) {
      const newInput = input.concat(inputValue);
      setInput(newInput);
  
      if (newInput.length > 10) {''
        if (inputBottom.current) {
          inputBottom.current.style.fontSize = '1em';
        }
      } else if (newInput.length > 7) {
        if (inputBottom.current) {
          inputBottom.current.style.fontSize = '1.5em';
        }
      } else {
        if (inputBottom.current) {
          inputBottom.current.style.fontSize = '2em';
        }
      }
    }
  };
  
  const Backspace = () => {
    const newInput = input.slice(0, -1); 
    setInput(newInput); 
  
    if (newInput.length > 10) {
      if (inputBottom.current) {
        inputBottom.current.style.fontSize = '1em';
      }
    } else if (newInput.length > 7) {
      if (inputBottom.current) {
        inputBottom.current.style.fontSize = '1.5em';
      }
    } else {
      if (inputBottom.current) {
        inputBottom.current.style.fontSize = '2em';
      }
    }
  };
  

  const Clear = () => {
    setInput("");
    setCount("");
  };

  const Calculate = () => {
    try {
      setInput(eval(input).toString());
      setCount(input);
    } 
    
    catch (err) {
      setInput('Error');
      setCount('Error');
    }
  };

  return (
    <div className="App">
      <header className="App-header">

        <div className={style.calculator}>

          <Image src={phone} alt="My Image" className={style.background} />

          <div className={style.input}>
            <input type="text" className={style.inputTop} value={count} readOnly={true} />
            <input type="text" className={style.inputBottom} value={input} readOnly={true} ref={inputBottom} maxLength={1} />
          </div>

          <div className={style.buttonGroup}>

            <div className={style.group}>
              <button onClick={Clear} className={`${style.button} ${style.buttonOrange}`}>
                C
              </button>
              <button onClick={Backspace} className={`${style.button} ${style.buttonOrange}`}>
                CC
              </button>
              <button onClick={handleClick} name="%" className={`${style.button} ${style.buttonCyan}`}>
                %
              </button>
              <button onClick={handleClick} name="/" className={`${style.button} ${style.buttonCyan}`}>
                /
              </button>
            </div>

            <div className={style.group}>
              <button onClick={handleClick} name="7" className={style.button}>
                7
              </button>
              <button onClick={handleClick} name="8" className={style.button}>
                8
              </button>
              <button onClick={handleClick} name="9" className={style.button}>
                9
              </button>
              <button onClick={handleClick} name="+" className={`${style.button} ${style.buttonCyan}`}>
                +
              </button>
            </div>

            <div className={style.group}>
              <button onClick={handleClick} name="4" className={style.button}>
                4
              </button>
              <button onClick={handleClick} name="5" className={style.button}>
                5
              </button>
              <button onClick={handleClick} name="6" className={style.button}>
                6
              </button>
              <button onClick={handleClick} name="-" className={`${style.button} ${style.buttonCyan}`}>
                -
              </button>
            </div>

            <div className={style.group}>
              <button onClick={handleClick} name="1" className={style.button}>
                1
              </button>
              <button onClick={handleClick} name="2" className={style.button}>
                2
              </button>
              <button onClick={handleClick} name="3" className={style.button}>
                3
              </button>
              <button onClick={handleClick} name="*" className={`${style.button} ${style.buttonCyan}`}>
                x
              </button>
            </div>
            
            <div className={style.group}>
              <button onClick={handleClick} name="0" className={`${style.button} ${style.zero}`}>
                0
              </button>
              <button onClick={handleClick} name="." className={style.button}>
                .
              </button>
              <button onClick={Calculate} type="submit" className={`${style.button} ${style.buttonCyan}`}>
                =
              </button>
            </div>
            
          </div>

          <div className={style.background}></div>

        </div>

      </header>
    </div>
  );
}