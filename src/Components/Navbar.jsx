import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/navbar.css';
import logo from '../Assets/images/logo.png';



//class -> className
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm  navbar-dark" >
            <ul className="navbar-nav">
                <li className="nav-item" id="logo" >
                    {/* PROPERTY BINDING */}
                    <img src={logo} style={{ height: 80, width: 170, marginLeft:200 }}></img>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="home" style={{  marginTop:20, marginLeft:100, fontSize:14 }}><b>HOME</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="axios" style={{  marginTop:20,marginLeft:20, fontSize:14 }}><b>AXIOS</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="api" style={{  marginTop:20,marginLeft:20, fontSize:14 }}><b>API</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="classcom" style={{  marginTop:20,marginLeft:20, fontSize:14 }}><b>PROJECTS</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="classcom" style={{  marginTop:20,marginLeft:20, fontSize:14 }}><b>OUR BLOG</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="classcom" style={{  marginTop:20,marginLeft:20, fontSize:14 }}><b>CONTACTS</b></Link>
                </li>
                <li ><a style={{  marginTop:20,marginLeft:150,fontSize:30, color:'#fff'}}  href="#" class="fa fa-twitter-square"   id="twit"></a></li>
                <li><a style={{  marginTop:20,marginLeft:20,fontSize:30, color:'#fff'}} href="#" class="fa fa-youtube"></a></li>
                <li><a style={{  marginTop:20,marginLeft:20,fontSize:30,color:'#fff'}} href="#" class="fa fa-rss"></a></li>
                <li><a style={{  marginTop:20,marginLeft:20,fontSize:30,color:'#fff'}} href="#" class="fa fa-facebook-square"></a></li>
                <li><a style={{  marginTop:20,marginLeft:20,fontSize:30,color:'#fff'}} href="#" class="fa fa-google-plus-square"></a></li>
            </ul>
        </nav>
       
    )
}