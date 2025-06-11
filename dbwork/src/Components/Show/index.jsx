import React from 'react'

import SelectDepartment from '../SelectDepartment';
import ShowData from '../ShowData';

import './index.css'

export default function index(props) {

  const {teacherData,pageNum,setPageNum,setTeacherData} = props;

  return (
    <div className="showArea">
        <SelectDepartment setTeacherData={setTeacherData} setPageNum={setPageNum}></SelectDepartment>
        <ShowData teacherData={teacherData} pageNum={pageNum}></ShowData>
    </div>
  )
}

