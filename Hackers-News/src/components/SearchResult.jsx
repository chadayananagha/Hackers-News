// import React from 'react';


const SearchResult = ({datas}) => {
  return (
    <div>
        {/* {data.hits.map(newsPost =>
        <>
           <h3>{newsPost.title} <a href={newsPost.url}>({newsPost.url})</a></h3>
           <p>points:{newsPost.points}</p>
        </>
           )}    */}
           <ol>
            {/* {datas.map((data) =>(
            <> */}
            <l1>{datas.title}</l1>

            {/* </>
            ))} */}
           </ol>
    </div> 
  )
}
export default SearchResult;
