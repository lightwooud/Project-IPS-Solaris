import React from "react";
import { News, NewsAuthor, NewsDesc, NewsPublished, NewsSource, NewsTitle } from "./styles/Noticias.styled";

function NewsArticle({ data }) {
  return (
    <News>
      <NewsTitle>{data.title}</NewsTitle>
      <NewsDesc>{data.description}</NewsDesc>
      <NewsAuthor>{data.author}</NewsAuthor> <br />
      <NewsPublished>{data.publishedAt}</NewsPublished>
      <NewsSource>{data.source.name}</NewsSource>
    </News>
  );
}

export default NewsArticle;