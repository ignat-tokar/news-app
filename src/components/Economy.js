import { useEffect, useState } from "react";
import { getArticlesByTag } from "../api";
import NewsInfo from "./NewsInfo";

function Economy() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getArticlesByTag('enterprise/enterprise');
    setArticles(data.data.response.results);
  }

  return (
    <>
      <h1>Economy</h1>
      {articles.map(article => {
        return <NewsInfo article={article} />;
      })}
    </>
  );
}

export default Economy;