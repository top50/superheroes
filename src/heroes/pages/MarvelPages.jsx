import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import heroApi from "../../api/HeroesApi";
import Loader from "../components/Loader";

const MarvelPages = () => {
const [heroes,setHeroes]=useState([]);

useEffect(() => {
  obtenerHeroes();
}, []);

const obtenerHeroes = async () => {
  try {
    const response=await heroApi.get(`/superheroes?tipo=heroes-marvel`);
    setHeroes(response.data)
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
};

if(!heroes.length){
  return (<div className="miloader">
    <Loader />
  </div>);
}
  return (
    <div>
       <div className="heade-marvel">
        <h1>Top 20 Héroes Marvel</h1>
      </div>
     <section className="container">
        <div className="row">
        {heroes.map((heroe) => (
          <div className="card " key={heroe.id}>
            <div className="conimg">
              <img src={heroe.imagen} alt="imagen" />
            </div>
            <div className="card-body">
              <h5>{heroe.nombre}</h5>
              <p>{heroe.descripcion.substring(0,100).concat("...")}</p>
                
                <Link to={`/heroe/${heroe.id}`}>
                 <button className="btn_perfil"            
                
                >Ver perfil</button>
                </Link>
               
            </div>
            <div className="imgdefault">
              
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default MarvelPages