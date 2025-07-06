import '@/app/styles/login.css';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
  
    <main className="img-background">
      {children}
      <section className='introducao'>
        <h2>Bem-vindo ao Harry Potter Ranking, seu próprio universo mágico de Hogwarts!</h2>
        <p>Aqui, potterheads podem explorar os personagens do mundo de Harry Potter e criar o seu próprio <em>ranking</em> pessoal.  
        Selecione, edite e dê sua nota aos bruxos, bruxas e criaturas que marcaram essa jornada encantada.</p>
        <p>Quem será o maior bruxo de todos os tempos? 🌟</p>
      </section>
    </main>

  );
}