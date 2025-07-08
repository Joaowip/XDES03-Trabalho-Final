"use client";

import { useEffect, useState } from "react";
import "@/app/styles/create-character.css"; // importa seu CSS atual

type Props = {
  onSelect: (nome: string) => void;
};

export default function AutocompleteInput({ onSelect }: Props) {
  const [termo, setTermo] = useState("");
  const [sugestoes, setSugestoes] = useState<string[]>([]);
  const [todosOsNomes, setTodosOsNomes] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        const nomes = data.map((char: any) => char.name);
        setTodosOsNomes(nomes);
      });
  }, []);

  useEffect(() => {
    if (termo.length === 0) {
      setSugestoes([]);
      return;
    }

    const filtrados = todosOsNomes.filter((nome) =>
      nome.toLowerCase().includes(termo.toLowerCase())
    );

    setSugestoes(filtrados.slice(0, 5));
  }, [termo]);

  return (
    <div className="autocomplete-wrapper">
      <input
        type="text"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Nome do Personagem"
        name="nome"
        required
      />
      {sugestoes.length > 0 && (
        <ul className="autocomplete-sugestoes">
          {sugestoes.map((sugestao, index) => (
            <li
              key={index}
              className="autocomplete-sugestao"
              onClick={() => {
                setTermo(sugestao);
                setSugestoes([]);
                onSelect(sugestao);
              }}
            >
              {sugestao}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
