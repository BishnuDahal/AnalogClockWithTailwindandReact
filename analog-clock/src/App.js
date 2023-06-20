import React, { useEffect, useState } from 'react';
import './App.css';

const Clock = () => {
  const [rotation, setRotation] = useState({
    hour: 0,
    minute: 0,
    second: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const second = now.getSeconds();

      const hrRotation = 30 * hour + minute / 2;
      const minRotation = 6 * minute;
      const secRotation = 6 * second;

      setRotation({
        hour: hrRotation,
        minute: minRotation,
        second: secRotation
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='relative'>
      <div className="clock-container relative m-auto h-[18vw] w-[18vw] bg-no-repeat bg-contain">
        <div className="hour-hand absolute bg-black rounded-lg origin-bottom" style={{ transform: `rotate(${rotation.hour}deg)` }}></div>
        <div className="minute-hand absolute bg-black rounded-lg origin-bottom " style={{ transform: `rotate(${rotation.minute}deg)` }}></div>
        <div className="second-hand absolute bg-black rounded-lg origin-bottom " style={{ transform: `rotate(${rotation.second}deg)` }}></div>
      </div>
      <p className="flex justify-center uppercase text-[#323232] text-2xl font-bold font-Jost">{rotation.hour}:{rotation.minute}:{rotation.second}</p>
    </div>

  );
};

export default Clock;
