import React from 'react'

import './index.css';
import logo from '../../assets/sztuLog.png';

export default function index() {
  return (
    <div className="header">
        <div className="header-content">
            <img src={logo} alt="深圳技术大学" />
            <div className="smallbox">
                <h2>深圳技术大学</h2>
                <p>SHENZHEN TECHNOLOGY UNIVERSITY</p>
            </div>
            <div className="divider">
                {/*  */}
            </div>
            <p className="what">内部通讯录</p>
        </div>
    </div>
  )
}
