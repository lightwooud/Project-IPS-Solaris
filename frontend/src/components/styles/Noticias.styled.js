import styled from 'styled-components'

export const ContaNews = styled.div`
    margin: 10;
    padding: 10;
    box-sizing: border-box;
    
`

export const HeadText = styled.h1`
    margin-top: 30px;

`
export const AllNews = styled.div`
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px;
   
`

export const News = styled.div`
    max-width: 450px;
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: lightblue;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    color: ${({ color }) => color || '#333'};
    align-items: center;

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    } 
    
`
export const NewsTitle = styled.h1`
   padding-bottom: 2px;
   border-bottom: 1px solid lightgray;
   font-size: 20px;
`
export const NewsDesc = styled.p`
    padding-top: 10px;
    line-height: 25px;
    font-size: 12px;
    padding-bottom: 10px;
`
export const NewsAuthor = styled.span`
    margin-right: 10px;
    color: purple;
    font-size: 12px;
`
export const NewsPublished = styled.span`
    margin-right: 10px;
    font-size: 12px;

`

export const NewsSource = styled.span`
    .NewsPublished{
        display: inline-block;
        margin-top: 10px;
        color: rgb(122, 122, 122);
    }
    font-size: 12px;
`