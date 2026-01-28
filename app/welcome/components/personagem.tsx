export function Personagem({
  nome
} ) {
    return {
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
    }
}