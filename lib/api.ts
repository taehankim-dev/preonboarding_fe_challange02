import {join} from 'path';
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import markdownToHtml from '@/lib/markdownToHtml';

const postsDirectory = join(process.cwd(), '_posts');

export const getAllPostData = () => {
  const posts = readdirSync(postsDirectory).map((file) => {
    const post = readFileSync(`${postsDirectory}/${file}`, 'utf-8');
    return matter(post).data;
  });

  return posts;
}

export const getPostDetailData = async (postId : number) => {
  const post = readFileSync(`_posts/${postId}.md`, 'utf-8');
  const {data, content} = matter(post);

  return {meta : data, content : await markdownToHtml(content)};
}