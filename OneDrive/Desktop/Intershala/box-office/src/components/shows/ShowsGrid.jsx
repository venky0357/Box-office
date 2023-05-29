import Showcard from "./Showcard";

const ShowGrid=({shows})=>{
    return <div>{
        shows.map(data=><Showcard key={data.show.id}  id={data.show.id} summary={ data.show.summary} name={data.show.name}  image={data.show.image ? data.show.image.medium: '/not-found-image.png'}                   />)
}</div>
}
export default ShowGrid;