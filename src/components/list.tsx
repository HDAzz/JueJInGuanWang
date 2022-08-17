import React from "react";
import '../style/list.css'
export function List()
{
    return (<div className="container-left" >
        <ul>
        <div >
        <li className="up-class"><a href="/">推荐</a></li>
        <div className="line"></div>
        <li className="up-class"><a href="/?sort=newest">最新</a></li>
        <div className="line"></div>
        <li className="up-class"><a href="/?sort=hottest">热榜</a></li>
        </div>
        <div className="passage">
            <a className="writer">沸点小助手 | 4天前</a>
            <li className="passage"><a href="https://juejin.cn/pin/7129334097113006116?utm_source=web1&utm_medium=banner&utm_campaign=reading">三分钟阅读挑战｜阅读时间不浪费！打开app阅读文章边学习边拿奖品！</a></li>
        </div>
        </ul>
    </div>)
}