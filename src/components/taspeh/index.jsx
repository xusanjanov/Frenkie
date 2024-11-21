import React, { useState } from 'react';

const Tasbeh = () => {
  const [count, setCount] = useState(0);
  
  const increaseCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Tasbeh (Zikr) - Allohning ismlarini aytish</h1>
      <p>Aytilgan zikrlar soni: {count}</p>
      <button onClick={increaseCount}>Zikr qilish</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Tasbeh;
