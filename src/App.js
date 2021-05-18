import './App.css';
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(null);
  const [numbers, setNumbers] = useState([]);

  const onChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setNumber(e.target.value)
    }
  }

  const onSubmit = () => {
    if (number) {
      let result = [];  

      for (let i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
          result.push('FizzBuzz');
        } else if (i % 3 == 0) {
          result.push('Fizz');
        } else if (i % 5 == 0) {
          result.push('Buzz');
        } else {
          result.push(i);        
        }
      }

      setNumbers(result)
    }
  }

  return (
    <div className="App">
      <div>
        <input type="text" value={number} onChange={onChange} />
        <button onClick={onSubmit}>Submit</button>
      </div>
      <div className="numbers">
        {numbers.length > 0 && numbers.map(v => (
          <div>
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
