"use server";

import ConexaoBD from "@/app/libs/conexao-bd";
import { CharactersProps } from "@/app/ui/characters";
import { getHPCharacterByName } from "@/app/libs/hpapi";
import { redirect } from "next/navigation";

const arquivo = 'character-db.json';

export async function addChar(formData: FormData) {
  const nome = formData.get("nome") as string;
  const nota = Number(formData.get("nota"));
  const descricao = formData.get("descricao") as string;

  const apiChar = await getHPCharacterByName(nome);

  const novoChar: CharactersProps = {
    id: crypto.randomUUID(),
    nome,
    nota,
    descricao,
    img: apiChar.img || "https://static.wikia.nocookie.net/harrypotter/images/a/aa/Bruxo_desconhecido.png/revision/latest/smart/width/250/height/250?cb=20161008202639&path-prefix=pt-br",
    altNome: apiChar.altNome,
    nascimento: apiChar.nascimento,
    casaHogwartz: apiChar.casaHogwartz,
    interprete: apiChar.interprete,
  };

  const characterDB = await ConexaoBD.retornaBD(arquivo);
  characterDB.push(novoChar);
  await ConexaoBD.armazenaBD(arquivo, characterDB);
  
  redirect('/dashboard');
}
