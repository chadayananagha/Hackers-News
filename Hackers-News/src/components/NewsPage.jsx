import React, { useState } from 'react'

export const NewsPage = () => {
const [datas,setDatas]=useState([]);
const [isLoading,setIsLoading]=useState(true);

useEffect(() => {
    setIsLoading(true);
    fetch("http://hn.algolia.com/api/v1/search?query=...")
    .then(response => response.json())
    .then(datas => setDatas(datas.hits))
  },[])

  return (
    <div>NewsPage</div>
  )
}
