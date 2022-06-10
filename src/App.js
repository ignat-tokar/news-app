import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

// const src = "https://content.guardianapis.com/search?page=2&q=debate&api-key=test";
// axios.get(src).then(data => {
//   console.log(data);
// });

function App() {

  const [result, setResult] = useState(0);
  const [result2, setResult2] = useState(0);

  useEffect(()=>{
    setResult2(result*2);
  }, [result]);

  return (
    <div className="App">
      <h1>Result = {result}</h1>
      <h1>Result * 2 = {result2}</h1>
      <button 
        onClick={()=>{
          setResult(result+1);
        }}
      >Plus Result</button>
    </div>
  );
}

export default App;
