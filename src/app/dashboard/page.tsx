import '@/app/styles/dashboard.css';
import Link from "next/link";
import ConexaoBD from "../libs/conexao-bd";
import Character from '../ui/characters';

const bd : string = 'character-db.json';

export default async function DisplayRank(){

  const dados = await ConexaoBD.retornaBD(bd);

  // Ordena por nota decrescente
  dados.sort((a, b) => b.nota - a.nota);

  const characters = dados.map((character) => {
    return <Character {...character} key={character.id} />
  });

  return(
    <div className="dashboard-container">
      <div id='top-page'>
        <div id='intro'>
          <p>Essas são suas avaliações!</p>
          <p id='intro-message'>Quanto critério! 👀🪄</p>
        </div>
        <Link href={'/dashboard/create'} className="add-char">Adicionar</Link>
      </div>
      <div className='cardContainer'>
        {characters}
      </div>
    </div>
  )
}