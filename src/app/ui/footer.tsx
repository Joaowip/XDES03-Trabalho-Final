import "@/app/styles/footer.css";
import Link from 'next/link';
import Image from "next/image";
import git from 'public/github-icon.png'

export default function Footer(){
    return(
        <footer className='footer'>
            <section className="section-contact">
                <p style={{textAlign: "center"}}>Para mais informações, acesse: </p>
                <Link 
                href="https://github.com/Joaowip/XDES03-Trabalho-Final.git" 
                target='_blank'>
                <Image className="gitIcon" src={git} alt="Icone do github">
                </Image></Link>
            </section>
        </footer>
    );
}