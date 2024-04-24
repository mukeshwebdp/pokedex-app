import { Link } from "react-router-dom";

function Pokemone({name,image,id}){
    return <div className="pokemon">
        <div className="item">
            <Link to={`/pokemon/${id}`}> 
                <div><img src={image} alt={name} /></div>
                <div><h3>{name}</h3></div>
            </Link>
        </div>
    </div>
}
export default Pokemone;