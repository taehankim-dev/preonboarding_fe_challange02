import Head from "next/head"
import Link from "next/link"

import { getAllPostData } from "@/lib/api"
import { Intro, IntroContainer, IntroArticle, IntroContents } from "@/components/intro"

import "@/styles/index.css"

const IndexPage = () => {
  const posts = getAllPostData();

  console.log("indexpage  posts : ", posts)

  return (
    <>
      <Head>
        <title>Blog Starter</title> 
        <meta name="description" content="Blog Starter" /> 
      </Head>        
      <Intro />
      <IntroContainer>
          {posts.map((post) => (
            <IntroArticle key={post.postId}>
                <Link as={`/${post.postId}`}
                      href={`/${post.postId}`}
                      style={{display:"block"}}>
                  <IntroContents title={post.title} 
                                  date={post.date}
                                  description={post.description} />
                </Link>
            </IntroArticle>
          ))}
      </IntroContainer>
    </>
  )
}

export default IndexPage;