import React from 'react'
import axios from 'axios';
import './index.css';
import logo from '../../assets/down_small.png';

export default function SelectItems(props) {
  // data是一个数组，用于接收父节点传进来的子数组
  const { allData,data,setData,setPageNum,setTeacherData } = props;

  const updateNodeOpenStatus = (data, targetId, newOpenStatus) => {
    return data.map(item => {
      // 如果是目标节点，更新 open 属性
      if (item.id === targetId) {
        if (item.children) {
          return {...item,
                  open: newOpenStatus,
                };
        }
        return { ...item, open: newOpenStatus };
      }

      // 如果有子节点，递归处理
      if (item.children) {
        return {
          ...item,
          children: updateNodeOpenStatus(item.children, targetId, newOpenStatus),
        };
      }
      // 其他情况直接返回
      return item;
    });
  };

  const updateNodeSonStatus = (data, targetId) => {
    return data.map(item => {
      // 如果是目标节点，更新status属性
      if (item.id === targetId) {
        if (item.children) {
          return {...item,
                  children: item.children.map(e => ({...e, status: !e.status}))
                };
        }
        return { ...item};
      }

      // 如果有子节点，递归处理
      if (item.children) {
        return {
          ...item,
          children: updateNodeSonStatus(item.children, targetId),
        };
      }
      // 其他情况直接返回
      return item;
    });
  };

  const handleClick = (e) => {
    // 这一步处理的是页面展示的逻辑
    let newStatus = "";
    if (e.open != null){
      if(e.open === "closed"){
        newStatus = "open";
      }else{
        newStatus = "closed";
      }
      setData(allData => updateNodeSonStatus(allData,e.id));
      setTimeout(()=>{
        setData(allData => updateNodeOpenStatus(allData, e.id, newStatus));
      },150);
    }

    // 处理数据搜索的逻辑
    // 递归收集所有选中状态的关键字
    let keywords = e.name;
    const getKeyWords = (item) => {
      if (Array.isArray(item.children)) {
        item.children.forEach(child => {
          // 只收集状态为true的子节点
          if (child.name) {
            // 添加到关键字字符串，用逗号分隔
            keywords += "," + child.name;
        
            // 递归处理该子节点的子节点
            if (child.children) {
              getKeyWords(child);
            }
          }
        });
      }
    };

    // 调用函数收集关键字
    getKeyWords(e);
    console.log(keywords);
    const fetchData = async() => {
      try{
        const respones = await axios.get(`/filter/${keywords}`);
        setTeacherData(respones.data);
        setPageNum(1);
      }catch(error){
        console.log(error);
      }
    }

    // 确保有效更新数据
    const Nomsg = ["职能部门","附属教育机构","教学单位","群团组织","其他直属机构","教辅单位"];
    if (!Nomsg.some(item => item === keywords)) {
      fetchData();
    }
  }

  return (
    <ul>
      {
        data ? data.map((e) => {
          return (
            <li key={e.id} className={`Tree-li ${e.status}`}>
              <div className="Tree-content" onClick={() => handleClick(e)}>
                {e.children ? <img src={logo} alt="#" className={`Tree-img ${e.open || ''}`}/> : null}
                <span>{e.name}</span>
              </div>
              {
                Array.isArray(e.children) && e.children.length > 0 && e.open === "open" ? 
                <SelectItems data={e.children} setData={setData} allData={allData} setPageNum={setPageNum} setTeacherData={setTeacherData}/> : null
              }
            </li>
          )
        }) : null
      }
    </ul>
  )
}