import { Personagem } from "./components/personagem";

export function Welcome() {
  return (
    <>
      <div className="header">
        <h1>
          Rick and Morty
        </h1>
      </div>
      <div className="personagens">
        <div className="personagem">
          <img 
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" 
          />
        <div className="detalhes">
          <p className="nome">
            Rick Sanchez
          </p>
          <p className="especie">
            Human
          </p>
          <span className="vida">
            Alive
          </span>
        </div>
        </div>
      </div>
      <div className="personagens">
        <div className="personagem">
          <img 
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" 
          />
        <div className="detalhes">
          <p className="nome">
            Morly Smith
          </p>
          <p className="especie">
            Human
          </p>
          <span className="vida">
            Alive
          </span>
        </div>
        </div>
      </div>
      <div className="personagens">
        <div className="personagem">
          <img 
            src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" 
          />
        <div className="detalhes">
          <p className="nome">
            Summer Smith
          </p>
          <p className="especie">
            Human
          </p>
          <span className="vida">
            Alive
          </span>
        </div>
        </div>
      </div>

    </>
  );
}