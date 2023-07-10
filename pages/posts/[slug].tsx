import type PostType from "@/interfaces/post"
import { getAllPosts, getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';

import Layout from '@/components/layout';
import Container from '@/components/container';
import PostHeader from '@/components/post-header';
import PostBody from '@/components/post-body';


type Props = {
  post: PostType,
  morePosts : PostType[],
}

export default function Post({post, morePosts}: Props){
  if(!post?.slug){
    return <>Error!!</>
  }

  return (
    <>
      <Layout>
        <Container>
          <article className="mb-32">
            <PostHeader 
              title={post.title}
              date={post.date}
            />
            <PostBody content={post.content}/>
          </article>
        </Container>
      </Layout>
    </>
  )
}

type Params = {
  params: {
    slug: string,
  }
}

export async function getStaticProps({ params }: Params){
  const post = getPostBySlug(params.slug, [
    'slug',
    'title',
    'date',
    'categories',
    'description',
    'tags',
    'content',
  ])
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}