"use client";

import "@/app/styles/create-character.css";
import AutocompleteInput from "@/app/ui/autocompleteInput";
import { useState } from "react";
import { addChar } from "@/app/libs/add-char";

const arquivo = 'character-db.json';


export default function CreateCharacter(){
    
    const [nomeSelecionado, setNomeSelecionado] = useState("");

    return(
        <section className="create-character-display">
            <div>
                <h2>Avaliar um novo personagem</h2>
            </div>
            <form action={addChar} className="create-character-formulario">
                <section className="characterInputDados">
                    <input type="text"
                        id="img"
                        name="img" 
                        placeholder="Foto do Personagem"
                        aria-label="Foto do Personagem"
                        />
                </section>
                <section className="characterInputDados">
                    <AutocompleteInput onSelect={setNomeSelecionado} />
                </section>
                <section>
                    <input type="hidden"
                        id="altNome"
                        name="altNome" 
                        placeholder="Nome Alternativo do Personagem"
                        aria-label="Nome Alternativo do Personagem"
                        />
                </section>
                <section>
                    <input type="hidden"
                        id="nascimento"
                        name="nascimento" 
                        placeholder="Data de Nascimento do Personagem"
                        aria-label="Data de Nascimento do Personagem"
                        />
                </section>
                <section>
                    <input type="hidden"
                        id="casaHogwartz"
                        name="casaHogwartz" 
                        placeholder="Casa de Hogwartz do Personagem"
                        aria-label="Casa de Hogwartz do Personagem"
                        />
                </section>
                <section>
                    <input type="hidden"
                        id="interprete"
                        name="interprete" 
                        placeholder="Nome do Interprete do Personagem"
                        aria-label="Nome do Interprete do Personagem"
                        />
                </section>
                <section className="characterInputDados">
                    <input type="number"
                        id="nota"
                        name="nota" 
                        placeholder="Nota de 0 a 5"
                        aria-label="Nota de 0 a 5"
                        min={0}
                        max={5}
                        required
                        />
                </section>
                <section className="characterInputDados">
                    <input type="text"
                        id="descricao"
                        name="descricao" 
                        placeholder="Comentários sobre o personagem"
                        aria-label="Comentários sobre o personagem"
                        />
                </section>
                <button>Adicionar</button>
            </form>
        </section>
    );

}