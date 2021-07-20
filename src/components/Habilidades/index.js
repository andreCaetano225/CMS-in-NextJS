import { getPrismicClient } from "../../services/prismic"
import { Main } from "./styles"
import Prismic from '@prismicio/client';
export default function Habilidades() {
  return (
    <>
      <Main>
          <div>
          <stron>CSS</stron>
          <p>Tempo</p>
          </div>
      </Main>
    </>
  )
}

export const getStaticProps = async() => {
    const prismic = getPrismicClient();
    const response = await prismic.query([
        Prismic.predicates.at('document.type','home')
    ], {
        fetch:['home.title', 'home.content', 'home.image'],
    })
    console.log(response)
}
