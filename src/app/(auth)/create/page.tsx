'use client';

import Image from "next/image";
import userIcon from "public/user.png";
import passwordIcon from "public/padlock.png";

import '@/app/styles/login.css';

export default function CreateUser(){

    return(
        <form className="login-form">
            <div>
                <section className="user-input">
                    <Image src={userIcon} alt="user icon"/>
                    <input type="email" name="email" id="email" placeholder="Email" aria-label="Email" required/>
                </section>

                <section className="user-input">
                    <Image src={passwordIcon} alt="user icon"/>
                    <input type="password" name="password" id="password" placeholder="Senha" aria-label="Senha" required/>
                </section>

                <section className="user-input">
                    <Image src={passwordIcon} alt="user icon"/>
                    <input type="password" name="conf-password" id="conf-password" placeholder="Confirmar Senha" aria-label="Confirmar Senha" required/>
                </section>
            </div>    
            <button>Cadastrar</button>
        </form>
    )
}