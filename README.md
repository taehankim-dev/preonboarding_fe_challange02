# 프리온보딩 프론트엔드 챌린지
## 프리온보딩 프론트엔드 챌린지 과제 2 + 3
Next.js로 마크다운 블로그 만들기

`Next.js로 마크다운으로 작성한 블로그를 정적 페이지(SSG)로 작성해주세요.`

### 요구사항
1) 사용자는 루트 경로의 `_posts` 폴더에 작성된 마크다운 파일(`.md`)를 작성할 수 있어야 합니다. 해당 파일은 마크다운 본문과 게시물에 대한 meta data를 담을 수 있어야 합니다. 아래는 마크다운에 jekyll에서 만든 `frontmatter` 라는 문법을 적용한 예시입니다.
```
categories:
  - Development
  - VIM
date: "2012-04-06"
description: 설명을 적는 곳입니다
slug: spf13-vim-3-0-release-and-new-website
tags:
  - .vimrc
  - plugins
  - spf13-vim
  - vim
title: hello
---

## 예시입니다
- 예시입니다
```

2) 블로그에 작성된 게시물을 렌더링하는 `목록 페이지`와 개별 게시물을 렌더링하는 `상세 페이지`로 나누어 작성해주세요.
   + `/` - 목록 페이지
   + `/[id]` - 상세 페이지
   + 마크다운을 JavaScript로 변환해주는 도구는 `remark`(마크다운 Parser), `remark-html`(remark로 파싱한 데이터를 html로 변환)을 참고
   + 각 마크다운의 meta data는 `gray-matter`, `frontmatter` 참고
   + 마크다운을 React에 삽입할 때는 `dangerouslySetInnerHTML`을 사용
   + (추가 구현) 코드 하이라이터는 `highlight.js`,`prism.js`를 참고


:: Next.js 12에서 지원하는 Prefetching 메서드를 적절히 사용해주세요.
  + Next.js 13을 설치하고 Pages Router를 사용하셔도 됩니다.
  + 정적 페이지를 생성할 때 필요한 데이터 생성 → `getStaticProps`
  + 각 포스트를 그려줄 상세 페이지 경로를 생성 → `getStaticPaths`

:: 참고 사항
  + 가급적 TypeScript로 진행하시는 걸 추천드립니다.
  + 과제의 목적이 디자인에 있지는 않기 때문에 UI 관련 라이브러리는 자유롭게 사용하셔도 좋습니다. 단, 라이브러리의 종류와 Next.js 간 호환이 잘 맞지 않아 에러가 발생하는 경우가 있을 수 있으니 유의하여 사용해주세요.
  + CSS-in-JS 라이브러리 사용 시 `_document.js`(Next.js 공식 문서 참고)에 각 라이브러리(`styled-components`,`emotion`,...)에 알맞은 세팅을 추가해주세요.
  + (선택) Vercel이나 Netlify를 활용하면 정적 페이지를 간단하게 배포할 수 있습니다.
  + 과제 완료 후 과제 제출 스레드에 해당 프로젝트의 github 링크로 제출해주세요. 프로젝트에 대한 간단한 소개가 README에 작성되어 있으면 좋습니다.
  + 이 외에 추가 구현하고 싶은 기능이 있으면 자유롭게 구현해주세요.

------------

### 추가 사항(23.07.14)
1) Page Router로 작성된 코드를 Next.js 13 버전의 App Router로 변경해보세요.
   + 서버 컴포넌트9React Server Components)에 대해 학습해주세요.
     + Next.js 공식 문서 : https://nextjs.org/docs/getting-started/react-essentials#thinking-in-server-components
     + [번역] RSC From Scratch. Part 1: Server Components : https://velog.io/@glassfrog8256/번역-RSC-From-Scratch.-Part-1-Server-Components
   + getStaticPaths는 ![generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)로 대체해주세요.
     + getServerSideProps, getStaticProps, getStaticPaths 등의 서버 사이드 API는 사용되지 않습니다. 조금 더 정확히 표현하자면 사용할 필요가 없어졌습니다.
       > The new data fetching in Next.js 13 is built on top of the `[fetch()` Web API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and makes use of `async` / `await` in Server Components.
       > Now, instead of using `getServerSideProps()` and `getStaticProps()`, **all fetched data is static by default**, meaning it's rendered at build time. However, Next.js extends the `fetch` options object to allow each request to set its own [caching and revalidating rules](https://beta.nextjs.org/docs/data-fetching/caching?utm_source=vercel_site&utm_medium=blog&utm_campaign=blog_fetching_data_faster). With the `[{next: revalidate}` option](https://beta.nextjs.org/docs/data-fetching/revalidating?utm_source=vercel_site&utm_medium=blog&utm_campaign=blog_fetching_data_faster), you are able to refresh any piece of your static data, either at a set interval or when that piece changes in your backend.
       > For dynamic data that changes often or is specific to users, you can pass the `[{cache: no-store}` option](https://beta.nextjs.org/docs/data-fetching/fetching#dynamic-data-fetching?utm_source=vercel_site&utm_medium=blog&utm_campaign=blog_fetching_data_faster) in the `fetch` request.
       > https://vercel.com/blog/nextjs-app-router-data-fetching
    + SEO 설정을 위해 ![generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)를 사용해주세요.
    + 참고 자료
      + SSG at Playground : [https://github.com/vercel/app-playground/blob/main/app/ssg/[id]/page.tsx](https://github.com/vercel/app-playground/blob/main/app/ssg/%5Bid%5D/page.tsx)
      + App Router : https://nextjs.org/docs/app/building-your-application/routing
      + Migration 가이드 : https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration
      + Next.js 13 Blog Example : https://velog.io/@surim014/building-a-blog-with-Next.js-13-and-React-Server-Components

------------

### 과제 설명
📂 파일 구조
```
📦src
 ┣📦_posts
 ┃ ┣ 📜1.md
 ┃ ┣ 📜2.md
 ┃ ┗ 📜favicon.ico.md
 ┣📦.next
 ┣📦app
 ┃ ┣ 📂[postId]
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣📦components
 ┃ ┣ 📜container.tsx
 ┃ ┣ 📜date-formatter.tsx
 ┃ ┗ 📜intro.tsx
 ┣📦interfaces
 ┃ ┗ 📜post.ts
 ┣📦lib
 ┃ ┣ 📜api.ts
 ┃ ┣ 📜registry.tsx
 ┃ ┗ 📜markdownToHtml.ts
 ┣📦node_modules
 ┣📦styles
 ┃ ┗ 📜index.css
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.js
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┣ 📜README.md
 ┣ 📜tailwind.config.js
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock
```
+ components : 페이지 레이아웃 설정.
+ interfaces : 게시글 객체의 type 설정.
+ lib
  + markdownToHtml : 마크다운 문법을 html 문법으로 변환해주는 파일.
  + api : 마크다운 문법으로 된 게시글을 가져오는 파일.
+ app : 렌더링되는 페이지들

------------

### 배포 주소
- https://preonboarding-fe-challange02.vercel.app/

------------
