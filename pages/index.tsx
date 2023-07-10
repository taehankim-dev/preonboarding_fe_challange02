import { getAllPosts } from "@/lib/api"
import Head from "next/head"
import Link from "next/link"

import Layout from "@/components/layout"
import Container from "@/components/container"

import type PostType from "@/interfaces/post"

type Props = {
  allPosts : PostType[],
}

export default function Index({allPosts} : Props){
  console.log(allPosts)
  return (
    <>
      <Layout>
        <Head>
          <title>Blog Starter</title>  
        </Head>        
        <Container>
          <ul>
            {allPosts.map((post) => (
              <li key={post.slug}>
                  <Link as={`/posts/${post.slug}`}
                        href="/posts/[slug]">
                    {post.title}
                  </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'categories',
    'date',
    'description',
    'slug',
    'tags',
    'title',
  ])

  return {
    props : {allPosts}
  }
}