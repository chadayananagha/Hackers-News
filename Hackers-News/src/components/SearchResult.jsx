// import React from 'react';

import { Container } from "@mui/material";


const SearchResult = ({datas}) => {
  return (
    <Container sx={{ml:-6,}}>
        <ol className="mt-8 flex flex-col items-center justify-center font-sans">
      {datas.map((result) => (
        <li key={result.objectID} style={{marginBottom:'20px'}}>
            <h4>{result.title}</h4>
            <div>
          <p>{result.points} point by {result.author} | created at {result.created_at} | {result.num_comments} comments</p>
          <a  href={result.url}>Read More</a>
          </div>
        </li>
      ))}
    </ol>
    </Container> 
  )
}
export default SearchResult;
