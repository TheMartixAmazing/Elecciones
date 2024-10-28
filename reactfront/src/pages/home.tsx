import React from 'react';
import './home.css';


interface miembrosdelEquipo{
  nombre : string;
  rol : string;
}

interface Candidates {
  id: number;
  name: string;
  position: string;
  description: string;
  imagenUrl: string;
  team : miembrosdelEquipo[];
}

const candidates: Candidates[] = [
  { id: 1, name: 'Mary Carmen', position: 'Candidata a Decana', description: 'Union y Futuro universitario.',
    imagenUrl:'https://www.google.com/search?sca_esv=f9749d82eb8de094&sxsrf=ADLYWIJ036TtMs3Nsn_UjIbVoypHVt7PkQ:1730137456211&q=sara+camacho+uta&udm=2&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgWizR0-0aFOH11Sb5tlNhd3zC4y7ZXTSrvvSBSNjw8fVX3G3tS3bGsqQeBBxb6Hy8xx-hbch2JHQRb-eFwOw0twQY_IF44mmAPmBQXSZdFWfaNCf1LhMF5BSIk7Fl0epINmQRkDpVCUYadQNCTc7jAs8M8WMxkFFQroIR7fbVWXuayZ36&sa=X&ved=2ahUKEwjxs_Wj0LGJAxUJ38kDHS2vNi0QtKgLegQIExAB&biw=1366&bih=641&dpr=1#vhid=ZfATvifED51fFM&vssid=mosaic'
     ,team :[
    {nombre: "Juan Paredes", rol :"Vicerrector de Investigación"},
    {nombre :'Vinicio Mejía', rol : 'Vicerrector Académico'},
    {nombre :'Sandra Villacis', rol : 'Vicerrector Administrativo'},
  ] },
  { id: 2, name: 'Sara Camacho', position: 'Candidata a Decana', description: 'Juntos por la UTA' ,
    imagenUrl:'https://www.google.com/search?sca_esv=f9749d82eb8de094&sxsrf=ADLYWIJ036TtMs3Nsn_UjIbVoypHVt7PkQ:1730137456211&q=sara+camacho+uta&udm=2&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgWizR0-0aFOH11Sb5tlNhd3zC4y7ZXTSrvvSBSNjw8fVX3G3tS3bGsqQeBBxb6Hy8xx-hbch2JHQRb-eFwOw0twQY_IF44mmAPmBQXSZdFWfaNCf1LhMF5BSIk7Fl0epINmQRkDpVCUYadQNCTc7jAs8M8WMxkFFQroIR7fbVWXuayZ36&sa=X&ved=2ahUKEwjxs_Wj0LGJAxUJ38kDHS2vNi0QtKgLegQIExAB&biw=1366&bih=641&dpr=1#vhid=ZfATvifED51fFM&vssid=mosaic',
    team :[
      {nombre :'Santiago López', rol : 'Vicerrector Académico'},
      {nombre :'Alberto Ríos', rol : 'Vicerrector de Investigación'},
      {nombre :'Fernanda Flores', rol : 'Vicerrector Administrativa'},
      
    ] 

  },
 
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>¿Conoces a los futuros representantes de la UTA?</h1>
      <ul className="candidate-list">
        {candidates.map((candidate) => (
          <li key={candidate.id} className="candidate-item">
            <img src={candidate.imagenUrl} alt={candidate.name} className="candidate-image" />
            <h2>{candidate.name}</h2>
            <p><strong>Cargo al cual aplica:</strong> {candidate.position}</p>
            <p>{candidate.description}</p>
            <h3>Equipo de Trabajo</h3>
            <ul className="team-list">
              {candidate.team.map((member, index) => (
                <li key={index} className="team-member">
                  <strong>{member.nombre}</strong>: {member.rol}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;