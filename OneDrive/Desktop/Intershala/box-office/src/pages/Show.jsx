import { useParams } from "react-router-dom";
const Show= () => {
    const {showId}=useParams();
    return (
      <div>
        <h1> Show page is for {showId}</h1>
      </div>
    );
  };
  export default Show;
  