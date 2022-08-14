import React from "react";
import '../style/navigator.css'
export function Navigator()
{
    return (<div className="container-up">
                <div className="container-1">
                    <a className="logo" href="/">
                    <img alt="稀土掘金" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"  />
                    </a>
                    {/* 上面的导航条 */}
                    <ul className="main-nav-tabs">
                        <li className="active"><a className="link-item">首页</a></li>
                        <li><a className="link-item">沸点</a></li>
                        <li><a className="link-item">课程</a></li>
                        <li><a className="link-item">直播</a></li>
                        <li><a className="link-item">活动</a></li>
                        <li><a className="link-item">商城</a></li>
                        <li><a className="link-item">APP</a></li>
                        <li><a className="link-item">插件</a></li>
                    </ul>

                    <div className="search-box">
                        <input type="text" className="search-btn" placeholder=" 探索稀土掘金"></input>
                        <div className="search-icon-container">
                            <img alt="搜索" className="search-icon" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg"></img>
                        </div>
                    </div>
                    <div className="add-group">
                        <button className="add-btn">创作者中心</button>
                        <div className="more">
                            {/* <svg className="unfold-icon"  fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z"  fill="white"></path>
                            </svg> */}
                            <ul className="more-list">
                                <li className="item"><span className="icon write-article">写文章</span></li>
                                <li className="item"><span className="icon issue-points">发沸点</span></li>
                                <li className="item"><span className="icon create-jcode">写代码</span></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="container-2">
                    {/* 事实证明，文字不等长得用div一个一个装 */}
                    <a className="nav-item active" href="#">
                        <div category-popover-box>综合</div>    
                    </a>
                    <a className="nav-item" href="#">
                        <div category-popover-box>关注</div>
                    </a>
                    <a className="nav-item" href="#">
                        <div category-popover-box>后端</div>
                    </a>
                    <a className="nav-item" href="#">
                        <div category-popover-box>前端</div>
                    </a>
                    <a className="nav-item" href="#">
                        <div category-popover-box>Android</div>
                    </a>
                    <a className="nav-item" href="#">
                        <div category-popover-box>iOS</div>
                    </a>
                    <a className="nav-item" href="#">
                        <div category-popover-box>人工智能</div>
                    </a>
                    <a className="nav-item" href="#">
                        <div category-popover-box>开发工具</div>
                    </a>
                    <a className="nav-item" href="#">
                        <div category-popover-box>代码人生</div>
                    </a>
                    <a className="nav-item" href="#">
                        <div category-popover-box>阅读</div>
                    </a>
                </div>
            </div>)
}