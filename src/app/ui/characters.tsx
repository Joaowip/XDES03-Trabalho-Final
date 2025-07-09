import Image from "next/image";
import "@/app/styles/characters.css";
import Link from "next/link";
import deleteIcon from "public/delete-icon.png"
import editIcon from "public/edit-icon.png"
import ConexaoBD from "../libs/conexao-bd";
import { redirect } from "next/navigation";

const bd : string = 'character-db.json';

export interface CharactersProps{
    id: string,
    img: string,
    nome: string,
    altNome: string, // nome alternativo eh um vetor, pegaremos apenas a primeira posicao
    nascimento: string,
    casaHogwartz: string,
    interprete: string,
    nota: number,
    descricao: string,
}

export default function Characters(props: CharactersProps)
{
    const renderStars = (nota: number) => {
    const estrelasCheias = Math.floor(nota); // número inteiro de estrelas
    const estrelasVazias = 5 - estrelasCheias;

    const estrelas = [];

    for (let i = 0; i < estrelasCheias; i++) {
    estrelas.push(<span key={`full-${i}`}>⭐</span>);
    }

    for (let i = 0; i < estrelasVazias; i++) {
    estrelas.push(<span key={`empty-${i}`}>☆</span>);
    }

    return estrelas;
    };

    const avadaKedavra = async () => {
        'use server';
        const character = await ConexaoBD.retornaBD(bd);

        const characterToRemove =  character.findIndex((p) => p.id === props.id);

        character.splice(characterToRemove,1);

        await ConexaoBD.armazenaBD(bd, character);

        redirect('/dashboard');
        
    }

    return(
        <div className="characters-card">
            <Image
                src={props.img}
                width={150}
                height={200}
                alt={`Foto de ${props.nome}`}
            />
            <div id="group1">
                <h2>{props.nome}</h2>
                <h3>{props.altNome}</h3>
                <p>{props.nascimento}</p>
            </div>
            <div id="group2">
                <p>Casa de Hogwartz:<br />
                {props.casaHogwartz}</p>
                <p>Interpretado por:<br />
                {props.interprete}</p>
            </div>
            <div id="group3">
                <p>Nota: {renderStars(props.nota)}</p>
                <p>Descrição:<br />
                {props.descricao}</p>
            </div>
            <div className="character-buttons-container">
                <Link href={`/dashboard/edit/${props.id}`}>
                    <Image src={editIcon} alt="Icone de um penal" id="btn-edit">
                    </Image>
                </Link>
                <form action={avadaKedavra}>
                    <button id="btn-delete">
                        <Image src={deleteIcon} alt="Icone da magia Avada Kedavra" id="btn-delete">
                        </Image>
                    </button>
                </form>
            </div>
        </div>
    )
}