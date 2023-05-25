
import React, { Children, useState } from "react";
import {FaBars, FaCommentAlt, FaRegChartBar, FaShoppingBag, FaTh, FaThList, FaUserAlt} from 'react-icons/fa'
import { NavLink } from "react-router-dom";


function SideBare({children}) {
    const [isOpen ,setIsOpen]=useState(false)
    const toggle =()=>setIsOpen(!isOpen)

        const menuItem =[
            {
                path:'/',
                name:'Dashbord',
                icon:<FaTh/>
            },
            {
                path:'/about',
                name:'About',
                icon:<FaUserAlt/>
            },
            {
                path:'/analitics',
                name:'Analitics',
                icon:<FaRegChartBar/>
            },
            {
                path:'/comment',
                name:'Comment',
                icon:<FaCommentAlt/>
            },
            {
                path:'/product',
                name:'Product',
                icon:<FaShoppingBag/>
            },
            {
                path:'/productlist',
                name:'ProductList',
                icon:<FaThList/>
            },
        ]


    return (
        
            <div className="container">
                <div className="sidebar" style={{width:isOpen? '300px':'50px'}}>
                    <div className="top-section">
                            <h1  style={{display:isOpen? 'block':'none'}}>Logo</h1>
                            <div className="bars" style={{marginLeft:isOpen? '50px':'0px'}}>
                                <FaBars onClick={toggle}/>
                            </div>
                    </div>
                
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className='link' activeclassName='active' > 
                            <div className="icon">{item.icon}</div>
                            <div className="link-text"  style={{display:isOpen? 'block':'none'}}>{item.name}</div>
                        </NavLink>
                    ))
                }
                
                </div>
                <main>{children}</main>
      
            </div>
           
    );
  }
  
  export default SideBare;