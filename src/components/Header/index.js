import { Main } from "./styles"
import anima from './animation.json';
import lottie from "lottie-web";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: anima,
    });
  }, []);

    return (
      <>
      <Main>
        <div>
          <h1>
           Seja Bem-Vindo a minhas <span>Habilidades</span> 
          </h1>
         <div id="react-logo"></div>
        </div>
      </Main>

      </>
    )
  }
  