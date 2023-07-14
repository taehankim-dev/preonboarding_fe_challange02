import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import markdownToHtml from '@/lib/markdownToHtml';

export const getAllPostData = () => {
  const posts = readdirSync("_posts").map((file) => {
    const post = readFileSync(`_posts/${file}`, 'utf-8');
    return matter(post).data;
  });

  console.log("api posts : ", posts)

  return posts;
}

export const getPostDetailData = async (postId : number) => {
  const post = readFileSync(`_posts/${postId}.md`, 'utf-8');
  const {data, content} = matter(post);

  return {meta : data, content : await markdownToHtml(content)};
}