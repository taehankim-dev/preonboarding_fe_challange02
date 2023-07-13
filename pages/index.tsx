import { getAllPosts } from "@/lib/api"
import Head from "next/head"
import Link from "next/link"

import Layout from "@/components/layout"
import { Intro, IntroContainer, IntroArticle, IntroContents } from "@/components/intro"

import type PostType from "@/interfaces/post"

type Props = {
  allPosts : PostType[],
}

export default function Index({allPosts} : Props){
  return (
    <>
      <Layout>
        <Head>
          <title>Blog Starter</title> 
          <meta name="description" content="Blog Starter" /> 
        </Head>        
        <Intro />
        <IntroContainer>
            {allPosts.map((post) => (
              <IntroArticle key={post.slug}>
                  <Link as={`/posts/${post.slug}`}
                        href="/posts/[slug]"
                        style={{display:"block"}}>
                    <IntroContents title={post.title} 
                                   date={post.date}
                                   description={post.description} />
                  </Link>
              </IntroArticle>
            ))}
        </IntroContainer>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'slug',
    'title',
    'date',
    'description'
  ])

  return {
    props : {allPosts}
  }
}