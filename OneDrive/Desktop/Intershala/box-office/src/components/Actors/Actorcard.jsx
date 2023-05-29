const Actorcard=({name ,image,gender ,country,birthday,deathday})=>{
    return <div>
        <div>
        <img src={image} alt="not found"></img>
        </div>
     
      <h1>{name} {!!gender  && `(${gender})`}</h1>
      <p>{ country ? `from ${country}` : ` No country Know`}</p>
      {!!birthday && <p>born on {birthday}</p>}
      <p>{deathday ?`died ${deathday}` :`Alive`}</p>
    </div>
}
export default Actorcard;