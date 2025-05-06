import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function Hello() {
  const nameList = ['Fanni', 'Évi', 'Edit', 'Hajni'];

  return nameList.map((name, index) => <div key={index}> Szia {name} !!</div>);
}

export default Hello;
