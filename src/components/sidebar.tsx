import React from "react";
import '../style/sidebar.css'
export function Sidebar()
{
    return(<ul className="container-right">
        <div className="block1">
          <div className="firstline">
          <svg className="icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
               <path d="M8 2C8 1.72386 7.77614 1.5 7.5 1.5H6.5C6.22386 1.5 6 1.72386 6 2L5.9995 3H3C2.44772 3 2 3.47259 2 4.05556V7H22V4.05556C22 3.47259 21.5523 3 21 3H18V2C18 1.72386 17.7761 1.5 17.5 1.5H16.5C16.2239 1.5 16 1.72386 16 2V3H8V2ZM22 8.5H2V20.9444C2 21.5274 2.44772 22 3 22H21C21.5523 22 22 21.5274 22 20.9444V8.5Z" data-v-68373e0a="" fill="#FFCF8B" fill-rule="evenodd">
               </path>
               <rect fill="#FF7D00" height="2" rx="1" width="3" x="5" y="12">
               </rect>
               <rect fill="#FF7D00" height="2" rx="1" width="3" x="10.5" y="12">
               </rect>
               <rect fill="#FF7D00" height="2" rx="1" width="3" x="5" y="16">
               </rect>
               <rect fill="#FF7D00" height="2" rx="1" width="3" x="10.5" y="16">
               </rect>
               <rect fill="#FF7D00" height="2" rx="1" width="3" x="16" y="12">
               </rect>
               <rect fill="#FF7D00" height="2" rx="1" width="3" x="16" y="16">
               </rect>
            </svg>
            <span className="title1">下午好！</span>
            <span><button className="button">去签到</button></span>
          </div>
          <div className="secondline">
            点亮你在社区的每一天
          </div>
        </div>
        <div className="block2">
          <div className="firstline">
          <img className="download" src="http://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"></img>
          <span className="title2">下载稀土掘金APP</span>
          </div>
          <div><span className="secondline">一个帮助开发者成长的社区</span></div>
        </div>
        <div className="block3">
          <div className="firstline">
            <li>
              <img className="pic2" ></img>
              <span className="title6">作者榜</span>
            </li>
          </div>
          <hr className="hr"/>
          <div className="firstline">
            <button className="button1"></button>
            <span className="title8">我是郑皓泽</span>
          </div>
          <hr className="hr"/>
          <div className="firstline">
            <button className="button1"></button>
            <span className="title8">我</span>
          </div>
          <hr className="hr"/>
          <div className="firstline">
            <button className="button1"></button>
            <span className="title8">喂我自己袋盐</span>
          </div>
          <hr className="hr"/>
            <div className="firstline">
            <button className="button2"></button>
            <span className="title7">完整榜单  &gt;</span>
            </div>
        </div>
        <div className="block4">
          <div className="firstline">
            <img className="pic" src="http://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png"></img>
            <a className="title3" href="">稀土掘金漫游指南</a>
          </div>
          <div className="firstline">
            <img className="pic" src="http://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png"></img>
            <a className="title3" href="">安装掘金浏览器插件</a>
          </div>
          <div className="firstline">
            <img className="pic" src="http://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-miner.b78347c.png"></img>
            <a className="title3" href="">前往掘金翻译计划</a>
          </div>
        </div>
        <div className="block5">
          <div className="firstline">
            <li>
            <a className="title4" href="">用户协议 </a>
            <a className="title4" href="">营业执照 </a>
            <a className="title4" href="">隐私政策 </a>
            <a className="title4" href="">关于我们 </a>
            </li>
          </div>
          <div className="firstline">
            <li>
              <a className="title4" href="">站点地图 </a>
              <a className="title4" href="">使用指南 </a>
              <a className="title4" href="">友情链接 </a>
              <a className="title4" href="">更多文章 </a>
            </li>
          </div>
          <div className="firstline">
            <a className="title4" href="">京ICP备18012699号-3</a>
          </div>
          <div className="firstline">
            <img className="pic1" src="http://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/police.d0289dc.png"></img>
            <a className="title4" href=""> 京公网安备11010802026719号</a>
          </div>
          <div className="firstline"><li className="title5">版权所有：北京北比信息技术有限公司</li></div>
          <div className="firstline"><li className="title5">公司地址：北京市海淀区信息路甲28号13层B座13B-5</li></div>
          <div className="firstline"><li className="title5">公司座机：010-83434395</li></div>
          <div className="firstline">
            <li className="title5">举报邮箱：
            <a className="title4" href="mailto:feedback@xitu.io">feedback@xitu.io</a>
            </li>
          </div>
          <div className="firstline"><a className="title4" href="">©2022 稀土掘金</a></div>
          <div className="firstline">
          <a href="https://weibo.com/xitucircle"><img alt="微博" className="pic1" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/weibo.0cd39f5.png" /></a>
          <a href=""><img alt="微信" className="pic1" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/wechat.ce329e6.png"/></a>
          </div>
        </div>
    </ul>)

}

