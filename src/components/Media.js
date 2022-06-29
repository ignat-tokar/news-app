import { useEffect, useState } from "react";
import { getArticlesByTag } from "../api";

function Media(){
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getArticlesByTag('sport/sport');
    setArticles(data.data.response.results);
  }

  return (
    <>
      <h1>Sport</h1>
      {articles.map(article => {
        return (
          <div>
            <h2>{article.webTitle}</h2>
            <p>hello</p>
          </div>
        );
      })}
    </>
  );
}

export default Media;