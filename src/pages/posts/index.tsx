
import { GetStaticProps} from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'  //conversor do prismic para texto/html

import styles from './styles.module.scss'
import { getPrismicClient } from '../../Services/prismic'
import React from 'react'

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({posts}: PostsProps) {
  return (
    <>
      <Head>
          <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
          <a key={post.slug} href="#">
            <time>{post.updatedAt}</time>
            <strong>{post.title}</strong>
            <p>{post.excerpt}</p>
          </a>
          )) }
        </div>
      </main>
    </>
  )
  }
  //API PRISMIC

  export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
  
    const response = await prismic.query([
      Prismic.predicates.at('document.type', 'publication')
    ], {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    })
    
    //Formatação dos dados
    const posts = response.results.map(post =>{
      return {
        slug: post.uid,
        title: RichText.asText(post.data.title),
        excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
        updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })
      }
    })
    return {
      props: {
        posts
      }
    }
  }