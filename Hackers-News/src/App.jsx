// import React from 'react';
import { useEffect, useState } from "react";
import Header from "../src/components/Header";
import SearchResult from "../src/components/SearchResult";
import CircularProgress from '@mui/material/CircularProgress';
// import Pagination from '@mui/material/Pagination';
// import { Container } from "@mui/material";
function App() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading]=useState(true);
 

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?query=")
      .then((response) => {
        if(!response.ok) throw new Error('${response.status}:Could not fetch the data');
        return response.json();
      })
      .then((datas) => {setDatas(datas.hits);
      setIsLoading(false)})
      .catch((err) => console.error(err));
  }, []);

  return (
   
<>
      <Header />
      {isLoading ? (<CircularProgress />):
      (<SearchResult datas={datas} />)
      }  
      {/* <Pagination count={10} />    */}

      </>
  );
}
export default App;
