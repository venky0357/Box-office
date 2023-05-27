import { useState } from "react";
const HomePage =()=>{
  const [searchInput,setString]=useState('');

    const handlechange=(ev)=>{
      const val=ev.target.value;
      setString(val);
    } 
    const onsearch=async (ev)=>{
         ev.preventDefault();
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`);
        const body= await  response.json();
        console.log(body);
    }
    return (
        <div>
        <form onSubmit={onsearch}>
            <input type="text" value={searchInput} onChange={handlechange}/>
            <button type="submit" >Search</button>
        </form>
        </div>
    );
}
export default HomePage;