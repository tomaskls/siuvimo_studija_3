import { About } from "../src/components/about/About"
import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';


export function Home() {
  return (
    <main className={style.merriweatherRegular}>
      <div className={style.mainContainer}>
        <Header />
        <SidebarMenu />
        <About />
        <Footer />
      </div>
    </main>
  )
}