// import React from 'react';
import { useEffect, useState } from "react";
import Header from "../src/components/Header";
import SearchResult from "../src/components/SearchResult";
import Spinner from "../src/components/Spinner";

function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?query=...")
      .then((response) => response.json())
      .then((datas) => setDatas(datas.hits));
  }, []);

  return (
    <div className="">
      <Header />
      <Spinner />
      <SearchResult datas={datas} />
    </div>
  );
}
export default App;
