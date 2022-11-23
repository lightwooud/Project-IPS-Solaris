import React, { useContext } from "react";
import { NewContext } from "./NewContext";
import NewsArticle from "./NewsArticle.js";
import { AllNews, ContaNews, HeadText } from "./styles/Noticias.styled";

function Noticias(props) {
  const { data } = useContext(NewContext);
  console.log(data);

  return (
    <ContaNews>
      <HeadText>Noticias</HeadText>
      <AllNews>
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </AllNews>
    </ContaNews>
  );
}

export default Noticias;