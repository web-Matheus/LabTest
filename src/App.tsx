import React, { useState } from 'react';
import Tst from './tst';
import Count from './components/Count'
import './App.css';

function App() {
  const [list,setList] = useState(['matheus','gust','santos'])

  function addList(){
    setList(state=>[...state,'novo'])
  }
  return (

    <div className="App">
     <h1>
       <Count/>
       </h1> 

     {/* <h1>Learn typescript and react testing libriby</h1>
     <input placeholder='novo item'/>
    <button onClick={addList}>addToList</button>
     <ul>
       {list.map(item=><li key={item}>{item}</li>)}
     </ul>
     <Tst name="type" age={20}/> */}
    </div>
  );
}

export default App;
