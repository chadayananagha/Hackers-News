// import React from 'react';
import { useEffect, useState } from "react";
import Header from "../src/components/Header";
import SearchResult from "../src/components/SearchResult";
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";
import axios from 'axios';

function App() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading]=useState(true);
 const [totalPages,setTotalPages]=useState(0);
 const [currentPage,setCurrentPage]=useState(1);
 const[query,setQuery]=useState("");
 const[searchInput,setSearchInput]=useState("");
const handlePageChange = (event,value) =>
{
  console.log(event);
  // setCurrentPage(event.selected);
  setCurrentPage(value);
}
const handleSubmit = event =>
{
  event.preventDefault();
  setCurrentPage(1);
  setQuery(searchInput);
  if(searchInput)
  {
    setSearchInput("");
  }
}
  useEffect(() => {
    setIsLoading(true);
    const fetchData =async() =>
    {
      try{
       const { data } = await axios.get("http://hn.algolia.com/api/v1/search?",
       {
        params: {page:currentPage, query},
       }
      
       );
       const { hits, nbPages}=data;
       setDatas(hits);
       setTotalPages(nbPages);
       console.log(data);
      }catch(err)
      {
        console.log(err);
      }finally{
        setIsLoading(false);
      }
    
    };
    fetchData();
  }, [currentPage, query]);

  return (
   
<Container sx={{ bgcolor: 'bisque',mx: {xs:2,sm:2,md:10,lg:30,xl:45},}} >
      <Header handleSubmit={handleSubmit} setSearchInput={setSearchInput} searchInput={searchInput} />
      <Typography sx={{mt:2}}>Page: {currentPage}</Typography> 
       <Pagination sx={{mt:2,ml:-2}} count={totalPages} page={currentPage} onChange={handlePageChange} />   
      {isLoading ? (<CircularProgress sx={{mx:{xs:32,sm:40,md:50,lg:60,xl:70}}}/>):
      (<SearchResult datas={datas} />)
      } 
      </Container>
  );
}
export default App;
