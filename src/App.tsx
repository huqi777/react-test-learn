import React from 'react';
import './App.css';
import Index from './pages/index'

function App() {
  const handle = (name: String) => {
    console.log('zuihaos ', name)
    setTimeout(() => {
      Promise.resolve('name')
    }, 5000);
  }
  // handle('123').then((res: any) => {
  //   console.log(res);
  // })
  return (
    <div className="App">
      <Index></Index>
    </div>
  );
}

export default App;
