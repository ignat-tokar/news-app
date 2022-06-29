import { useEffect, useState } from "react";
import { getArticlesByTag } from "../api";

function Politics() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getArticlesByTag('politics/politics');
    setArticles(data.data.response.results);
  }

  return (
    <>
      <h1>Politics</h1>
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

export default Politics;