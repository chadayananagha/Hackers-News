// import React from 'react';


const SearchResult = ({datas}) => {
  return (
    <div>
        <ol className="mt-8 flex flex-col items-center justify-center font-sans">
      {datas.map((result) => (
        <li key={result.objectID}>
          <a
            href={result.url}
            className="hover-sm:text-slate-50 hover-sm:bg-purple-300 cursor-pointer text-slate-50 hover:text-purple-300"
          >
            {result.title}
          </a>
          <p>{result.points} point by <a href="">{result.author}</a> | created at {result.created_at} | {result.num_comments} comments</p>
        </li>
      ))}
    </ol>
    </div> 
  )
}
export default SearchResult;
