import { useEffect, useState } from "react";
import { getArticlesByWord } from "../api";

function MainPage() {

  const [articles, setArticles] = useState([]);
  const [searchWord, setSearchWord] = useState('debates');

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
    <div>
      <input
        value={searchWord}
        onChange={inputHandler}
      />
      <button onClick={buttonHandler}>Search</button>
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
  );
}

export default MainPage;