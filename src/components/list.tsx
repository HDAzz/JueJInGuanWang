import React from "react";
import '../style/list.css'
export function List()
{
    return (<div className="container-left" >
        <ul>
        <li><a >推荐</a></li>
        <li><a href="/?sort=newest">最新</a></li>
        <li><a href="/?sort=hottest">热榜</a></li>
        
        </ul>
    </div>)
}