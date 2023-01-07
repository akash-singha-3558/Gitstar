import {NavLink}from "react-router-dom"
import styles from "./Navbar.module.css";
const Navbar=()=>{
    const Links=[
        {path:"/",text:"All"},
        {path:"/html",text:"HTML"},
        {path:"/css",text:"CSS"},
        {path:"/js",text:"Javascript"}
    ]
    return(
        <div style={{display:"flex", justifyContent:"space-around",padding:"10px",alignItems:"center",width:"100%", border:"1px solid black", backgroundColor:"black",fontFamily:"Inter, sans-serif"}}>
       
      {
        Links.map((el)=>(
            <NavLink to={el.path} key={el.path}   className={({ isActive }) => {
                return isActive ? styles.activeStyle : styles.defaultStyle;
              }}>{el.text}</NavLink>
        ))
      }
       {/* <NavLink to={"/html"}><p style={{border:"1px solid black",backgroundColor:"teal",paddingLeft:"8px",paddingRight:"8px",borderRadius:"20%"}}>Html</p></NavLink>
       <NavLink to={"/css"}><p style={{border:"1px solid black",backgroundColor:"teal",paddingLeft:"8px",paddingRight:"8px",borderRadius:"20%"}}>Css</p></NavLink>
       <NavLink to={"/js"}><p style={{border:"1px solid black",backgroundColor:"teal",paddingLeft:"8px",paddingRight:"8px",borderRadius:"20%"}}>Javascript</p></NavLink> */}
        </div>
    )
}
export default Navbar;