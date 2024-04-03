import Menu from "./components/Menu";
import Footer from "./components/Footer";

export const metadata = {
  title: 'Create Next App',
  description: 'Aulas de Programação e Tecnologias para Aplicações Cliente, utilizando o framework NEXT.JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Menu/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
