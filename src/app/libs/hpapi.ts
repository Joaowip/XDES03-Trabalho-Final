// libs/hpapi.ts
import axios from "axios";

export async function getHPCharacterByName(name: string) {
  try {
    const { data } = await axios.get("https://hp-api.onrender.com/api/characters");

    function normalize(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    const character = data.find((c: any) =>
      normalize(c.name).includes(normalize(name))
    );

    if (!character) {
      throw new Error("Personagem não encontrado na HP-API.");
    }

    return {
      img: character.image || null,
      altNome: character.alternate_names[0] || [],
      nascimento: character.dateOfBirth || "Desconhecido",
      casaHogwartz: character.house || "Sem casa",
      interprete: character.actor || "Desconhecido",
    };
  } catch (error) {
    console.error("Erro ao acessar a HP-API:", error);
    throw error;
  }
}
