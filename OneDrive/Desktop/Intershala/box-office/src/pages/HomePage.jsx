import { useState } from "react";
import { searchForShows } from "./../api/tvmaze";

const HomePage = () => {
  const [searchInput, setString] = useState("");
  const [apiData, setData] = useState([]);
  const [apiDataerrorhandled, seterrorhandled] = useState(null);
  const handlechange = (ev) => {
    const val = ev.target.value;
    setString(val);
  };
  const onsearch = async (ev) => {
    ev.preventDefault();
    try {
      seterrorhandled(null);
      const responseobj = await searchForShows(searchInput);
      setData(responseobj);
    } catch (error) {
      seterrorhandled(error);
    }
  };
  const renderAPIdata = () => {
    if (apiDataerrorhandled) {
      return <div>Error 404 not found {apiDataerrorhandled.Message} </div>;
    }
    if (apiData) {
      return apiData.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }
    return null;
  };
  return (
    <div>
      <form onSubmit={onsearch}>
        <input type="text" value={searchInput} onChange={handlechange} />
        <button type="submit">Search</button>
      </form>
      <div>{renderAPIdata()}</div>
    </div>
  );
};
export default HomePage;
