import React , { useEffect } from 'react';
import './home.css';



interface Candidates {
  id: number;
  name: string;
   description: string;
  imagenUrl: string;
 
}

const candidates: Candidates[] = [
  {
    id: 1,
    name: 'Mary Cruz',
    description: '"Union y Futuro universitario"',
    imagenUrl: 'https://marycruzuta.com/assets/images/Mary.JPG',
    
  },
  
];

const candidates2: Candidates[] = [
  {
    id: 2,
    name: 'Sara Camacho',
    description: '"Juntos por la UTA"',
    imagenUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIoG11PZrPHsSn_ejJ5L6UbrD479KVL8AukumvaQoZZKaElbY9htIKKSGfht2MWFLPIkW9ugYva19sQ7wsnM_uZjkn-x6SXSQjH3pyySu_TMleLtTS_H_QB15Y279Xf9Tp8oU9WVmH30Q/s1600/agosto+16+del+011+230.jpg',
    
  }
];



const Home: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  
  return (
    <div className="home-container">
      <h1 className="custom-header">¿Conoces a los futuros representantes de la UTA?</h1>
      <h2 className='sub2'>Entérate más sobre ellos</h2>
      <div className="split-container">
        
        {/* Contenedor de la columna izquierda */}
<div className="column">
  {/* Contenedor de imágenes en fila */}
  <div className="image-row">
    <img src="https://marycruzuta.com/assets/images/logo.png" alt="Logo Mary Cruz" className="side-image" />
    
    <div className="candidate">
      <img src={candidates[0].imagenUrl} alt={candidates[0].name} className="candidate1-image central-image" />
      <h2>{candidates[0].name}</h2>
      <p><strong>Candidata a Decana</strong> </p>
      <p>{candidates[0].description}</p>
    </div>
    
    <img src="https://gitlab.com/alexjavier/img_mc/-/raw/main/unidos.PNG" alt="Logo Unidos" className="side-image" />
  </div>

  <div className="video-container">
    <h2>Conoce a Mary Cruz</h2>
    <iframe
      width="100%"
      height="400"
      src="https://www.youtube.com/embed/3NnogU08nK4"
      title="Video de YouTube"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>


        {/* Columna derecha */}
        <div className="column">
        
          <div className="candidate">
            <img src={candidates2[0].imagenUrl} alt={candidates2[0].name} className="candidate-image" />
            <h2>{candidates2[0].name}</h2>
            <p><strong>Candidata a Decana</strong> </p>
            <p>{candidates2[0].description}</p>
          </div>
          <div className="tiktok-container" dangerouslySetInnerHTML={{ __html: `
            <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@saracamacho.estrada/video/7430528760941759750" data-video-id="7430528760941759750" style="max-width: 605px; min-width: 325px;">
              <section>
                <a target="_blank" title="@saracamacho.estrada" href="https://www.tiktok.com/@saracamacho.estrada?refer=embed">@saracamacho.estrada</a> ¡Vamos juntos por el cambio! 💪💪 Ha llegado la hora de devolverle a nuestra universidad el prestigio que se merece y llevar a la UTA hacia una nueva era de transformación y oportunidades. 💙💙💙 Vamos con todo, sin miedo. Juntos por el cambio, juntos por la UTA, juntos por el futuro de nuestra provincia.
              </section>
            </blockquote>
          ` }}></div>
        </div>
        
      </div>
    </div>
  );
};


export default Home;

