import Actorcard from "./Actorcard";
const ActorsGrid=({actors})=>{
    return <div>{
        actors.map(data=><Actorcard 
        key={data.person.id}
         name={data.person.name} 
         gender={data.person.gender} 
         country={data.person.country ? data.person.country.name : null}
         birthday={data.person.birthday}
         deathday={data.person.deathday}
         image={data.person.image ? data.person.image.medium :'/not-found-image.png'}/>)
}</div>
}
export default ActorsGrid;