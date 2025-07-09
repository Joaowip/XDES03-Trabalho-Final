
import ConexaoBD from "@/app/libs/conexao-bd";
import "@/app/styles/create-character.css";
import { CharactersProps } from "@/app/ui/characters";
import { redirect } from "next/navigation";

const arquivo = 'character-db.json';

interface EditCharactersProps{
    params: Promise<{id: string}>;
}

export default async function EditChar({params}: EditCharactersProps){

    const {id} = await params;
    
    const characterDB = await ConexaoBD.retornaBD(arquivo);

    const charToEdit: CharactersProps = characterDB.find((p: CharactersProps) => p.id === id);
    const charToEditIndex: number = characterDB.findIndex((p) => p.id === id);

    const updateChar = async (formData : FormData) => {
        'use server';

        const updatedChar: CharactersProps = {
            id,
            img: formData.get('img') as string, // pegar o id da api
            nome: formData.get('nome') as string, 
            altNome: formData.get('altNome') as string, // pegar o id da api
            nascimento: formData.get('nascimento') as string, // pegar o id da api
            casaHogwartz: formData.get('casaHogwartz') as string, // pegar o id da api
            interprete: formData.get('interprete') as string, // pegar o id da api
            nota: Number(formData.get('nota')) as number,
            descricao : formData.get('descricao') as string,
        }

        characterDB.splice(charToEditIndex,1,updatedChar);
        await ConexaoBD.armazenaBD(arquivo,characterDB);
        redirect('/dashboard');
    }

    return(
        <div className="create-character-display">
            <h2>{charToEdit.nome}</h2>
            <form action={updateChar} className="create-character-formulario">
                <section className="characterInputDados">
                    <input type="text"
                        id="img"
                        name="img" 
                        placeholder="Foto do Personagem"
                        defaultValue={charToEdit.img}
                        />
                </section>
                <section>
                    <input type="hidden"
                        id="nome"
                        name="nome" 
                        placeholder="Nome do Personagem"
                        defaultValue={charToEdit.nome}
                        />
                </section>
                <section>
                    <input type="hidden"
                        id="altNome"
                        name="altNome" 
                        placeholder="Nome Alternativo do Personagem"
                        defaultValue={charToEdit.altNome}
                        />
                </section>
                <section>
                    <input type="hidden"
                        id="nascimento"
                        name="nascimento" 
                        placeholder="Data de Nascimento do Personagem"
                        defaultValue={charToEdit.nascimento}
                        />
                </section>
                <section>
                    <input type="hidden"
                        id="casaHogwartz"
                        name="casaHogwartz" 
                        placeholder="Casa de Hogwartz do Personagem"
                        defaultValue={charToEdit.casaHogwartz}
                        />
                </section>
                <section>
                    <input type="hidden"
                        id="interprete"
                        name="interprete" 
                        placeholder="Nome do Interprete do Personagem"
                        defaultValue={charToEdit.interprete}
                        />
                </section>
                <section className="characterInputDados">
                    <input type="number"
                        id="nota"
                        name="nota" 
                        placeholder="Nota de 0 a 5"
                        min={0}
                        max={5}
                        defaultValue={charToEdit.nota}
                        />  
                </section>
                <section className="characterInputDados">
                    <input type="text"
                        id="descricao"
                        name="descricao" 
                        placeholder="Comentários sobre o personagem"
                        defaultValue={charToEdit.descricao}
                        />
                </section>
                <button>Atualizar</button>
            </form>
        </div>
    )

}