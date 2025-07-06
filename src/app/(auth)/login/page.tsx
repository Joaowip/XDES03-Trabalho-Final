'use client'

import '@/app/styles/login.css';
import Image from 'next/image';

import loggedoffUser from 'public/logged-off-user.jpg'
import userIcon from 'public/user.png';
import passwordIcon from 'public/padlock.png';
import Link from 'next/link';

export default function LoginPage(){

    return (
        <form className='login-form'>
            <div>
                <Image src={loggedoffUser} alt='Icone de usuario deslogado'></Image>
            </div>
            <div>
                <section className="user-input">
                    <Image 
                        src={userIcon}
                        alt='Icone representando login de usuário(a)'
                    />
                    <input type="email" name="email" id="email" placeholder="Digite seu email" aria-label="Digite seu email" />
                </section>
                <section className="user-input">
                    <Image 
                        src={passwordIcon}
                        alt='Icone representando compo com senha'
                    />
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" aria-label="Digite sua senha" />
                </section>
            </div>
            <button>Entrar</button>
            <div className='link-cadastrar'>
                <p><Link href="/dashboard">Entrada provisoria para o dashboard</Link></p>
                Ainda não tem uma conta? <Link className='btn-criar-conta' href="/create">Cadastre-se aqui!</Link>
            </div>
        </form>
        
    )
}