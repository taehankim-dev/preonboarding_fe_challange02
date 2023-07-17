'use client';

import styled from 'styled-components';

type Props = {
  children? : React.ReactNode,
}

type TitleProps = {
  title : any | string,
}

const PageContainerStyle = styled.div`
  padding:6px 12px;
`

const PageTitleStyle = styled.div`
  text-align:center;
`

const PageBodyStyle = styled.div`
  width:80%;
  padding:6px 12px;
  border: 1px solid #d7d7d7;
  margin:6px auto;
  box-sizing:border-box;
`

export const PageButtonWrapStyle = styled.div`
  display : flex;
  width:80%;
  margin:12px auto 0 auto;
  >button {
    background-color:lightgoldenrodyellow;
    font-size:1.05rem;
    font-weight:bold;
    padding:0;
    margin-left:auto;
    border:none;
    transition:all 0.3s;
    >a{
      display:block;
      box-sizing:border-box;
      width:100%;
      height:100%;
      padding:12px;
      text-decoration:none;
      color:black;
      >span{
        vertical-align:middle;
      }
    }

    &:hover{
      background-color:#5564ff;
      >a{
        color:white;
      }
    }
  }
`


export const PageContainer = ({children} : Props) => {
  return (
    <PageContainerStyle>
      {children}
    </PageContainerStyle>
  )
}

export const PageTitle = ({title}: TitleProps) => {
  return (
    <PageTitleStyle>
      <h1>{title}</h1>
    </PageTitleStyle>
  )
}

export const PageBody = ({children} : Props) => {
  return(
    <PageBodyStyle>
      {children}
    </PageBodyStyle>
  )
}