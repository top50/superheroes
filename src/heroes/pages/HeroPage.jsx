import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import heroApi from "../../api/HeroesApi";

const HeroPage = () => {
const navigate=useNavigate();
const onNavigationBack=()=>{
    navigate(-1)
}

  const [heroes, setHeroes] = useState([]);
  const { heroId } = useParams();

  useEffect(() => {
    obtenerHeroes();
  }, []);

  const obtenerHeroes = async () => {
    try {
      const response = await heroApi.get(`/superheroes/${heroId}`);
      setHeroes(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row_card animate__animated animate__fadeInLeftBig">
        <div className="card_box " key={heroes.id}>
          <div className="conimg_box">
            <img src={heroes.imagen} alt="imagen" />
          </div>
          <div className="card-body_box">
            <h5>{heroes.nombre}</h5>
            <p className="subtitulos"><span>Editprial {' '}{heroes.editorial}</span></p>
            <p className="subtitulos"><span>Estreno: {' '}{heroes.estreno}</span></p>
            <p className="subtitulos">Descricción: {''} </p>
            <p>{heroes.descripcion}</p>
            <span className="subtitulos">Poderes:</span>
            <h4 className="poderes">{heroes.poderes}</h4>
          </div>
          <button className="btn_regresar" onClick={onNavigationBack}>👈 Regresar </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
