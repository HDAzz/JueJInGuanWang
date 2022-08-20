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
          
        </div>
    </ul>)

}

