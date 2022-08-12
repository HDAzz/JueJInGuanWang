import React from "react";
import '../style/navigator.css'
export function Navigator()
{
    return (<div className="container">
                <nav>
                    <ul>
                        <li>
                        <a className="logo" href="/">
                            <img src="http://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg" alt="稀土掘金" />
                        </a>
                        </li>
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
            </div>)
}