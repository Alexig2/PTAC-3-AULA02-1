import styles from "./components/corpo.module.css";

export default async function Home() {
  try {
    const resposta = await fetch("https://back-end-ifms.vercel.app/campi", {
      next: {
        revalidate: 1
      }
    });

    const campi = await resposta.json();

    return (
      <main className={styles.corpo}>
        <h1 className={styles.titulo}>Home</h1>
        {
          campi.map((campus) =>
            <div>
              <p>{campus.nome_campus}</p>
            </div>
          )
        }
      </main>
    )
  } catch {
    <p>Erro ao carregar a página.</p>
  }
}
