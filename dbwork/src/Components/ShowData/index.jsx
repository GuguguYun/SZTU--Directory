import React from 'react'

import DataItems from '../DataItems';

import './index.css';

export default function ShowData(props) {

  //接收教师数据以及展示页面数 
  const {teacherData,pageNum} = props;    

  // 分页数据获取函数
  // 当数据数组长度小于10时，页面不显示的问题是因为没有同步设置pageNum，导致超出范围
  const getPageData = () => {
    // 判断数据是否为数组
    if (!Array.isArray(teacherData)) {
      return [];
    }

    // 每页显示条数
    const pageSize = 10;
  
    // 计算当前页的起始索引
    const startIndex = (pageNum - 1) * pageSize;
  
    // 计算当前页的结束索引
    const endIndex = startIndex + pageSize;
  
    // 返回当前页的数据切片
    return teacherData.slice(startIndex, endIndex);
  };

  // 获取当前页数据
  const showPageList = getPageData();

  return (
    <div className="showData">
        <div className="showData-title">
            <div className="name-title">姓名</div>
            <div className="sno-title">工号</div>
            <div className="inline-title">内线电话</div>
            <div className="outline-title">外线电话</div>
            <div className="department-title">部门</div>
            <div className="department-sno-title">部门编号</div>
            <div className="email-title">邮箱</div>
            <div className="address-title">办公地址</div>
        </div>
        <div className="showData-content">
            {
                showPageList.map((e) => {
                    return <DataItems teacherItem={e} key={e.id}></DataItems>
                })
            }
        </div>
    </div>
  )
}
