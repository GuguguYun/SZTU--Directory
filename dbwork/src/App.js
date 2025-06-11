import React from 'react';
import axios from 'axios'
import {useState,useEffect} from 'react';

import Header from './Components/Header';
import Search from './Components/Search';
import Show from './Components/Show';
import Footer from './Components/Footer';

function App() {
  // 定义现有的教师数据的状态
  const [teacherData,setTeacherData] = useState([]);
  // 定义展示页数的状态
  const [pageNum,setPageNum] = useState(1);

  // 页面初次渲染完成后执行一次获取数据
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/all');
        console.log(response.data);
        setTeacherData(response.data);
      }
      catch(error){
        console.log("error fetching data:",error);
      }
    };

    fetchData();
  },[])

  return (
    <div>
      <Header></Header>
      <Search setTeacherData={setTeacherData} setPageNum={setPageNum} ></Search>
      <Show teacherData={teacherData} pageNum={pageNum} setTeacherData={setTeacherData} setPageNum={setPageNum}></Show>
      <Footer teacherData={teacherData} pageNum={pageNum} setPageNum={setPageNum}></Footer>
    </div>
  );
}

export default App;
