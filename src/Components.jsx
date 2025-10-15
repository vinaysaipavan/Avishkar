import { Letstalk } from './LetsTalk';
import { FAQ } from './Faq';
import { WHY } from './Why';
import { Footer } from './footer';
import { Process } from './process';
import { Services } from "./services";
import { Technologies } from './techstacks';
import { Works } from './works';
import { Home } from './home';
import './App.css';

export function MainPage(){
    return(
        <>
        <Home /> 
        <Services />
        <Technologies />
        <Process />
        <Works />
        <WHY />
        <FAQ />
        <Letstalk/>
        <Footer />
        </>
    )
}