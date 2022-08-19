import React from "react";
import '../style/sidebar.css'
export function Sidebar()
{
    return(<ul className="container-right">
        <ul>
        <div className="firstline">
          <span className="title">
            下午好！
          </span>
          <span>
            <button className="button">
              去签到
            </button>
          </span>
        </div>
        <div className="wen">
            点亮你在社区的每一天
        </div>
        </ul>
    </ul>)

}
