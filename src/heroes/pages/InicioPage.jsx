import React from 'react'
import marvel from '../../assets/marvel.jpg';
import dc from '../../assets/logo-dc.jpg';
import { useNavigate } from 'react-router-dom';
const InicioPage = () => {

const navigate= useNavigate();

const onMarvel=()=>{
  navigate("/marvel");
}
const onDc=()=>{
  navigate("/Dc");
}

  return (
   <>
          <div className='titulo_header'>
    <h1 className='animate__animated animate__bounce'>Herores Marvel vs DC</h1>   
<p>Utlización de JSON Server consumiendo api Local </p>
</div>
 <div className='container'>
<h1 className='team'>¿Qué <span className='team_span'>Team</span> eres 💪</h1>

<img onClick={onMarvel} src={marvel} className="logos-m-dc animate__animated animate__infinite animate__headShake"/>
<img onClick={onDc} src={dc} className="logos-m-dc animate__animated animate__infinite animate__headShake"/>
    </div>
    </>
  )
}

export default InicioPage