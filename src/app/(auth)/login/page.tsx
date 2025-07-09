'use client'

import '@/app/styles/login.css';
import Image from 'next/image';

import loggedoffUser from 'public/logged-off-user.jpg'
import userIcon from 'public/user.png';
import passwordIcon from 'public/padlock.png';
import Link from 'next/link';
import z from 'zod';
import toast from 'react-hot-toast';
import { validateCredentials } from '@/app/libs/credentials';

export interface LoginCredentials {
    email: string,
    password: string
}

const LoginSchema = z.object({
    email: z.string().trim().email('Email em formato incorreto. Tente novamente.'),
    password: z.string({message: 'Insira uma senha.'}).trim().min(4, {message: 'Sua senha precisa ter um mínimo de 4 caracteres'})
})

export default function LoginPage(){

    const loginAction = async (formData: FormData) => {

        const loginData: LoginCredentials = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }

        const result = LoginSchema.safeParse(loginData);

        if(!result.success){

            let errorMsg = '';

            result.error.issues.forEach((issue) => {
                errorMsg = errorMsg + issue.message + '. ';
            });

            toast.error(errorMsg);

            return;
        }
        
        const loginValidacao = await validateCredentials(loginData);

        if(loginValidacao){
            toast.error(loginValidacao.error);
            return;
        }
    }

    return (
        <form action={loginAction} className='login-form'>
            <div>
                <Image src={loggedoffUser} alt='Icone de usuário deslogado'></Image>
            </div>
            <div>
                <section className="user-input">
                    <Image 
                        src={userIcon}
                        alt='Icone de campo de email'
                    />
                    <input type="email" name="email" id="email" placeholder="Digite seu email" aria-label="Digite seu email" />
                </section>
                <section className="user-input">
                    <Image 
                        src={passwordIcon}
                        alt='Icone de campo com senha'
                    />
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" aria-label="Digite sua senha" />
                </section>
            </div>
            <button>Entrar</button>
            <div className='link-cadastrar'>
                Ainda não tem uma conta? <Link className='btn-criar-conta' href="/create">Cadastre-se aqui!</Link>
            </div>
        </form>
    )
}