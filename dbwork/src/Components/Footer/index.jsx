import React from 'react'

import './index.css';

import logo from '../../assets/down_small.png'

export default function Footer(props) {

  const {teacherData,pageNum,setPageNum} = props;

  //计算总页数
  const allPages = Array.isArray(teacherData) ? Math.ceil(teacherData.length / 10) : 0; 
  //计算当前页面数组
  let showPages = [];
  if (allPages >= 10 && pageNum >=5 && pageNum <= allPages-4) {
    for(let i = pageNum-4;i<=pageNum+5;i++){
        showPages.push(i);
    }
  }else if(allPages >= 10 && pageNum < 5){
    for(let i = 1;i<=10;i++){
        showPages.push(i);
    }
  }else if(allPages >= 10 && pageNum > allPages-4){
    for(let i = allPages-9;i<=allPages;i++){
        showPages.push(i);
    }
  }else{
    for(let i = 1 ; i <= allPages ; i++){
        showPages.push(i);
    }
  }

  const handleChangePage = (e) => {
    setPageNum(e);
  }

  const handleBack = () => {
    if (pageNum > 1){
        setPageNum(pageNum-1);
    }
  }

  const handleUp = () => {
    if (pageNum < allPages){
        setPageNum(pageNum+1);
    }
  }

  return (
    <div className="footer">
        <div className="footer-select">
            {/* 控制页数三个板块 */}
            <div className='up-back-jump'>
                <div className="footer-back" onClick={handleBack}>
                  <img src={logo} alt="" />
                </div>
                {
                    showPages.map((e) => {
                        return <div key={e} className={`footer-page ${pageNum === e ? "active" : ""}`} onClick={() => handleChangePage(e)}>{e}</div>
                    })
                }
                <div className="footer-up" onClick={handleUp}>
                  <img src={logo} alt="" />
                </div>
            </div>
            <p className='howManyPages'>
              {pageNum}/{allPages}
            </p>
        </div>
    </div>
  )
}
