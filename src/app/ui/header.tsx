import "@/app/styles/header.css";
import React from 'react';
import { isSessionValid } from '../libs/session';

export default async function Header(){
   
    //verifica se user esta logado
    const isLogged = await isSessionValid();
    let userEmail: string = "";
    if(isLogged)
    {
        userEmail = isLogged?.userEmail as string;
    }

    return(
        <header>
            <h1>Harry Potter Ranking</h1>
        </header>
    )
}