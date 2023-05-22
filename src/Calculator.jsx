import { useState } from 'react'
import { evaluate } from 'mathjs';

export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = [
  [7,8,9,'+'],
  [4,5,6,'-'],
  [1,2,3,'*'],
  [0,'.','/','=']
];
export const operations = ['+','-','*','/'];
export const equalSign = '=';

export const Calculator = () => {
  const [value, setValue] = useState('');
  const createHandleClick = operation => () => {
    console.log(value, operation);
    if (operation === '=') setValue(evaluate(value));
    else{
      setValue(value.toString().concat(operation));
    }
  }

  return (
    <section>
      <h1>Calculator</h1>
      <input value={value} readOnly style={{width:'92px'}}/>
      <div role='grid'>
        {rows.map((row, index) => (
          <div key={index} role='row'>
            {row.map(op =>
              <button onClick={createHandleClick(op)} key={op} style={{width:'25px'}}>{op}</button>
            )}
          </div>
        ))}
        <button onClick={() => setValue('')} style={{width:'100px'}}>Clear</button>
      </div>
    </section>
  )
};