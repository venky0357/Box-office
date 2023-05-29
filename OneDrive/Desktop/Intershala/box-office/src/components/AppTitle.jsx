
export default function AppTitle(props) {
    const {title="Box office",subtitle=" Looking for any Movie ?"}=props;
  return (
<div>
        <h1>{title}</h1>
       <p>{subtitle}</p>
   </div>
  )
}
