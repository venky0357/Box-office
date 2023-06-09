import { useState } from "react";
import { searchForShows,searchForPeople } from "./../api/tvmaze";
import ShowGrid from "../components/shows/ShowsGrid";
import ActorsGrid from "../components/Actors/ActorsGrid";

const HomePage = () => {
  const [searchInput, setString] = useState("");
  const [apiData, setData] = useState(null);
  const [apiDataerrorhandled, seterrorhandled] = useState(null);
  const[radiooption,setRadio]=useState("shows");

const handlechange = (ev) => {
    const val = ev.target.value;
    setString(val);
  };

const onchangeoption=(ev)=>{
  setRadio(ev.target.value);
 }

const onsearch = async (ev) => {
    ev.preventDefault();
    seterrorhandled(null);
    try {
      if(radiooption==="shows"){
      const responseobj = await searchForShows(searchInput);
      setData(responseobj);
      }
      else
      {
      //   seterrorhandled(null);
      const responseobj = await searchForPeople(searchInput);
      setData(responseobj);
      }
    } catch (error) {
      seterrorhandled(error);
    }
  };
  const renderAPIdata = () => {
    if (apiDataerrorhandled) {
      return <div>Error 404 not found {apiDataerrorhandled.Message} </div>;
    }
    if(apiData?.length===0)
    {
      return <div>No results
      </div>
    }
    if (apiData) {
      return  apiData[0].show 
              ? <ShowGrid shows={apiData}/>
              :<ActorsGrid actors={apiData}/>;
    }
    return null;
  };
  return (
    <div>
      <form onSubmit={onsearch}>
        <input type="text" value={searchInput} onChange={handlechange} />
        <label>
          Shows
          <input type="radio" value="shows" name="select-option" checked={radiooption==="shows"} onChange={onchangeoption}/>
        </label>
        <label>
          Actors
          <input type="radio" value="actors" name="select-option" checked={radiooption==="actors"} onChange={onchangeoption}/>
        </label>
        <button type="submit">Search</button>
      </form>
      <div>{renderAPIdata()}</div>
    </div>
  );
};
export default HomePage;
