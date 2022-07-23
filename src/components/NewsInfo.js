import newsImage from './../assets/news.jpg';

function NewsInfo({ article }) {
  return (
    <div className="News-info">
      <h2>{article.webTitle}</h2>
      <img src={newsImage} />
      <p id="date-info">{article.webPublicationDate.split('T')[0]}</p>
      <hr />
      <p>2 a country famed for its modesty and reserve, the UK does seem to have found itself having an awful lot of conversations about genitalia before breakfast. I’m talking, of course, about the latest “gotcha” trend of posing questions to senior politicians about whether or not women can have penises, in what has become an increasingly acrimonious row about trans rights.</p>
    </div>
  );
}

export default NewsInfo;