import { Link } from "react-router-dom";


{/*const LINKS=[
    {
        text:'Home',
        to:'/',
    },
    {
        text:"starred",
        to:"/starred",
    },
]*/}
const Navbar =()=>{
    return (
        <div>
          
          {
          /* <ul>
            {
            LINKS.map((item)=>(
            <li  key={item.to}><Link to={item.to}>{item.text}</Link> </li>
            ))}
           </ul>*/}
           <ul>
            <li> <Link to="/">home</Link></li>
            <li> <Link to="/starred">starred</Link></li>

           </ul> 
        </div>
    );
}
export default Navbar;
