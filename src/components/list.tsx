import React from "react";
import '../style/list.css'
export function List()
{
    return (<div className="container-left" >
        <ul>
        <div >
        <li className="up-class"><a href="/">推荐</a></li>
        <li className="up-class"><a href="/?sort=newest">最新</a></li>
        <li className="up-class"><a href="/?sort=hottest">热榜</a></li>
        </div>
        <div className="passage">
            <li><a href="https://juejin.cn/pin/7129334097113006116?utm_source=web1&utm_medium=banner&utm_campaign=reading">三分钟阅读挑战</a></li>
        </div>
        </ul>
    </div>)
}