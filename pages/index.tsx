import { getAllPosts } from "@/lib/api"
import Head from "next/head"
import Link from "next/link"

import Layout from "@/components/layout"
import { Intro } from "@/components/intro"
import {IntroContainer} from "@/components/container"

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
              <div key={post.slug}>
                  <Link as={`/posts/${post.slug}`}
                        href="/posts/[slug]">
                    {post.title}
                  </Link>
              </div>
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