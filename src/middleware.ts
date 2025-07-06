// Usando +/- o exemplo da aula pra produção das telas

import {NextRequest, NextResponse} from "next/server";

//regex retirada diretamente da documentação do NextJS
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

const publicRoutes = [
    '/',
    '/login',
    '/create',
    '/dashboard' // retirar quando fizer as rotas
]

export async function middleware(req: NextRequest){

    return NextResponse.next();
    
}