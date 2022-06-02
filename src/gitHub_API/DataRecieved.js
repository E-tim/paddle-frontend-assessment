import React from 'react'
import  './Git.css'

const DataRecieved = ({apiData, loading}) => {
  // 
  if (loading) {
    return  <img className='myImage' src='img/loadin.gif' alt='loading'/>
  }

  return (
      <div>
        {
          apiData ? apiData.map(data => {
            return (
              <div className='gitResult' key={data.id} >
                <img src={data.owner.avatar_url} alt='github_avarter' />
                <div className='subGitresult' >
                  <h4>{data.name}</h4>
                  <p>{data.description}</p>
                  <div className='starsIssues' >
                    <p className='myP'>Stars: {data.stargazers_count}</p>
                    <p className='myP'>Issues: {data.open_issues}</p>
                    <p>{data.updated_at}</p>
                  </div>
                </div>
              </div>
            )
          }) : <p>Error while loading </p>
        }
          
      </div>
 
  )
}

export default DataRecieved