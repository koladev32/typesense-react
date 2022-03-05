import React from "react"

export function Hit(props){
  const {hit} = props;
    return (
      <div className="flex flex-col space-y-3 m-5 border p-3">
        <img className="w-32 h-40 self-center" src={hit.picture} alt={hit.name}/>
        <div>
          <h1 className="text-lg font-bold">{hit.title}</h1>
        </div>
        <div className="flex flex-wrap space-x-4">
          {
            hit.sources.map((item, index) => {
              return <a href={item} key={index}>Link {index}</a>
            }
            )
          }
        </div>
        <div className="flex flex-row space-x-2 items-baseline">
          <h1 className="text-lg font-bold">Episodes: </h1>
          <p>{hit.episodes}</p>
        </div>
        <div>
          <div className="truncate">
            {
              hit.tags.map(tag => {
                return <div     
                className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
                >{tag}</div>
              })
            }
          </div>
        </div>
      </div>
    )
  }