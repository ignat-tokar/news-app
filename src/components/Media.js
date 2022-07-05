import { useEffect, useState } from "react";
import { getArticlesByTag } from "../api";
import NewsInfo from "./NewsInfo";

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
      {articles.map(article => {
        return <NewsInfo article={article} />
      })}
    </>
  );
}

export default Media;