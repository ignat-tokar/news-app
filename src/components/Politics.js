import { useEffect, useState } from "react";
import { getArticlesByTag } from "../api";
import NewsInfo from "./NewsInfo";

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
    <div className="Wrapper">
      <h1>Politics</h1>
      {articles.map(article => {
        return <NewsInfo article={article} />;
      })}
    </div>
  );
}

export default Politics;