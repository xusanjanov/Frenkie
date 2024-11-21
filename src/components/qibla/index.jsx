import React, { useState } from 'react';

const NamozVaQibla = () => {
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState(null);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const qiblaDirection = calculateQiblaDirection(latitude, longitude);
      setDirection(qiblaDirection);
    });
  };

  return (
    <div>
      <h1>Namoz va Qibla</h1>
      <button onClick={getUserLocation}>Qibla Yo'nalishini Aniqlash</button>
      <p>Qibla yo'nalishi: {direction ? `${direction}°` : 'Aniqlanmagan'}</p>
      <p>Aytilgan zikrlar soni: {count}</p>
      <button onClick={increaseCount}>Zikr qilish</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default NamozVaQibla;
