import { Personagem } from "./components/personagem";

const personagens = [
  {
    nome: "Rick Sanchez",
    imagem: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    especie: "Human",
    vida: "Alive"
  },
  {
    nome: "Morty Smith",
    imagem: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    especie: "Human",
    vida: "Alive"
  },
  {
    nome: "Summer Smith",
    imagem: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    especie: "Human",
    vida: "Alive"
  }
];

export function Welcome() {
  return (
    <>
      <div className="header">
        <h1>
          Rick and Morty
        </h1>
      </div>
      <div className="personagens">
        {
          personagens.map((
            personagem
          ) => {
            return (
              <Personagem 
                nome={personagem.nome}
                imagem={personagem.imagem}
                especie={personagem.especie}
                vida={personagem.vida}
              />
            )
          })
        }
      </div>
    </>
  );
}