
import { GetStaticProps} from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'

import styles from './styles.module.scss'
import { getPrismicClient } from '../../Services/prismic'

export default function Posts() {
  return (
    <>
      <Head>
          <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>01 de dezembro de 2021</time>
            <strong>Mapas com React usando Leaflet</strong>
            <p>Neste post vamos desenvolver uma página web para demonstrar, na prática, a integração de Mapas em uma aplicação com React usando Leaflet.</p>
          </a>
          <a href="#">
            <time>01 de dezembro de 2021</time>
            <strong>Mapas com React usando Leaflet</strong>
            <p>Neste post vamos desenvolver uma página web para demonstrar, na prática, a integração de Mapas em uma aplicação com React usando Leaflet.</p>
          </a>
          <a href="#">
            <time>01 de dezembro de 2021</time>
            <strong>Mapas com React usando Leaflet</strong>
            <p>Neste post vamos desenvolver uma página web para demonstrar, na prática, a integração de Mapas em uma aplicação com React usando Leaflet.</p>
          </a>
        </div>
      </main>
    </>
  )
  }

  export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
  
    const response = await prismic.query([
      Prismic.predicates.at('document.type', 'publication')
    ], {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    })
    
    return {
      props: {}
    }
  }