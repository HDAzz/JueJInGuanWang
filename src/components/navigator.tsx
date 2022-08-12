import React from "react";
import '../style/navigator.css'
export function Navigator()
{
    return (<div className="container-up">
                <a className="logo" href="/">
                    <img alt="稀土掘金" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"  />
                </a>
                <nav className="main-nav">
                    <ul className="nav-tabs">
                        <li><span>首页</span></li>
                        <li><span>沸点</span></li>
                        <li><span>课程</span></li>
                        <li><span>直播</span></li>
                        <li><span>活动</span></li>
                        <li><span>商城</span></li>
                        <li><span>APP</span></li>
                        <li><span>插件</span></li>
                    </ul>
                </nav>
                <nav className="sub-nav">

                </nav>
            </div>)
}