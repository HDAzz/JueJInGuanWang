import React from "react";
import '../style/navigator.css'
export function Navigator()
{
    return (<div className="container-up">
                <a className="logo" href="/">
                    <img alt="稀土掘金" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"  />
                </a>
                {/* 上面的导航条 */}
                    <ul className="main-nav-tabs">
                        <li><span>首页</span></li>
                        <li><span>沸点</span></li>
                        <li><span>课程</span></li>
                        <li><span>直播</span></li>
                        <li><span>活动</span></li>
                        <li><span>商城</span></li>
                        <li><span>APP</span></li>
                        <li><span>插件</span></li>
                    </ul>
                {/* 下面的导航条 */}
                    <ul className="sub-nav-tabs">
                        <li>综合</li>
                        <li>关注</li>
                        <li>后端</li>
                        <li>前端</li>
                        <li>Android</li>
                        <li>iOS</li>
                        <li>人工智能</li>
                        <li>开发工具</li>
                        <li>代码人生</li>
                        <li>阅读</li>
                    </ul>
            </div>)
}