
import Link from "next/link"
import { readdirSync } from 'fs';
import {getPostDetailData} from "@/lib/api";
import {PageContainer, PageTitle, PageBody, PageButtonWrapStyle} from '@/components/detailPage';

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
  const {meta, content} = await getPostDetailData(params.postId);

  return (
    <>
      <PageContainer>
        <PageTitle title={meta.title}/>
        <PageBody>
          <div dangerouslySetInnerHTML={{__html : content}} />    
        </PageBody>
        <PageButtonWrapStyle>
          <button>
            <Link as={`/`} href={`/`}>
              <span>목록으로</span>
            </Link>
          </button>
        </PageButtonWrapStyle>
      </PageContainer>
    </>
  )
}

export default DetailPage;