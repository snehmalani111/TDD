import React, { useState } from 'react';

function StringCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const add = (numbers) => {
    if (!numbers) return 0;

    const nums = numbers.split(',').map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setResult(add(input));
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} aria-label="Input" />
      <button onClick={handleClick}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default StringCalculator;