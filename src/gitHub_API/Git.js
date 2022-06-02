import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DataRecieved from './DataRecieved';
import Pagination from './Pagination';
import  './Git.css'


const Git = () => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerpage] = useState(5);

    //  fetching data from github
    useEffect(()=> {
        const fetchData = async()=> {
            setLoading(true);
            let result = await axios.get('https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc');
            let datas = result.data
            setApiData(datas.items);
            // console.log(datas.items)
            setLoading(false);
        }
        fetchData();
    },[])
    
    // if (apiData) {
    //   console.log(apiData)
    // } 
    

    //  to get current page
    const indexOfLastData = currentPage * dataPerpage;
    const indexOfFirstData = indexOfLastData - dataPerpage;
    const currentData = apiData !== undefined ? apiData.slice(indexOfFirstData, indexOfLastData): null ;

    // change page 
    const changePage = (pageNumber)=> setCurrentPage(pageNumber)
    
     
  return (
    <div className='git' >
        <DataRecieved apiData={currentData} loading={loading} />
        <Pagination dataPerpage={dataPerpage} totalData ={apiData.length} changePage={changePage} />

    </div>
  )
}

export default Git