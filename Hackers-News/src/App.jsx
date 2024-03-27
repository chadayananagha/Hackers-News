// import React from 'react';
import { useEffect, useState } from "react";
import Header from "../src/components/Header";
import SearchResult from "../src/components/SearchResult";
import CircularProgress from '@mui/material/CircularProgress';
// import Pagination from '@mui/material/Pagination';

function App() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading]=useState(true);

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?query=...")
      .then((response) => response.json())
      .then((datas) => {setDatas(datas.hits);
      setIsLoading(false)});
  }, []);

  return (
    <div className="">
      <Header />
      {isLoading ? (<CircularProgress />):
      datas.map( result => <><SearchResult key={result.objectID} datas={datas} result={result} /></>)
      }  
      {/* <Pagination count={10} />    */}
    </div>
  );
}
export default App;
