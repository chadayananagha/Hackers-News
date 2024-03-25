// import { useState } from 'react';
import React from 'react';

import data from '../src/hackers-news.json';

function App() {
  
  return (
    <>
      <div>{data.hits.map(newsPost => <h1>{newsPost.title}</h1> )}</div> 
    </>
  )
}

export default App;
