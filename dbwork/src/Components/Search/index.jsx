import React from 'react'
import axios from 'axios';
import {useRef} from 'react';

import './index.css';
import logo from '../../assets/search.png';

export default function Search(props) {

  const {setTeacherData,setPageNum} = props;

  const inputRef = useRef(null);

  const handleSearch = () => {
    if (inputRef.current.value !== ""){
      const searchValue = inputRef.current.value;

      const fetchSearch = async () => {
        try {
          const response = await axios.get(`/index/${searchValue}`)
          setTeacherData(response.data);
          setPageNum(1);
          console.log(response.data);
          
          inputRef.current.value = "";
        }
        catch(error){
          inputRef.current.value = "";
          alert('Error fetching data:', error);
        }
      }

      fetchSearch();
    }
  }

  return (
    <div className="searchbox-bg">
        <div className="searchbox">
            <input 
                ref={inputRef}
                type="text"  
                className="input"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder='请输入姓名、工号、部门、电话搜索'
            />
            <button className="searchButton" onClick={handleSearch}>
                <img src={logo} alt="搜索" />
            </button>
        </div>
    </div>
  )
}
