import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu(){
    return (
        <header className={styles.cabecalho}>
            <Image
                className={styles.Image}
                width={100}
                height={90}
                src={"https://www.ifms.edu.br/marcaifms.png"}/>
            <h1>Menu</h1>
            <nav>
                <ul>
                    <Link href="/" className={styles.Link}>
                        <li>Home</li>
                    </Link>
                    <Link href="/registro" className={styles.Link}>
                        <li>Registrar</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}