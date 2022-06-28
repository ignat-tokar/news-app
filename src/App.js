import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { getArticlesByWord } from './api';
import './App.css';
import Media from './components/Media';
import Politics from './components/Politics';
import Sport from './components/Sport';

function App() {

  const [articles, setArticles] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    getData('debates');
  }, []);

  const getData = async (word) => {
    const data = await getArticlesByWord(word);
    setArticles(data.data.response.results);
  }

  const inputHandler = (e) => {
    setSearchWord(e.target.value);
  }

  const buttonHandler = (e) => {
    getData(searchWord);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <input
          value={searchWord}
          onChange={inputHandler}
        />
        <button onClick={buttonHandler}>Search</button>
        <div>
          <NavLink to="/politics">Politics</NavLink>
          <NavLink to="/sport">Sport</NavLink>
          <NavLink to="/media">Media</NavLink>
        </div>
        <Routes>
          <Route path="/politics" element={<Politics />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/media" element={<Media />} />
        </Routes>
        {articles.map(article => {
          return (
            <p key={article.id}>
              <a href={article.webUrl}>
                {article.webTitle.split(searchWord)[0]}
                <span style={{ backgroundColor: 'yellow' }}>{searchWord}</span>
                {article.webTitle.split(searchWord)[1]}
              </a>
            </p>
          );
        })}
      </div>
    </BrowserRouter>
  );
}

export default App;
