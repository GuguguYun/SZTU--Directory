import React from 'react'

import './index.css';

export default function DataItems(props) {

  const {teacherItem} = props;
    
  return (
    <div className="dataItems">
        <div className="name-item">
          {
            teacherItem.name != null ? teacherItem.name : ""
          }
        </div>
        <div className="sno-item">
          {
            teacherItem.sno != null ? teacherItem.sno : ""
          }
        </div>
        <div className="inline-item">
          {
            teacherItem.inline != null ? teacherItem.inline : ""
          }
        </div>
        <div className="outline-item">
          {
            teacherItem.outline != null ? teacherItem.outline : ""
          }
        </div>
        <div className="department-item">
          {
            teacherItem.department != null ? teacherItem.department : ""
          }
        </div>
        <div className="department-sno-item">
          {
            teacherItem.department_sno != null ? teacherItem.department_sno : ""
          }
        </div>
        <div className="email-item">
          {
            teacherItem.email != null ? teacherItem.email : ""
          }
        </div>
        <div className="address-item">
          {
            teacherItem.address != null ? teacherItem.address : ""
          }
        </div>
    </div>
  )
}
