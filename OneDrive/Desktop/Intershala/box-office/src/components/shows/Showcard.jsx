/*eslint-disable*/
import { Link } from "react-router-dom";

const Showcard=({name ,image ,id,summary})=>{
    const summaryStripped=summary ? summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g,'') :"No Description";
    return <div>
        <div>
        <img src={image} alt="not found"></img>
        </div>
     
      <h1>{name}</h1>
      <p>{summaryStripped}</p>

      <div>
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button"> Star Me</button>
      </div>
    </div>
}
export default Showcard;