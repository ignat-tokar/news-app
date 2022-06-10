import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const src = "https://content.guardianapis.com/search?page=2&q=debate&api-key=test";

function App() {  

  axios.get(src).then(data => {
    console.log(data);
  });
  
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
