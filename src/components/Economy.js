import { useEffect, useState } from "react";
import { getArticlesByTag } from "../api";

function Economy() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getArticlesByTag('economics/economics');
    // setArticles(data.data.response.results);
    console.log(data);
  }

  return (
    <>
      <h1>Economy</h1>
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

export default Economy;