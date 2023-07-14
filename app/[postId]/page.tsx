
import { readdirSync } from 'fs';
import {getPostDetailData} from "@/lib/api";
import {PageContainer} from '@/components/container';

type Params = {
  params :{
    postId : number,
  }
}

export const generateStaticParams = async () => {
  const paths = readdirSync('./_posts')

  return paths;
}

export const generateMetadata = async({params} : Params) => {
  const {meta} = await getPostDetailData(params.postId);
  return {
    title: meta.title,
    description : meta.description,
  }
}

const DetailPage = async ({params} : Params) => {
  const {content} = await getPostDetailData(params.postId);

  return (
    <>
      <PageContainer>
        <article className="mb-32">
          <div dangerouslySetInnerHTML={{__html : content}} />
        </article>
      </PageContainer>
    </>
  )
}

export default DetailPage;