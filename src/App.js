import {useState, useEffect} from 'react';
import { getArticlesByWord } from './api';
import './App.css';

function App() {

  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    getData('debates');
  },[]);

  const getData = async (word) => {
    const data = await getArticlesByWord(word);
    setArticles(data.data.response.results);
  }

  return (
    <div className="App">
      {articles.map(article => {
        return (
          <p key={article.id}>
            <a href={article.webUrl}>{article.webTitle}</a>
          </p>
        );
      })}
    </div>
  );
}

export default App;
